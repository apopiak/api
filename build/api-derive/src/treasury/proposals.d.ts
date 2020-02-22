import { ApiInterfaceRx } from '@polkadot/api/types';
import { DerivedTreasuryProposals } from '../types';
import { Observable } from 'rxjs';
/**
 * @description Retrieve all active and approved treasury proposals, along with their info
 */
export declare function proposals(api: ApiInterfaceRx): () => Observable<DerivedTreasuryProposals>;
