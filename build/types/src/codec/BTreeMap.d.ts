import { H256 } from '../interfaces/runtime';
import { AnyJson, Constructor, Codec, InterfaceTypes, Registry } from '../types';
export default class BTreeMap<K extends Codec = Codec, V extends Codec = Codec> extends Map<K, V> implements Codec {
    readonly registry: Registry;
    private readonly _KeyClass;
    private readonly _ValClass;
    constructor(registry: Registry, keyType: Constructor<K> | InterfaceTypes, valType: Constructor<V> | InterfaceTypes, rawValue: any);
    /**
     * Decode input to pass into constructor.
     *
     * @param KeyClass - Type of the map key
     * @param ValClass - Type of the map value
     * @param value - Value to decode, one of:
     * - null
     * - undefined
     * - hex
     * - Uint8Array
     * - Map<any, any>, where both key and value types are either
     *   constructors or decodeable values for their types.
     * @param jsonMap
     * @internal
     */
    private static decodeBTreeMap;
    /** @internal */
    private static decodeBTreeMapFromU8a;
    /** @internal */
    private static decodeBTreeMapFromMap;
    static with<K extends Codec, V extends Codec>(keyType: Constructor<K> | InterfaceTypes, valType: Constructor<V> | InterfaceTypes): Constructor<BTreeMap<K, V>>;
    /**
     * @description The length of the value when encoded as a Uint8Array
     */
    get encodedLength(): number;
    /**
     * @description Returns a hash of the value
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
