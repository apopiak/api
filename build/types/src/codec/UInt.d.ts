import { AnyNumber, Constructor, Registry } from '../types';
import AbstractInt, { UIntBitLength } from './AbstractInt';
/**
 * @name UInt
 * @description
 * A generic unsigned integer codec. For Substrate all numbers are Little Endian encoded,
 * this handles the encoding and decoding of those numbers. Upon construction
 * the bitLength is provided and any additional use keeps the number to this
 * length. This extends `BN`, so all methods available on a normal `BN` object
 * is available here.
 * @noInheritDoc
 */
export default class UInt extends AbstractInt {
    constructor(registry: Registry, value?: AnyNumber, bitLength?: UIntBitLength, isHexJson?: boolean);
    static with(bitLength: UIntBitLength, typeName?: string): Constructor<UInt>;
    /**
     * @description Returns a hex string representation of the value
     */
    toHex(isLe?: boolean): string;
    /**
     * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
     */
    toHuman(isExpanded?: boolean): any;
    /**
     * @description Returns the base runtime type name for this instance
     */
    toRawType(): string;
    /**
     * @description Encodes the value as a Uint8Array as per the SCALE specifications
     * @param isBare true when the value has none of the type-specific prefixes (internal)
     */
    toU8a(isBare?: boolean): Uint8Array;
}
