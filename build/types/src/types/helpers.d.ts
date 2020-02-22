import BN from 'bn.js';
import { InterfaceRegistry } from '../interfaceRegistry';
export declare type InterfaceTypes = keyof InterfaceRegistry;
export declare type AnyFunction = (...args: any[]) => any;
interface AnyJsonArray extends Array<AnyJson> {
}
export declare type AnyJson = string | number | boolean | null | undefined | AnyJsonArray | {
    [index: string]: AnyJson;
};
export declare type AnyNumber = BN | BigInt | Uint8Array | number | string;
export declare type AnyString = string | string;
export declare type AnyU8a = Uint8Array | number[] | string;
export declare type ArrayElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<infer ElementType> ? ElementType : never;
export declare type BareOpts = boolean | Record<string, boolean>;
export declare type Callback<T> = (result: T) => void | Promise<void>;
export {};
