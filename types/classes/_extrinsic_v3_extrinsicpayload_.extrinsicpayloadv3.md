[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["extrinsic/v3/ExtrinsicPayload"](../modules/_extrinsic_v3_extrinsicpayload_.md) › [ExtrinsicPayloadV3](_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md)

# Class: ExtrinsicPayloadV3 <**S, T, V, E**>

**`name`** GenericExtrinsicPayloadV3

**`description`** 
A signing payload for an [Extrinsic](_extrinsic_extrinsic_.extrinsic.md). For the final encoding, it is variable length based
on the contents included

## Type parameters

▪ **S**: *TypesDef*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

  ↳ [Struct](_codec_struct_.struct.md)

  ↳ **ExtrinsicPayloadV3**

## Implements

* [Codec](../interfaces/_types_codec_.codec.md)

## Index

### Constructors

* [constructor](_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md#constructor)

### Properties

* [registry](_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md#registry)

### Accessors

* [Type](_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md#type)
* [blockHash](_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md#blockhash)
* [defKeys](_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md#defkeys)
* [encodedLength](_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md#encodedlength)
* [era](_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md#era)
* [genesisHash](_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md#genesishash)
* [hash](_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md#hash)
* [isEmpty](_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md#isempty)
* [method](_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md#method)
* [nonce](_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md#nonce)
* [specVersion](_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md#specversion)
* [tip](_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md#tip)

### Methods

* [eq](_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md#eq)
* [get](_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md#get)
* [getAtIndex](_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md#getatindex)
* [sign](_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md#sign)
* [toArray](_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md#toarray)
* [toHex](_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md#tohex)
* [toHuman](_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md#tohuman)
* [toJSON](_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md#tojson)
* [toRawType](_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md#torawtype)
* [toString](_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md#tostring)
* [toU8a](_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md#tou8a)
* [typesToMap](_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md#static-typestomap)
* [with](_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md#static-with)

## Constructors

###  constructor

\+ **new ExtrinsicPayloadV3**(`registry`: [Registry](../interfaces/_types_registry_.registry.md), `value?`: [ExtrinsicPayloadValue](../interfaces/_types_extrinsic_.extrinsicpayloadvalue.md) | [Uint8Array](_codec_raw_.raw.md#static-uint8array) | string): *[ExtrinsicPayloadV3](_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [packages/types/src/extrinsic/v3/ExtrinsicPayload.ts:21](https://github.com/polkadot-js/api/blob/852e0d4f0b/packages/types/src/extrinsic/v3/ExtrinsicPayload.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_types_registry_.registry.md) |
`value?` | [ExtrinsicPayloadValue](../interfaces/_types_extrinsic_.extrinsicpayloadvalue.md) &#124; [Uint8Array](_codec_raw_.raw.md#static-uint8array) &#124; string |

**Returns:** *[ExtrinsicPayloadV3](_extrinsic_v3_extrinsicpayload_.extrinsicpayloadv3.md)*

## Properties

###  registry

• **registry**: *[Registry](../interfaces/_types_registry_.registry.md)*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md).[registry](../interfaces/_types_codec_.codec.md#registry)*

*Inherited from [Struct](_codec_struct_.struct.md).[registry](_codec_struct_.struct.md#registry)*

*Defined in [packages/types/src/codec/Struct.ts:106](https://github.com/polkadot-js/api/blob/852e0d4f0b/packages/types/src/codec/Struct.ts#L106)*

## Accessors

###  Type

• **get Type**(): *E*

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [packages/types/src/codec/Struct.ts:167](https://github.com/polkadot-js/api/blob/852e0d4f0b/packages/types/src/codec/Struct.ts#L167)*

**`description`** Returns the Type description to sthe structure

**Returns:** *E*

___

###  blockHash

• **get blockHash**(): *Hash*

*Defined in [packages/types/src/extrinsic/v3/ExtrinsicPayload.ts:39](https://github.com/polkadot-js/api/blob/852e0d4f0b/packages/types/src/extrinsic/v3/ExtrinsicPayload.ts#L39)*

**`description`** The block [[Hash]] the signature applies to (mortal/immortal)

**Returns:** *Hash*

___

###  defKeys

• **get defKeys**(): *string[]*

*Inherited from [Struct](_codec_struct_.struct.md).[defKeys](_codec_struct_.struct.md#defkeys)*

*Defined in [packages/types/src/codec/Struct.ts:145](https://github.com/polkadot-js/api/blob/852e0d4f0b/packages/types/src/codec/Struct.ts#L145)*

**`description`** The available keys for this enum

**Returns:** *string[]*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [packages/types/src/codec/Struct.ts:180](https://github.com/polkadot-js/api/blob/852e0d4f0b/packages/types/src/codec/Struct.ts#L180)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  era

• **get era**(): *ExtrinsicEra*

*Defined in [packages/types/src/extrinsic/v3/ExtrinsicPayload.ts:46](https://github.com/polkadot-js/api/blob/852e0d4f0b/packages/types/src/extrinsic/v3/ExtrinsicPayload.ts#L46)*

**`description`** The [ExtrinsicEra](_extrinsic_extrinsicera_.extrinsicera.md)

**Returns:** *ExtrinsicEra*

___

###  genesisHash

• **get genesisHash**(): *Hash*

*Defined in [packages/types/src/extrinsic/v3/ExtrinsicPayload.ts:53](https://github.com/polkadot-js/api/blob/852e0d4f0b/packages/types/src/extrinsic/v3/ExtrinsicPayload.ts#L53)*

**`description`** The genesis [[Hash]] the signature applies to (mortal/immortal)

**Returns:** *Hash*

___

###  hash

• **get hash**(): *H256*

*Inherited from [Struct](_codec_struct_.struct.md).[hash](_codec_struct_.struct.md#hash)*

*Defined in [packages/types/src/codec/Struct.ts:191](https://github.com/polkadot-js/api/blob/852e0d4f0b/packages/types/src/codec/Struct.ts#L191)*

**`description`** returns a hash of the contents

**Returns:** *H256*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [packages/types/src/codec/Struct.ts:152](https://github.com/polkadot-js/api/blob/852e0d4f0b/packages/types/src/codec/Struct.ts#L152)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  method

• **get method**(): *[Bytes](_primitive_bytes_.bytes.md)*

*Defined in [packages/types/src/extrinsic/v3/ExtrinsicPayload.ts:60](https://github.com/polkadot-js/api/blob/852e0d4f0b/packages/types/src/extrinsic/v3/ExtrinsicPayload.ts#L60)*

**`description`** The [Bytes](_primitive_bytes_.bytes.md) contained in the payload

**Returns:** *[Bytes](_primitive_bytes_.bytes.md)*

___

###  nonce

• **get nonce**(): *[Compact](_codec_compact_.compact.md)‹Index›*

*Defined in [packages/types/src/extrinsic/v3/ExtrinsicPayload.ts:67](https://github.com/polkadot-js/api/blob/852e0d4f0b/packages/types/src/extrinsic/v3/ExtrinsicPayload.ts#L67)*

**`description`** The [[Index]]

**Returns:** *[Compact](_codec_compact_.compact.md)‹Index›*

___

###  specVersion

• **get specVersion**(): *u32*

*Defined in [packages/types/src/extrinsic/v3/ExtrinsicPayload.ts:74](https://github.com/polkadot-js/api/blob/852e0d4f0b/packages/types/src/extrinsic/v3/ExtrinsicPayload.ts#L74)*

**`description`** The specVersion for this signature

**Returns:** *u32*

___

###  tip

• **get tip**(): *[Compact](_codec_compact_.compact.md)‹Balance›*

*Defined in [packages/types/src/extrinsic/v3/ExtrinsicPayload.ts:81](https://github.com/polkadot-js/api/blob/852e0d4f0b/packages/types/src/extrinsic/v3/ExtrinsicPayload.ts#L81)*

**`description`** The tip [[Balance]]

**Returns:** *[Compact](_codec_compact_.compact.md)‹Balance›*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [packages/types/src/codec/Struct.ts:198](https://github.com/polkadot-js/api/blob/852e0d4f0b/packages/types/src/codec/Struct.ts#L198)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  get

▸ **get**(`name`: keyof S): *[Codec](../interfaces/_types_codec_.codec.md) | undefined*

*Inherited from [Struct](_codec_struct_.struct.md).[get](_codec_struct_.struct.md#get)*

*Overrides [CodecMap](_codec_map_.codecmap.md).[get](_codec_map_.codecmap.md#get)*

*Defined in [packages/types/src/codec/Struct.ts:206](https://github.com/polkadot-js/api/blob/852e0d4f0b/packages/types/src/codec/Struct.ts#L206)*

**`description`** Returns a specific names entry in the structure

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | keyof S | The name of the entry to retrieve  |

**Returns:** *[Codec](../interfaces/_types_codec_.codec.md) | undefined*

___

###  getAtIndex

▸ **getAtIndex**(`index`: number): *[Codec](../interfaces/_types_codec_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[getAtIndex](_codec_struct_.struct.md#getatindex)*

*Defined in [packages/types/src/codec/Struct.ts:213](https://github.com/polkadot-js/api/blob/852e0d4f0b/packages/types/src/codec/Struct.ts#L213)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[Codec](../interfaces/_types_codec_.codec.md)*

___

###  sign

▸ **sign**(`signerPair`: [IKeyringPair](../interfaces/_types_interfaces_.ikeyringpair.md)): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Defined in [packages/types/src/extrinsic/v3/ExtrinsicPayload.ts:88](https://github.com/polkadot-js/api/blob/852e0d4f0b/packages/types/src/extrinsic/v3/ExtrinsicPayload.ts#L88)*

**`description`** Sign the payload with the keypair

**Parameters:**

Name | Type |
------ | ------ |
`signerPair` | [IKeyringPair](../interfaces/_types_interfaces_.ikeyringpair.md) |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

___

###  toArray

▸ **toArray**(): *[Codec](../interfaces/_types_codec_.codec.md)[]*

*Inherited from [Struct](_codec_struct_.struct.md).[toArray](_codec_struct_.struct.md#toarray)*

*Defined in [packages/types/src/codec/Struct.ts:220](https://github.com/polkadot-js/api/blob/852e0d4f0b/packages/types/src/codec/Struct.ts#L220)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *[Codec](../interfaces/_types_codec_.codec.md)[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [packages/types/src/codec/Struct.ts:227](https://github.com/polkadot-js/api/blob/852e0d4f0b/packages/types/src/codec/Struct.ts#L227)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(`isExtended?`: undefined | false | true): *[AnyJson](../modules/_types_helpers_.md#anyjson)*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toHuman](_codec_struct_.struct.md#tohuman)*

*Defined in [packages/types/src/codec/Struct.ts:234](https://github.com/polkadot-js/api/blob/852e0d4f0b/packages/types/src/codec/Struct.ts#L234)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

**Parameters:**

Name | Type |
------ | ------ |
`isExtended?` | undefined &#124; false &#124; true |

**Returns:** *[AnyJson](../modules/_types_helpers_.md#anyjson)*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_helpers_.md#anyjson)*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [packages/types/src/codec/Struct.ts:247](https://github.com/polkadot-js/api/blob/852e0d4f0b/packages/types/src/codec/Struct.ts#L247)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_helpers_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [packages/types/src/codec/Struct.ts:271](https://github.com/polkadot-js/api/blob/852e0d4f0b/packages/types/src/codec/Struct.ts#L271)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [packages/types/src/codec/Struct.ts:280](https://github.com/polkadot-js/api/blob/852e0d4f0b/packages/types/src/codec/Struct.ts#L280)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: [BareOpts](../modules/_types_helpers_.md#bareopts)): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [packages/types/src/codec/Struct.ts:288](https://github.com/polkadot-js/api/blob/852e0d4f0b/packages/types/src/codec/Struct.ts#L288)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | [BareOpts](../modules/_types_helpers_.md#bareopts) | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

___

### `Static` typesToMap

▸ **typesToMap**(`registry`: [Registry](../interfaces/_types_registry_.registry.md), `Types`: Record‹string, [Constructor](../interfaces/_types_codec_.constructor.md)›): *Record‹string, string›*

*Inherited from [Struct](_codec_struct_.struct.md).[typesToMap](_codec_struct_.struct.md#static-typestomap)*

*Defined in [packages/types/src/codec/Struct.ts:260](https://github.com/polkadot-js/api/blob/852e0d4f0b/packages/types/src/codec/Struct.ts#L260)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_types_registry_.registry.md) |
`Types` | Record‹string, [Constructor](../interfaces/_types_codec_.constructor.md)› |

**Returns:** *Record‹string, string›*

___

### `Static` with

▸ **with**<**S**>(`Types`: S, `jsonMap?`: [Map](_codec_struct_.struct.md#static-map)‹keyof S, string›): *[Constructor](../interfaces/_types_codec_.constructor.md)‹[Struct](_codec_struct_.struct.md)‹S››*

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#static-with)*

*Defined in [packages/types/src/codec/Struct.ts:122](https://github.com/polkadot-js/api/blob/852e0d4f0b/packages/types/src/codec/Struct.ts#L122)*

**Type parameters:**

▪ **S**: *TypesDef*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | S |
`jsonMap?` | [Map](_codec_struct_.struct.md#static-map)‹keyof S, string› |

**Returns:** *[Constructor](../interfaces/_types_codec_.constructor.md)‹[Struct](_codec_struct_.struct.md)‹S››*