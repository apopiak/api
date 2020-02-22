import { Observable } from 'rxjs';
export * from './types.jsonrpc';
export interface RpcInterfaceMethod {
    (...params: any[]): Observable<any>;
}
export interface UserRpcMethod {
    description?: string;
    name: string;
    params: {
        isOptional?: boolean;
        name: string;
        type: string;
    }[];
    type: string;
}
export declare type UserRpc = Record<string, UserRpcMethod[]>;
