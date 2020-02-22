import { ProviderInterface, ProviderInterfaceCallback, ProviderInterfaceEmitted, ProviderInterfaceEmitCb } from '../types';
import './polyfill';
declare type CallbackHandler = (error?: null | Error, value?: any) => void;
interface SubscriptionHandler {
    callback: CallbackHandler;
    type: string;
}
interface WSProviderInterface extends ProviderInterface {
    connect(): void;
}
/**
 * # @polkadot/rpc-provider/ws
 *
 * @name WsProvider
 *
 * @description The WebSocket Provider allows sending requests using WebSocket to a WebSocket RPC server TCP port. Unlike the [[HttpProvider]], it does support subscriptions and allows listening to events such as new blocks or balance changes.
 *
 * @example
 * <BR>
 *
 * ```javascript
 * import Api from '@polkadot/api/promise';
 * import WsProvider from '@polkadot/rpc-provider/ws';
 *
 * const provider = new WsProvider('ws://127.0.0.1:9944');
 * const api = new Api(provider);
 * ```
 *
 * @see [[HttpProvider]]
 */
export default class WsProvider implements WSProviderInterface {
    #private;
    /**
     * @param {string}  endpoint    The endpoint url. Usually `ws://ip:9944` or `wss://ip:9944`
     * @param {boolean} autoConnect Whether to connect automatically or not.
     */
    constructor(endpoint?: string, autoConnect?: boolean);
    /**
     * @summary `true` when this provider supports subscriptions
     */
    get hasSubscriptions(): boolean;
    /**
     * @description Returns a clone of the object
     */
    clone(): WsProvider;
    /**
     * @summary Manually connect
     * @description The [[WsProvider]] connects automatically by default, however if you decided otherwise, you may
     * connect manually using this method.
     */
    connect(): void;
    /**
     * @description Manually disconnect from the connection, clearing autoconnect logic
     */
    disconnect(): void;
    /**
     * @summary Whether the node is connected or not.
     * @return {boolean} true if connected
     */
    isConnected(): boolean;
    /**
     * @summary Listens on events after having subscribed using the [[subscribe]] function.
     * @param  {ProviderInterfaceEmitted} type Event
     * @param  {ProviderInterfaceEmitCb}  sub  Callback
     * @return unsubscribe function
     */
    on(type: ProviderInterfaceEmitted, sub: ProviderInterfaceEmitCb): () => void;
    /**
     * @summary Send JSON data using WebSockets to configured HTTP Endpoint or queue.
     * @param method The RPC methods to execute
     * @param params Encoded paramaters as appliucable for the method
     * @param subscription Subscription details (internally used)
     */
    send(method: string, params: any[], subscription?: SubscriptionHandler): Promise<any>;
    /**
     * @name subscribe
     * @summary Allows subscribing to a specific event.
     * @param  {string}                     type     Subscription type
     * @param  {string}                     method   Subscription method
     * @param  {any[]}                 params   Parameters
     * @param  {ProviderInterfaceCallback} callback Callback
     * @return {Promise<number>}                     Promise resolving to the dd of the subscription you can use with [[unsubscribe]].
     *
     * @example
     * <BR>
     *
     * ```javascript
     * const provider = new WsProvider('ws://127.0.0.1:9944');
     * const rpc = new Rpc(provider);
     *
     * rpc.state.subscribeStorage([[storage.system.account, <Address>]], (_, values) => {
     *   console.log(values)
     * }).then((subscriptionId) => {
     *   console.log('balance changes subscription id: ', subscriptionId)
     * })
     * ```
     */
    subscribe(type: string, method: string, params: any[], callback: ProviderInterfaceCallback): Promise<number>;
    /**
     * @summary Allows unsubscribing to subscriptions made with [[subscribe]].
     */
    unsubscribe(type: string, method: string, id: number): Promise<boolean>;
}
export {};
