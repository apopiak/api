// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { DeriveCache } from '../types';

const defaultCache: DeriveCache = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  get (key: string): null {
    return null;
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  set (key: string, value: object): void {
    // noop
  }
};

let deriveCache: DeriveCache = defaultCache;

export function setDeriveCache (cache: DeriveCache = defaultCache): void {
  deriveCache = cache;
}

export { deriveCache };
