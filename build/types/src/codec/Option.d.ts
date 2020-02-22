import { Codec, Constructor, InterfaceTypes, Registry } from '../types';
import Base from './Base';
/**
 * @name Option
 * @description
 * An Option is an optional field. Basically the first byte indicates that there is
 * is value to follow. If the byte is `1` there is an actual value. So the Option
 * implements that - decodes, checks for optionality and wraps the required structure
 * with a value if/as required/found.
 */
export default class Option<T extends Codec> extends Base<T> {
    private _Type;
    constructor(registry: Registry, Type: Constructor | InterfaceTypes, value?: any);
    /** @internal */
    static decodeOption(registry: Registry, Type: Constructor, value?: any): Codec;
    /** @internal */
    private static decodeOptionU8a;
    static with<O extends Codec>(Type: Constructor | InterfaceTypes): Constructor<Option<O>>;
    /**
     * @description The length of the value when encoded as a Uint8Array
     */
    get encodedLength(): number;
    /**
     * @description Checks if the Option has no value
     */
    get isEmpty(): boolean;
    /**
     * @description Checks if the Option has no value
     */
    get isNone(): boolean;
    /**
     * @description Checks if the Option has a value
     */
    get isSome(): boolean;
    /**
     * @description The actual value for the Option
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
     * @description Returns the base runtime type name for this instance
     */
    toRawType(isBare?: boolean): string;
    /**
     * @description Encodes the value as a Uint8Array as per the SCALE specifications
     * @param isBare true when the value has none of the type-specific prefixes (internal)
     */
    toU8a(isBare?: boolean): Uint8Array;
    /**
     * @description Returns the value that the Option represents (if available), throws if null
     */
    unwrap(): T;
    /**
     * @description Returns the value that the Option represents (if available) or defaultValue if none
     * @param defaultValue The value to return if the option isNone
     */
    unwrapOr<O>(defaultValue: O): T | O;
}
