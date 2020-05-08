[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types/interfaces"](../modules/_types_interfaces_.md) › [ICompact](_types_interfaces_.icompact.md)

# Interface: ICompact <**T**>

## Type parameters

▪ **T**

## Hierarchy

* [Codec](_types_codec_.codec.md)

  ↳ **ICompact**

## Implemented by

* [Compact](../classes/_codec_compact_.compact.md)

## Index

### Properties

* [encodedLength](_types_interfaces_.icompact.md#readonly-encodedlength)
* [hash](_types_interfaces_.icompact.md#readonly-hash)
* [isEmpty](_types_interfaces_.icompact.md#readonly-isempty)
* [registry](_types_interfaces_.icompact.md#readonly-registry)

### Methods

* [eq](_types_interfaces_.icompact.md#eq)
* [toBn](_types_interfaces_.icompact.md#tobn)
* [toHex](_types_interfaces_.icompact.md#tohex)
* [toHuman](_types_interfaces_.icompact.md#tohuman)
* [toJSON](_types_interfaces_.icompact.md#tojson)
* [toNumber](_types_interfaces_.icompact.md#tonumber)
* [toRawType](_types_interfaces_.icompact.md#torawtype)
* [toString](_types_interfaces_.icompact.md#tostring)
* [toU8a](_types_interfaces_.icompact.md#tou8a)
* [unwrap](_types_interfaces_.icompact.md#unwrap)

## Properties

### `Readonly` encodedLength

• **encodedLength**: *number*

*Inherited from [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[encodedLength](_extrinsic_signerpayload_.signerpayloadtype.md#readonly-encodedlength)*

*Defined in [packages/types/src/types/codec.ts:40](https://github.com/polkadot-js/api/blob/664151f829/packages/types/src/types/codec.ts#L40)*

**`description`** The length of the value when encoded as a Uint8Array

___

### `Readonly` hash

• **hash**: *H256*

*Inherited from [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[hash](_extrinsic_signerpayload_.signerpayloadtype.md#readonly-hash)*

*Defined in [packages/types/src/types/codec.ts:45](https://github.com/polkadot-js/api/blob/664151f829/packages/types/src/types/codec.ts#L45)*

**`description`** Returns a hash of the value

___

### `Readonly` isEmpty

• **isEmpty**: *boolean*

*Inherited from [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[isEmpty](_extrinsic_signerpayload_.signerpayloadtype.md#readonly-isempty)*

*Defined in [packages/types/src/types/codec.ts:50](https://github.com/polkadot-js/api/blob/664151f829/packages/types/src/types/codec.ts#L50)*

**`description`** Checks if the value is an empty value

___

### `Readonly` registry

• **registry**: *[Registry](_types_registry_.registry.md)*

*Inherited from [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[registry](_extrinsic_signerpayload_.signerpayloadtype.md#readonly-registry)*

*Defined in [packages/types/src/types/codec.ts:55](https://github.com/polkadot-js/api/blob/664151f829/packages/types/src/types/codec.ts#L55)*

**`description`** The registry associated with this object

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[eq](_extrinsic_signerpayload_.signerpayloadtype.md#eq)*

*Defined in [packages/types/src/types/codec.ts:60](https://github.com/polkadot-js/api/blob/664151f829/packages/types/src/types/codec.ts#L60)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toBn

▸ **toBn**(): *BN*

*Defined in [packages/types/src/types/interfaces.ts:14](https://github.com/polkadot-js/api/blob/664151f829/packages/types/src/types/interfaces.ts#L14)*

**Returns:** *BN*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Inherited from [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[toHex](_extrinsic_signerpayload_.signerpayloadtype.md#tohex)*

*Defined in [packages/types/src/types/codec.ts:65](https://github.com/polkadot-js/api/blob/664151f829/packages/types/src/types/codec.ts#L65)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Parameters:**

Name | Type |
------ | ------ |
`isLe?` | undefined &#124; false &#124; true |

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(`isExtended?`: undefined | false | true): *[AnyJson](../modules/_types_helpers_.md#anyjson)*

*Inherited from [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[toHuman](_extrinsic_signerpayload_.signerpayloadtype.md#tohuman)*

*Defined in [packages/types/src/types/codec.ts:70](https://github.com/polkadot-js/api/blob/664151f829/packages/types/src/types/codec.ts#L70)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

**Parameters:**

Name | Type |
------ | ------ |
`isExtended?` | undefined &#124; false &#124; true |

**Returns:** *[AnyJson](../modules/_types_helpers_.md#anyjson)*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_helpers_.md#anyjson)*

*Inherited from [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[toJSON](_extrinsic_signerpayload_.signerpayloadtype.md#tojson)*

*Defined in [packages/types/src/types/codec.ts:75](https://github.com/polkadot-js/api/blob/664151f829/packages/types/src/types/codec.ts#L75)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_helpers_.md#anyjson)*

___

###  toNumber

▸ **toNumber**(): *number*

*Defined in [packages/types/src/types/interfaces.ts:15](https://github.com/polkadot-js/api/blob/664151f829/packages/types/src/types/interfaces.ts#L15)*

**Returns:** *number*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[toRawType](_extrinsic_signerpayload_.signerpayloadtype.md#torawtype)*

*Defined in [packages/types/src/types/codec.ts:80](https://github.com/polkadot-js/api/blob/664151f829/packages/types/src/types/codec.ts#L80)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[toString](_extrinsic_signerpayload_.signerpayloadtype.md#tostring)*

*Defined in [packages/types/src/types/codec.ts:85](https://github.com/polkadot-js/api/blob/664151f829/packages/types/src/types/codec.ts#L85)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: [BareOpts](../modules/_types_helpers_.md#bareopts)): *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

*Inherited from [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[toU8a](_extrinsic_signerpayload_.signerpayloadtype.md#tou8a)*

*Defined in [packages/types/src/types/codec.ts:91](https://github.com/polkadot-js/api/blob/664151f829/packages/types/src/types/codec.ts#L91)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | [BareOpts](../modules/_types_helpers_.md#bareopts) | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

___

###  unwrap

▸ **unwrap**(): *T*

*Defined in [packages/types/src/types/interfaces.ts:16](https://github.com/polkadot-js/api/blob/664151f829/packages/types/src/types/interfaces.ts#L16)*

**Returns:** *T*