export interface JsonRpcObject {
    id: number;
    jsonrpc: '2.0';
}
export interface JsonRpcRequest extends JsonRpcObject {
    method: string;
    params: any[];
}
export interface JsonRpcResponseBaseError {
    code: number;
    data?: number | string;
    message: string;
}
interface JsonRpcResponseSingle {
    error?: JsonRpcResponseBaseError;
    result?: any;
}
interface JsonRpcResponseSubscription {
    method?: string;
    params: {
        error?: JsonRpcResponseBaseError;
        result: any;
        subscription: number;
    };
}
export declare type JsonRpcResponseBase = JsonRpcResponseSingle & JsonRpcResponseSubscription;
export declare type JsonRpcResponse = JsonRpcObject & JsonRpcResponseBase;
export declare type ProviderInterfaceCallback = (result: any) => void;
export declare type ProviderInterfaceEmitted = 'connected' | 'disconnected' | 'error';
export declare type ProviderInterfaceEmitCb = (value?: any) => any;
export interface ProviderInterface {
    readonly hasSubscriptions: boolean;
    clone(): ProviderInterface;
    disconnect(): void;
    isConnected(): boolean;
    on(type: ProviderInterfaceEmitted, sub: ProviderInterfaceEmitCb): () => void;
    send(method: string, params: any[]): Promise<any>;
    subscribe(type: string, method: string, params: any[], cb: ProviderInterfaceCallback): Promise<number>;
    unsubscribe(type: string, method: string, id: number): Promise<boolean>;
}
export {};
