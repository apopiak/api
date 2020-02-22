import { H256 } from '../interfaces/runtime';
import { AnyJson, BareOpts, Codec, Registry } from '../types';
/**
 * @name Base
 * @description A type extends the Base class, when it holds a value
 */
export default abstract class Base<T extends Codec> implements Codec {
    readonly registry: Registry;
    protected readonly raw: T;
    protected constructor(registry: Registry, value?: any);
    /**
     * @description The length of the value when encoded as a Uint8Array
     */
    get encodedLength(): number;
    /**
     * @description returns a hash of the contents
     */
    get hash(): H256;
    /**
     * @description Checks if the value is an empty value
     */
    get isEmpty(): boolean;
    /**
     * @description Compares the value of the input to see if there is a match
     */
    eq(other?: any): boolean;
    /**
     * @description Returns a hex string representation of the value. isLe returns a LE (number-only) representation
     */
    toHex(isLe?: boolean): string;
    /**
     * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
     */
    toHuman(isExtended?: boolean): AnyJson;
    /**
     * @description Converts the Object to JSON, typically used for RPC transfers
     */
    toJSON(): AnyJson;
    /**
     * @description Returns the string representation of the value
     */
    toString(): string;
    /**
     * @description Encodes the value as a Uint8Array as per the SCALE specifications
     * @param isBare true when the value has none of the type-specific prefixes (internal)
     */
    toU8a(isBare?: BareOpts): Uint8Array;
    /**
     * @description Returns the base runtime type name for this instance
     */
    toRawType(): string;
}
