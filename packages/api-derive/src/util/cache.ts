// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { DeriveCache } from '../types';

const PREFIX = 'derive';

const defaultCache: DeriveCache = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  get (key: string): null | undefined {
    return null;
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  set (key: string, value: any): void {
    // noop
  }
};

let deriveCache: DeriveCache = defaultCache;

export function setDeriveCache (chainId: string, cache: DeriveCache = defaultCache): void {
  deriveCache = {
    get <T = any> (key: string): T | any {
      return cache.get<T>(`${PREFIX}:${chainId}:${key}`);
    },
    set (key: string, value: any): void {
      cache.set(`${PREFIX}:${chainId}:${key}`, value);
    }
  };
}

export { deriveCache };
