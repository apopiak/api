import { AccountId, AccountIndex, Address } from '@polkadot/types/interfaces';
import { DerivedBalancesAccount } from '../types';
import { Observable } from 'rxjs';
import { ApiInterfaceRx } from '@polkadot/api/types';
export declare function votingBalances(api: ApiInterfaceRx): (addresses?: (AccountId | AccountIndex | Address | string)[]) => Observable<DerivedBalancesAccount[]>;
