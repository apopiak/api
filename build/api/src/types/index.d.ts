import './augment';
import BN from 'bn.js';
import { DeriveCustom, ExactDerive } from '@polkadot/api-derive';
import { Constants } from '@polkadot/metadata/Decorated/types';
import { RpcInterface, UserRpc } from '@polkadot/rpc-core/types';
import { Metadata } from '@polkadot/types';
import { Hash, RuntimeVersion } from '@polkadot/types/interfaces';
import { RegistryTypes, Signer, SignerResult, SignatureOptions, Registry } from '@polkadot/types/types';
import ApiBase from '../base';
import { DeriveAllSections } from '../util/decorate';
import { DecoratedRpc } from './rpc';
import { QueryableStorage, QueryableStorageMulti } from './storage';
import { SubmittableExtrinsics } from './submittable';
import { ProviderInterface, ProviderInterfaceEmitted } from '@polkadot/rpc-provider/types';
export * from '../submittable/types';
export * from './base';
export * from './rpc';
export * from './storage';
export * from './submittable';
export interface ApiOptions {
    /**
     * @description Add custom derives to be injected
     */
    derives?: DeriveCustom;
    /**
     * @description prebundles is a map of 'genesis hash and runtime spec version' as key to metadata's hex string
     * if genesis hash and runtime spec version matches, then use metadata, else fetch it from chain
     */
    metadata?: Record<string, string>;
    /**
     * @description Transport Provider from rpc-provider. If not specified, it will default to
     * connecting to a WsProvider connecting localhost with the default port, i.e. `ws://127.0.0.1:9944`
     */
    provider?: ProviderInterface;
    /**
     * @description A type registry to use along with this instance
     */
    registry?: Registry;
    /**
     * @description User-defined RPC methods
     */
    rpc?: UserRpc;
    /**
     * @description An external signer which will be used to sign extrinsic when account passed in is not KeyringPair
     */
    signer?: Signer;
    /**
     * @description The source object to use for runtime information (only used when cloning)
     */
    source?: ApiBase<any>;
    /**
     * @description Additional types used by runtime modules. This is nessusary if the runtime modules
     * uses types not available in the base Substrate runtime.
     */
    types?: RegistryTypes;
    /**
     * @description Additional types that are injected based on the chain we are connecting to. There are keyed by the chain, i.e. `{ 'Kusama CC1': { ... } }`
     */
    typesChain?: Record<string, RegistryTypes>;
    /**
     * @description Additional types that are injected based on the type of node we are connecting to, as set via specName in the runtime version. There are keyed by the node, i.e. `{ 'edgeware': { ... } }`
     */
    typesSpec?: Record<string, RegistryTypes>;
}
export interface ApiInterfaceRx {
    consts: Constants;
    derive: DeriveAllSections<'rxjs', ExactDerive>;
    extrinsicType: number;
    genesisHash?: Hash;
    hasSubscriptions: boolean;
    registry: Registry;
    runtimeMetadata: Metadata;
    runtimeVersion?: RuntimeVersion;
    query: QueryableStorage<'rxjs'>;
    queryMulti: QueryableStorageMulti<'rxjs'>;
    rpc: DecoratedRpc<'rxjs', RpcInterface>;
    tx: SubmittableExtrinsics<'rxjs'>;
    signer?: Signer;
}
export declare type ApiInterfaceEvents = ProviderInterfaceEmitted | 'ready';
export interface SignerOptions extends SignatureOptions {
    blockNumber: BN;
    genesisHash: Hash;
}
export { ApiBase, Signer, SignerResult };
