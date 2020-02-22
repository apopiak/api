import { ProviderInterface } from '@polkadot/rpc-provider/types';
import { RpcMethod } from '@polkadot/jsonrpc/types';
import { Registry } from '@polkadot/types/types';
import { RpcInterface, UserRpc } from './types';
/**
 * @name Rpc
 * @summary The API may use a HTTP or WebSockets provider.
 * @description It allows for querying a Polkadot Client Node.
 * WebSockets provider is recommended since HTTP provider only supports basic querying.
 *
 * ```mermaid
 * graph LR;
 *   A[Api] --> |WebSockets| B[WsProvider];
 *   B --> |endpoint| C[ws://127.0.0.1:9944]
 * ```
 *
 * @example
 * <BR>
 *
 * ```javascript
 * import Rpc from '@polkadot/rpc-core';
 * import WsProvider from '@polkadot/rpc-provider/ws';
 *
 * const provider = new WsProvider('ws://127.0.0.1:9944');
 * const rpc = new Rpc(provider);
 * ```
 */
export default class Rpc implements RpcInterface {
    #private;
    readonly mapping: Map<string, RpcMethod>;
    readonly provider: ProviderInterface;
    readonly registry: Registry;
    readonly sections: string[];
    readonly account: RpcInterface['account'];
    readonly author: RpcInterface['author'];
    readonly chain: RpcInterface['chain'];
    readonly contracts: RpcInterface['contracts'];
    readonly payment: RpcInterface['payment'];
    readonly rpc: RpcInterface['rpc'];
    readonly state: RpcInterface['state'];
    readonly system: RpcInterface['system'];
    /**
     * @constructor
     * Default constructor for the Api Object
     * @param  {ProviderInterface} provider An API provider using HTTP or WebSocket
     */
    constructor(registry: Registry, provider: ProviderInterface, userRpc?: UserRpc);
    /**
     * @description Manually disconnect from the attached provider
     */
    disconnect(): void;
    private createInterfaces;
    private createInterface;
    private createMethodSend;
    private createSubscriber;
    private createMethodSubscribe;
    private formatInputs;
    private treatAsHex;
    private formatOutput;
    private formatStorageData;
    private formatStorageSet;
}
