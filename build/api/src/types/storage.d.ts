import { Observable } from 'rxjs';
import { u64 } from '@polkadot/types';
import { Hash } from '@polkadot/types/interfaces';
import { AnyFunction, Callback, Codec, CodecArg } from '@polkadot/types/types';
import StorageKey, { StorageEntry } from '@polkadot/types/primitive/StorageKey';
import { ApiTypes, MethodResult, ObsInnerType, PromiseOrObs, UnsubscribePromise } from './base';
export interface AugmentedQueries<ApiType extends ApiTypes> {
}
export declare type AugmentedQuery<ApiType extends ApiTypes, F extends AnyFunction> = MethodResult<ApiType, F> & StorageEntryBase<ApiType, F>;
export declare type AugmentedQueryDoubleMap<ApiType extends ApiTypes, F extends AnyFunction, FirstKeyType = any> = MethodResult<ApiType, F> & StorageEntryDoubleMap<ApiType, F, FirstKeyType>;
declare type GenericStorageEntryFunction = (arg1?: CodecArg, arg2?: CodecArg) => Observable<Codec>;
export declare type QueryableStorageEntry<ApiType extends ApiTypes> = ApiType extends 'rxjs' ? AugmentedQuery<'rxjs', GenericStorageEntryFunction> : AugmentedQuery<'promise', GenericStorageEntryFunction> & StorageEntryPromiseOverloads;
export interface StorageEntryBase<ApiType extends ApiTypes, F extends AnyFunction> {
    at: (hash: Hash | Uint8Array | string, ...args: Parameters<F>) => PromiseOrObs<ApiType, ObsInnerType<ReturnType<F>>>;
    creator: StorageEntry;
    entries: (arg?: any) => PromiseOrObs<ApiType, [StorageKey, ObsInnerType<ReturnType<F>>][]>;
    hash: (...args: Parameters<F>) => PromiseOrObs<ApiType, Hash>;
    key: (...args: Parameters<F>) => string;
    keyPrefix: () => string;
    size: (...args: Parameters<F>) => PromiseOrObs<ApiType, u64>;
    multi: ApiType extends 'rxjs' ? StorageEntryObservableMulti : StorageEntryPromiseMulti;
}
export interface StorageEntryDoubleMap<ApiType extends ApiTypes, F extends AnyFunction, FirstKeyType> extends StorageEntryBase<ApiType, F> {
    entries: (arg?: FirstKeyType) => PromiseOrObs<ApiType, [StorageKey, ObsInnerType<ReturnType<F>>][]>;
}
interface StorageEntryObservableMulti {
    <T extends Codec>(args: (CodecArg[] | CodecArg)[]): Observable<T[]>;
}
interface StorageEntryPromiseMulti {
    <T extends Codec>(args: (CodecArg[] | CodecArg)[]): Promise<T[]>;
    <T extends Codec>(args: (CodecArg[] | CodecArg)[], callback: Callback<T[]>): UnsubscribePromise;
}
export interface StorageEntryPromiseOverloads {
    (arg1?: CodecArg, arg2?: CodecArg): Promise<Codec>;
    <T extends Codec>(arg1?: CodecArg, arg2?: CodecArg): Promise<T>;
    <T extends Codec>(callback: Callback<T>): UnsubscribePromise;
    <T extends Codec>(arg: CodecArg, callback: Callback<T>): UnsubscribePromise;
    <T extends Codec>(arg1: CodecArg, arg2: CodecArg, callback: Callback<T>): UnsubscribePromise;
}
export interface QueryableModuleStorage<ApiType extends ApiTypes> {
    [index: string]: QueryableStorageEntry<ApiType>;
}
export declare type QueryableStorageMultiArg<ApiType extends ApiTypes> = QueryableStorageEntry<ApiType> | [QueryableStorageEntry<ApiType>, ...CodecArg[]];
export interface QueryableStorageMultiBase<ApiType extends ApiTypes> {
    <T extends Codec[]>(calls: QueryableStorageMultiArg<ApiType>[]): Observable<T>;
}
export interface QueryableStorageMultiPromise<ApiType extends ApiTypes> {
    <T extends Codec[]>(calls: QueryableStorageMultiArg<ApiType>[], callback: Callback<T>): UnsubscribePromise;
}
export declare type QueryableStorageMulti<ApiType extends ApiTypes> = ApiType extends 'rxjs' ? QueryableStorageMultiBase<ApiType> : QueryableStorageMultiPromise<ApiType>;
export interface QueryableStorage<ApiType extends ApiTypes> extends AugmentedQueries<ApiType> {
    [index: string]: QueryableModuleStorage<ApiType>;
}
export {};
