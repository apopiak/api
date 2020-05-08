[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["extrinsic/ExtrinsicEra"](../modules/_extrinsic_extrinsicera_.md) › [MortalEra](_extrinsic_extrinsicera_.mortalera.md)

# Class: MortalEra

**`name`** MortalEra

**`description`** 
The MortalEra for an extrinsic, indicating period and phase

## Hierarchy

  ↳ [Tuple](_codec_tuple_.tuple.md)

  ↳ **MortalEra**

## Implements

* [Codec](../interfaces/_types_codec_.codec.md)

## Indexable

* \[ **n**: *number*\]: [Codec](../interfaces/_types_codec_.codec.md)

**`name`** MortalEra

**`description`** 
The MortalEra for an extrinsic, indicating period and phase

## Index

### Constructors

* [constructor](_extrinsic_extrinsicera_.mortalera.md#constructor)

### Properties

* [registry](_extrinsic_extrinsicera_.mortalera.md#readonly-registry)

### Accessors

* [Types](_extrinsic_extrinsicera_.mortalera.md#types)
* [encodedLength](_extrinsic_extrinsicera_.mortalera.md#encodedlength)
* [hash](_extrinsic_extrinsicera_.mortalera.md#hash)
* [isEmpty](_extrinsic_extrinsicera_.mortalera.md#isempty)
* [length](_extrinsic_extrinsicera_.mortalera.md#length)
* [period](_extrinsic_extrinsicera_.mortalera.md#period)
* [phase](_extrinsic_extrinsicera_.mortalera.md#phase)

### Methods

* [birth](_extrinsic_extrinsicera_.mortalera.md#birth)
* [death](_extrinsic_extrinsicera_.mortalera.md#death)
* [eq](_extrinsic_extrinsicera_.mortalera.md#eq)
* [filter](_extrinsic_extrinsicera_.mortalera.md#filter)
* [includes](_extrinsic_extrinsicera_.mortalera.md#includes)
* [map](_extrinsic_extrinsicera_.mortalera.md#map)
* [toArray](_extrinsic_extrinsicera_.mortalera.md#toarray)
* [toHex](_extrinsic_extrinsicera_.mortalera.md#tohex)
* [toHuman](_extrinsic_extrinsicera_.mortalera.md#tohuman)
* [toJSON](_extrinsic_extrinsicera_.mortalera.md#tojson)
* [toRawType](_extrinsic_extrinsicera_.mortalera.md#torawtype)
* [toString](_extrinsic_extrinsicera_.mortalera.md#tostring)
* [toU8a](_extrinsic_extrinsicera_.mortalera.md#tou8a)
* [with](_extrinsic_extrinsicera_.mortalera.md#static-with)

## Constructors

###  constructor

\+ **new MortalEra**(`registry`: [Registry](../interfaces/_types_registry_.registry.md), `value?`: MortalMethod | [Uint8Array](_codec_raw_.raw.md#static-uint8array) | number[] | string): *[MortalEra](_extrinsic_extrinsicera_.mortalera.md)*

*Overrides [Tuple](_codec_tuple_.tuple.md).[constructor](_codec_tuple_.tuple.md#constructor)*

*Defined in [packages/types/src/extrinsic/ExtrinsicEra.ts:61](https://github.com/polkadot-js/api/blob/664151f829/packages/types/src/extrinsic/ExtrinsicEra.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_types_registry_.registry.md) |
`value?` | MortalMethod &#124; [Uint8Array](_codec_raw_.raw.md#static-uint8array) &#124; number[] &#124; string |

**Returns:** *[MortalEra](_extrinsic_extrinsicera_.mortalera.md)*

## Properties

### `Readonly` registry

• **registry**: *[Registry](../interfaces/_types_registry_.registry.md)*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md).[registry](../interfaces/_types_codec_.codec.md#readonly-registry)*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[registry](_codec_abstractarray_.abstractarray.md#readonly-registry)*

*Defined in [packages/types/src/codec/AbstractArray.ts:23](https://github.com/polkadot-js/api/blob/664151f829/packages/types/src/codec/AbstractArray.ts#L23)*

## Accessors

###  Types

• **get Types**(): *string[]*

*Inherited from [Tuple](_codec_tuple_.tuple.md).[Types](_codec_tuple_.tuple.md#types)*

*Defined in [packages/types/src/codec/Tuple.ts:84](https://github.com/polkadot-js/api/blob/664151f829/packages/types/src/codec/Tuple.ts#L84)*

**`description`** The types definition of the tuple

**Returns:** *string[]*

___

###  encodedLength

• **get encodedLength**(): *number*

*Overrides [Tuple](_codec_tuple_.tuple.md).[encodedLength](_codec_tuple_.tuple.md#encodedlength)*

*Defined in [packages/types/src/extrinsic/ExtrinsicEra.ts:121](https://github.com/polkadot-js/api/blob/664151f829/packages/types/src/extrinsic/ExtrinsicEra.ts#L121)*

**`description`** Encoded length for mortals occupy 2 bytes, different from the actual Tuple since it is encoded. This is a shortcut fro `toU8a().length`

**Returns:** *number*

___

###  hash

• **get hash**(): *H256*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[hash](_codec_abstractarray_.abstractarray.md#hash)*

*Defined in [packages/types/src/codec/AbstractArray.ts:43](https://github.com/polkadot-js/api/blob/664151f829/packages/types/src/codec/AbstractArray.ts#L43)*

**`description`** returns a hash of the contents

**Returns:** *H256*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[isEmpty](_codec_abstractarray_.abstractarray.md#isempty)*

*Defined in [packages/types/src/codec/AbstractArray.ts:50](https://github.com/polkadot-js/api/blob/664151f829/packages/types/src/codec/AbstractArray.ts#L50)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  length

• **get length**(): *number*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[length](_codec_abstractarray_.abstractarray.md#length)*

*Overrides void*

*Defined in [packages/types/src/codec/AbstractArray.ts:57](https://github.com/polkadot-js/api/blob/664151f829/packages/types/src/codec/AbstractArray.ts#L57)*

**`description`** The length of the value

**Returns:** *number*

___

###  period

• **get period**(): *[U64](_primitive_u64_.u64.md)*

*Defined in [packages/types/src/extrinsic/ExtrinsicEra.ts:128](https://github.com/polkadot-js/api/blob/664151f829/packages/types/src/extrinsic/ExtrinsicEra.ts#L128)*

**`description`** The period of this Mortal wraps as a [U64](_primitive_u64_.u64.md)

**Returns:** *[U64](_primitive_u64_.u64.md)*

___

###  phase

• **get phase**(): *[U64](_primitive_u64_.u64.md)*

*Defined in [packages/types/src/extrinsic/ExtrinsicEra.ts:135](https://github.com/polkadot-js/api/blob/664151f829/packages/types/src/extrinsic/ExtrinsicEra.ts#L135)*

**`description`** The phase of this Mortal wraps as a [U64](_primitive_u64_.u64.md)

**Returns:** *[U64](_primitive_u64_.u64.md)*

## Methods

###  birth

▸ **birth**(`current`: BN | number): *number*

*Defined in [packages/types/src/extrinsic/ExtrinsicEra.ts:182](https://github.com/polkadot-js/api/blob/664151f829/packages/types/src/extrinsic/ExtrinsicEra.ts#L182)*

**`description`** Get the block number of the start of the era whose properties this object describes that `current` belongs to.

**Parameters:**

Name | Type |
------ | ------ |
`current` | BN &#124; number |

**Returns:** *number*

___

###  death

▸ **death**(`current`: BN | number): *number*

*Defined in [packages/types/src/extrinsic/ExtrinsicEra.ts:194](https://github.com/polkadot-js/api/blob/664151f829/packages/types/src/extrinsic/ExtrinsicEra.ts#L194)*

**`description`** Get the block number of the first block at which the era has ended.

**Parameters:**

Name | Type |
------ | ------ |
`current` | BN &#124; number |

**Returns:** *number*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[eq](_codec_abstractarray_.abstractarray.md#eq)*

*Defined in [packages/types/src/codec/AbstractArray.ts:65](https://github.com/polkadot-js/api/blob/664151f829/packages/types/src/codec/AbstractArray.ts#L65)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  filter

▸ **filter**(`callbackfn`: function, `thisArg?`: any): *[Codec](../interfaces/_types_codec_.codec.md)[]*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[filter](_codec_abstractarray_.abstractarray.md#filter)*

*Overrides void*

*Defined in [packages/types/src/codec/AbstractArray.ts:144](https://github.com/polkadot-js/api/blob/664151f829/packages/types/src/codec/AbstractArray.ts#L144)*

**`description`** Filters the array with the callback

**Parameters:**

▪ **callbackfn**: *function*

The filter function

▸ (`value`: [Codec](../interfaces/_types_codec_.codec.md), `index`: number, `array`: [Codec](../interfaces/_types_codec_.codec.md)[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Codec](../interfaces/_types_codec_.codec.md) |
`index` | number |
`array` | [Codec](../interfaces/_types_codec_.codec.md)[] |

▪`Optional`  **thisArg**: *any*

The `this` object to apply the result to

**Returns:** *[Codec](../interfaces/_types_codec_.codec.md)[]*

___

###  includes

▸ **includes**(`check`: any): *boolean*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[includes](_codec_abstractarray_.abstractarray.md#includes)*

*Defined in [packages/types/src/codec/AbstractArray.ts:160](https://github.com/polkadot-js/api/blob/664151f829/packages/types/src/codec/AbstractArray.ts#L160)*

**`description`** Checks if the array includes a specific value

**Parameters:**

Name | Type |
------ | ------ |
`check` | any |

**Returns:** *boolean*

___

###  map

▸ **map**<**U**>(`callbackfn`: function, `thisArg?`: any): *U[]*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[map](_codec_abstractarray_.abstractarray.md#map)*

*Overrides void*

*Defined in [packages/types/src/codec/AbstractArray.ts:153](https://github.com/polkadot-js/api/blob/664151f829/packages/types/src/codec/AbstractArray.ts#L153)*

**`description`** Maps the array with the callback

**Type parameters:**

▪ **U**

**Parameters:**

▪ **callbackfn**: *function*

The mapping function

▸ (`value`: [Codec](../interfaces/_types_codec_.codec.md), `index`: number, `array`: [Codec](../interfaces/_types_codec_.codec.md)[]): *U*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Codec](../interfaces/_types_codec_.codec.md) |
`index` | number |
`array` | [Codec](../interfaces/_types_codec_.codec.md)[] |

▪`Optional`  **thisArg**: *any*

The `this` onject to apply the result to

**Returns:** *U[]*

___

###  toArray

▸ **toArray**(): *[Codec](../interfaces/_types_codec_.codec.md)[]*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toArray](_codec_abstractarray_.abstractarray.md#toarray)*

*Defined in [packages/types/src/codec/AbstractArray.ts:72](https://github.com/polkadot-js/api/blob/664151f829/packages/types/src/codec/AbstractArray.ts#L72)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](../interfaces/_types_codec_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toHex](_codec_abstractarray_.abstractarray.md#tohex)*

*Defined in [packages/types/src/codec/AbstractArray.ts:79](https://github.com/polkadot-js/api/blob/664151f829/packages/types/src/codec/AbstractArray.ts#L79)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(): *any*

*Overrides [AbstractArray](_codec_abstractarray_.abstractarray.md).[toHuman](_codec_abstractarray_.abstractarray.md#tohuman)*

*Defined in [packages/types/src/extrinsic/ExtrinsicEra.ts:142](https://github.com/polkadot-js/api/blob/664151f829/packages/types/src/extrinsic/ExtrinsicEra.ts#L142)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

**Returns:** *any*

___

###  toJSON

▸ **toJSON**(): *any*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Overrides [AbstractArray](_codec_abstractarray_.abstractarray.md).[toJSON](_codec_abstractarray_.abstractarray.md#tojson)*

*Defined in [packages/types/src/extrinsic/ExtrinsicEra.ts:152](https://github.com/polkadot-js/api/blob/664151f829/packages/types/src/extrinsic/ExtrinsicEra.ts#L152)*

**`description`** Returns a JSON representation of the actual value

**Returns:** *any*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Inherited from [Tuple](_codec_tuple_.tuple.md).[toRawType](_codec_tuple_.tuple.md#torawtype)*

*Overrides [AbstractArray](_codec_abstractarray_.abstractarray.md).[toRawType](_codec_abstractarray_.abstractarray.md#abstract-torawtype)*

*Defined in [packages/types/src/codec/Tuple.ts:93](https://github.com/polkadot-js/api/blob/664151f829/packages/types/src/codec/Tuple.ts#L93)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Inherited from [Tuple](_codec_tuple_.tuple.md).[toString](_codec_tuple_.tuple.md#tostring)*

*Overrides [AbstractArray](_codec_abstractarray_.abstractarray.md).[toString](_codec_abstractarray_.abstractarray.md#tostring)*

*Defined in [packages/types/src/codec/Tuple.ts:106](https://github.com/polkadot-js/api/blob/664151f829/packages/types/src/codec/Tuple.ts#L106)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Overrides [Tuple](_codec_tuple_.tuple.md).[toU8a](_codec_tuple_.tuple.md#tou8a)*

*Defined in [packages/types/src/extrinsic/ExtrinsicEra.ts:167](https://github.com/polkadot-js/api/blob/664151f829/packages/types/src/extrinsic/ExtrinsicEra.ts#L167)*

**`description`** Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal) Period and phase are encoded:   - The period of validity from the block hash found in the signing material.   - The phase in the period that this transaction's lifetime begins (and, importantly,     implies which block hash is included in the signature material). If the `period` is     greater than 1 << 12, then it will be a factor of the times greater than 1<<12 that     `period` is.  |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

___

### `Static` with

▸ **with**(`Types`: TupleTypes): *[Constructor](../interfaces/_types_codec_.constructor.md)‹[Tuple](_codec_tuple_.tuple.md)›*

*Inherited from [Tuple](_codec_tuple_.tuple.md).[with](_codec_tuple_.tuple.md#static-with)*

*Defined in [packages/types/src/codec/Tuple.ts:62](https://github.com/polkadot-js/api/blob/664151f829/packages/types/src/codec/Tuple.ts#L62)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | TupleTypes |

**Returns:** *[Constructor](../interfaces/_types_codec_.constructor.md)‹[Tuple](_codec_tuple_.tuple.md)›*