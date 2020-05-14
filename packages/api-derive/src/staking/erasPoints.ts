// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { EraIndex, EraRewardPoints, RewardPoint } from '@polkadot/types/interfaces';
import { DeriveEraPoints, DeriveEraValPoints } from '../types';

import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { deriveCache, memo } from '../util';

interface DeriveEraPointsJSON {
  era: string;
  eraPoints: string;
  validators: Record<string, string>;
}

const CACHE_KEY = 'staking:erasPoints';

function deserialize (api: ApiInterfaceRx, { era, eraPoints, validators }: DeriveEraPointsJSON): DeriveEraPoints {
  return {
    era: api.registry.createType('EraIndex', era),
    eraPoints: api.registry.createType('RewardPoint', eraPoints),
    validators: Object.keys(validators).reduce((result: Record<string, RewardPoint>, validatorId): Record<string, RewardPoint> => {
      result[validatorId] = api.registry.createType('RewardPoint', validators[validatorId]);

      return result;
    }, {})
  };
}

function serialize ({ era, eraPoints, validators }: DeriveEraPoints): DeriveEraPointsJSON {
  return {
    era: era.toJSON(),
    eraPoints: eraPoints.toJSON(),
    validators: Object.keys(validators).reduce((result: Record<string, string>, validatorId): Record<string, string> => {
      result[validatorId] = validators[validatorId].toJSON();

      return result;
    }, {})
  };
}

function mapValidators ({ individual }: EraRewardPoints): DeriveEraValPoints {
  return [...individual.entries()]
    .filter(([, points]): boolean => points.gtn(0))
    .reduce((result: DeriveEraValPoints, [validatorId, points]): DeriveEraValPoints => {
      result[validatorId.toString()] = points;

      return result;
    }, {});
}

export function _erasPoints (api: ApiInterfaceRx): (eras: EraIndex[], withActive: boolean) => Observable<DeriveEraPoints[]> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return memo((eras: EraIndex[], withActive: boolean): Observable<DeriveEraPoints[]> => {
    if (!eras.length) {
      return of([]);
    }

    const cached = (deriveCache.get<DeriveEraPointsJSON[]>(CACHE_KEY) || [])
      .map((c) => deserialize(api, c))
      .filter((c) => eras.some((era) => era.eq(c.era)));
    const filtered = withActive
      ? eras
      : eras.filter((era) => !cached.some((c) => era.eq(c.era)));

    if (!filtered.length) {
      return of(cached);
    }

    console.error('filtered', eras, filtered);

    return api.query.staking.erasRewardPoints.multi<EraRewardPoints>(filtered).pipe(
      map((points): DeriveEraPoints[] => {
        const retrieved = filtered.map((era, index): DeriveEraPoints => ({
          era,
          eraPoints: points[index].total,
          validators: mapValidators(points[index])
        }));

        if (withActive) {
          return retrieved;
        }

        const result = cached
          .concat(...retrieved)
          .sort((a, b) => a.era.cmp(b.era));

        deriveCache.set(CACHE_KEY, result.map((d) => serialize(d)));

        console.error(result);

        return result;
      })
    );
  });
}

export function erasPoints (api: ApiInterfaceRx): (withActive?: boolean) => Observable<DeriveEraPoints[]> {
  return memo((withActive = false): Observable<DeriveEraPoints[]> =>
    api.derive.staking.erasHistoric(withActive).pipe(
      switchMap((eras) => api.derive.staking._erasPoints(eras, withActive))
    )
  );
}
