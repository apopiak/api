import { AnyJson, Codec, Constructor, InterfaceTypes, Registry } from '../types';
import Base from './Base';
export interface EnumConstructor<T = Codec> {
    new (registry: Registry, value?: any, index?: number): T;
}
/**
 * @name Enum
 * @description
 * This implements an enum, that based on the value wraps a different type. It is effectively
 * an extension to enum where the value type is determined by the actual index.
 */
export default class Enum extends Base<Codec> {
    private _def;
    private _index;
    private _indexes;
    private _isBasic;
    constructor(registry: Registry, def: Record<string, InterfaceTypes | Constructor> | string[], value?: any, index?: number);
    static with(Types: Record<string, InterfaceTypes | Constructor> | string[]): EnumConstructor<Enum>;
    /**
     * @description The length of the value when encoded as a Uint8Array
     */
    get encodedLength(): number;
    /**
     * @description The index of the metadata value
     */
    get index(): number;
    /**
     * @description true if this is a basic enum (no values)
     */
    get isBasic(): boolean;
    /**
     * @description Checks if the Enum points to a [[Null]] type
     */
    get isNone(): boolean;
    /**
     * @description Checks if the Enum points to a [[Null]] type (deprecated, use isNone)
     */
    get isNull(): boolean;
    /**
     * @description The available keys for this enum
     */
    get defEntries(): string[];
    /**
     * @description The available keys for this enum
     */
    get defKeys(): string[];
    /**
     * @description The name of the type this enum value represents
     */
    get type(): string;
    /**
     * @description The value of the enum
     */
    get value(): Codec;
    /**
     * @description Compares the value of the input to see if there is a match
     */
    eq(other?: any): boolean;
    /**
     * @description Returns a hex string representation of the value
     */
    toHex(): string;
    /**
     * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
     */
    toHuman(isExtended?: boolean): AnyJson;
    /**
     * @description Converts the Object to JSON, typically used for RPC transfers
     */
    toJSON(): AnyJson;
    /**
     * @description Returns the number representation for the value
     */
    toNumber(): number;
    /**
     * @description Returns a raw struct representation of the enum types
     */
    protected toRawStruct(): string[] | Record<string, string>;
    /**
     * @description Returns the base runtime type name for this instance
     */
    toRawType(): string;
    /**
     * @description Returns the string representation of the value
     */
    toString(): string;
    /**
     * @description Encodes the value as a Uint8Array as per the SCALE specifications
     * @param isBare true when the value has none of the type-specific prefixes (internal)
     */
    toU8a(isBare?: boolean): Uint8Array;
}
