import { AccountId, Vote } from '@polkadot/types/interfaces';
import BN from 'bn.js';
import { Observable } from 'rxjs';
import { ApiInterfaceRx } from '@polkadot/api/types';
export declare function votes(api: ApiInterfaceRx): (referendumId: BN | number, accountIds?: AccountId[]) => Observable<Vote[]>;
