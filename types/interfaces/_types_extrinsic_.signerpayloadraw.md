[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types/extrinsic"](../modules/_types_extrinsic_.md) › [SignerPayloadRaw](_types_extrinsic_.signerpayloadraw.md)

# Interface: SignerPayloadRaw

## Hierarchy

* [SignerPayloadRawBase](_types_extrinsic_.signerpayloadrawbase.md)

  ↳ **SignerPayloadRaw**

## Index

### Properties

* [address](_types_extrinsic_.signerpayloadraw.md#address)
* [data](_types_extrinsic_.signerpayloadraw.md#data)
* [type](_types_extrinsic_.signerpayloadraw.md#type)

## Properties

###  address

• **address**: *string*

*Defined in [packages/types/src/types/extrinsic.ts:189](https://github.com/polkadot-js/api/blob/664151f829/packages/types/src/types/extrinsic.ts#L189)*

**`description`** The ss-58 encoded address

___

###  data

• **data**: *string*

*Inherited from [SignerPayloadRawBase](_types_extrinsic_.signerpayloadrawbase.md).[data](_types_extrinsic_.signerpayloadrawbase.md#data)*

*Defined in [packages/types/src/types/extrinsic.ts:177](https://github.com/polkadot-js/api/blob/664151f829/packages/types/src/types/extrinsic.ts#L177)*

**`description`** The hex-encoded data for this request

___

###  type

• **type**: *"bytes" | "payload"*

*Overrides [SignerPayloadRawBase](_types_extrinsic_.signerpayloadrawbase.md).[type](_types_extrinsic_.signerpayloadrawbase.md#optional-type)*

*Defined in [packages/types/src/types/extrinsic.ts:194](https://github.com/polkadot-js/api/blob/664151f829/packages/types/src/types/extrinsic.ts#L194)*

**`description`** The type of the contained data