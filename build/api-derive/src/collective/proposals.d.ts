import { ApiInterfaceRx } from '@polkadot/api/types';
import { DerivedCollectiveProposal } from '../types';
import { Observable } from 'rxjs';
export declare function proposals(api: ApiInterfaceRx, section: 'council' | 'technicalCommittee'): () => Observable<DerivedCollectiveProposal[]>;
