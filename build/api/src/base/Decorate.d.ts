import { Constants, Storage } from '@polkadot/metadata/Decorated/types';
import { RpcInterface } from '@polkadot/rpc-core/types';
import { InterfaceRegistry } from '@polkadot/types/interfaceRegistry';
import { Hash, RuntimeVersion } from '@polkadot/types/interfaces';
import { AnyFunction, InterfaceTypes, ModulesWithCalls, Registry, RegistryTypes } from '@polkadot/types/types';
import { ApiInterfaceRx, ApiOptions, ApiTypes, DecorateMethod, DecoratedRpc, QueryableStorage, QueryableStorageMulti, SubmittableExtrinsics } from '../types';
import BN from 'bn.js';
import { BehaviorSubject } from 'rxjs';
import { ExactDerive } from '@polkadot/api-derive';
import RpcCore from '@polkadot/rpc-core';
import { Metadata, Text } from '@polkadot/types';
import { DeriveAllSections } from '../util/decorate';
import Events from './Events';
export default abstract class Decorate<ApiType extends ApiTypes> extends Events {
    readonly registry: Registry;
    protected __phantom: BN;
    protected _consts: Constants;
    protected _derive?: ReturnType<Decorate<ApiType>['decorateDerive']>;
    protected _extrinsics: SubmittableExtrinsics<ApiType>;
    protected _extrinsicType: number;
    protected _genesisHash?: Hash;
    protected _isConnected: BehaviorSubject<boolean>;
    protected _isReady: boolean;
    protected readonly _options: ApiOptions;
    protected _query: QueryableStorage<ApiType>;
    protected _queryMulti?: QueryableStorageMulti<ApiType>;
    protected _rpc?: DecoratedRpc<ApiType, RpcInterface>;
    protected _rpcCore: RpcCore;
    protected _runtimeChain?: Text;
    protected _runtimeMetadata?: Metadata;
    protected _runtimeVersion?: RuntimeVersion;
    protected _rx: ApiInterfaceRx;
    protected _type: ApiTypes;
    /**
     * This is the one and only method concrete children classes need to implement.
     * It's a higher-order function, which takes one argument
     * `method: Method extends (...args: any[]) => Observable<any>`
     * (and one optional `options`), and should return the user facing method.
     * For example:
     * - For ApiRx, `decorateMethod` should just be identity, because the input
     * function is already an Observable
     * - For ApiPromise, `decorateMethod` should return a function that takes all
     * the parameters from `method`, adds an optional `callback` argument, and
     * returns a Promise.
     *
     * We could easily imagine other user-facing interfaces, which are simply
     * implemented by transforming the Observable to Stream/Iterator/Kefir/Bacon
     * via `decorateMethod`.
     */
    protected decorateMethod: DecorateMethod<ApiType>;
    /**
     * @description Create an instance of the class
     *
     * @param options Options object to create API instance or a Provider instance
     *
     * @example
     * <BR>
     *
     * ```javascript
     * import Api from '@polkadot/api/promise';
     *
     * const api = new Api().isReady();
     *
     * api.rpc.subscribeNewHeads((header) => {
     *   console.log(`new block #${header.number.toNumber()}`);
     * });
     * ```
     */
    constructor(options: ApiOptions, type: ApiTypes, decorateMethod: DecorateMethod<ApiType>);
    abstract createType<K extends InterfaceTypes>(type: K, ...params: any[]): InterfaceRegistry[K];
    abstract registerTypes(types?: RegistryTypes): void;
    /**
     * @returns `true` if the API operates with subscriptions
     */
    get hasSubscriptions(): boolean;
    injectMetadata(metadata: Metadata, fromEmpty?: boolean): void;
    private decorateFunctionMeta;
    protected filterRpc(): Promise<void>;
    protected filterRpcMethods(methods: string[]): void;
    protected decorateRpc<ApiType extends ApiTypes>(rpc: RpcCore, decorateMethod: DecorateMethod<ApiType>): DecoratedRpc<ApiType, RpcInterface>;
    protected decorateMulti<ApiType extends ApiTypes>(decorateMethod: DecorateMethod<ApiType>): QueryableStorageMulti<ApiType>;
    protected decorateExtrinsics<ApiType extends ApiTypes>(extrinsics: ModulesWithCalls, decorateMethod: DecorateMethod<ApiType>): SubmittableExtrinsics<ApiType>;
    private decorateExtrinsicEntry;
    protected decorateStorage<ApiType extends ApiTypes>(storage: Storage, decorateMethod: DecorateMethod<ApiType>): QueryableStorage<ApiType>;
    private decorateStorageEntry;
    private decorateStorageLinked;
    private retrieveMapEntries;
    protected decorateDeriveRx(decorateMethod: DecorateMethod<ApiType>): DeriveAllSections<'rxjs', ExactDerive>;
    protected decorateDerive(decorateMethod: DecorateMethod<ApiType>): DeriveAllSections<ApiType, ExactDerive>;
    /**
     * Put the `this.onCall` function of ApiRx here, because it is needed by
     * `api._rx`.
     */
    protected rxDecorateMethod: <Method extends AnyFunction>(method: Method) => Method;
}
