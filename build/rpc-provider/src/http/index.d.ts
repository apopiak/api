import { ProviderInterface, ProviderInterfaceCallback, ProviderInterfaceEmitted, ProviderInterfaceEmitCb } from '../types';
import './polyfill';
/**
 * # @polkadot/rpc-provider/https
 *
 * @name HttpProvider
 *
 * @description The HTTP Provider allows sending requests using HTTP to a HTTP RPC server TCP port. It does not support subscriptions so you won't be able to listen to events such as new blocks or balance changes. It is usually preferrable using the [[WsProvider]].
 *
 * @example
 * <BR>
 *
 * ```javascript
 * import Api from '@polkadot/api/promise';
 * import HttpProvider from '@polkadot/rpc-provider/http';
 *
 * const provider = new HttpProvider('http://127.0.0.1:9933');
 * const api = new Api(provider);
 * ```
 *
 * @see [[WsProvider]]
 */
export default class HttpProvider implements ProviderInterface {
    #private;
    /**
     * @param {string} endpoint The endpoint url starting with http://
     */
    constructor(endpoint?: string);
    /**
     * @summary `true` when this provider supports subscriptions
     */
    get hasSubscriptions(): boolean;
    /**
     * @description Returns a clone of the object
     */
    clone(): HttpProvider;
    /**
     * @description Manually disconnect from the connection
     */
    disconnect(): void;
    /**
     * @summary Whether the node is connected or not.
     * @return {boolean} true if connected
     */
    isConnected(): boolean;
    /**
     * @summary Events are not supported with the HttpProvider, see [[WsProvider]].
     * @description HTTP Provider does not have 'on' emitters. WebSockets should be used instead.
     */
    on(type: ProviderInterfaceEmitted, sub: ProviderInterfaceEmitCb): () => void;
    /**
     * @summary Send HTTP POST Request with Body to configured HTTP Endpoint.
     */
    send(method: string, params: any[]): Promise<any>;
    /**
     * @summary Subscriptions are not supported with the HttpProvider, see [[WsProvider]].
     */
    subscribe(types: string, method: string, params: any[], cb: ProviderInterfaceCallback): Promise<number>;
    /**
     * @summary Subscriptions are not supported with the HttpProvider, see [[WsProvider]].
     */
    unsubscribe(type: string, method: string, id: number): Promise<boolean>;
}
