import { StorageEntryMetadataLatest, StorageEntryTypeLatest } from '../interfaces/metadata';
import { AnyU8a, Codec, Registry } from '../types';
import Bytes from './Bytes';
export interface StorageEntry {
    (arg?: any): Uint8Array;
    iterKey?: Uint8Array & Codec;
    keyPrefix: Uint8Array;
    meta: StorageEntryMetadataLatest;
    method: string;
    prefix: string;
    section: string;
    toJSON: () => any;
}
interface Decoded {
    key?: Uint8Array | string;
    method?: string;
    section?: string;
}
interface StorageKeyExtra {
    method: string;
    section: string;
}
/** @internal */
export declare function unwrapStorageType(type: StorageEntryTypeLatest): string;
/**
 * @name StorageKey
 * @description
 * A representation of a storage key (typically hashed) in the system. It can be
 * constructed by passing in a raw key or a StorageEntry with (optional) arguments.
 */
export default class StorageKey extends Bytes {
    private _meta?;
    private _method?;
    private _outputType?;
    private _section?;
    constructor(registry: Registry, value?: AnyU8a | StorageKey | StorageEntry | [StorageEntry, any], override?: Partial<StorageKeyExtra>);
    /** @internal */
    static decodeStorageKey(value?: AnyU8a | StorageKey | StorageEntry | [StorageEntry, any]): Decoded;
    static getMeta(value: StorageKey | StorageEntry | [StorageEntry, any]): StorageEntryMetadataLatest | undefined;
    static getType(value: StorageKey | StorageEntry | [StorageEntry, any]): string | undefined;
    /**
     * @description The metadata or `undefined` when not available
     */
    get meta(): StorageEntryMetadataLatest | undefined;
    /**
     * @description The key method or `undefined` when not specified
     */
    get method(): string | undefined;
    /**
     * @description The output type, `null` when not available
     */
    get outputType(): string | undefined;
    /**
     * @description The key section or `undefined` when not specified
     */
    get section(): string | undefined;
    /**
     * @description Sets the meta for this key
     */
    setMeta(meta?: StorageEntryMetadataLatest): this;
    /**
     * @description Sets the output type for this storage key
     */
    setOutputType(outputType?: string): this;
}
export {};
