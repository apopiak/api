import { AccountId, Address, ExtrinsicStatus, EventRecord, Hash, RuntimeDispatchInfo } from '@polkadot/types/interfaces';
import { AnyNumber, AnyU8a, Callback, Codec, IExtrinsic, IExtrinsicEra, IKeyringPair, SignatureOptions, Signer, ISubmittableResult } from '@polkadot/types/types';
import { ApiTypes } from '../types';
import { Observable } from 'rxjs';
export interface SubmittableResultValue {
    events?: EventRecord[];
    status: ExtrinsicStatus;
}
export declare type SubmittablePaymentResult<ApiType extends ApiTypes> = ApiType extends 'rxjs' ? Observable<RuntimeDispatchInfo> : Promise<RuntimeDispatchInfo>;
export declare type SubmittableResultResult<ApiType extends ApiTypes> = ApiType extends 'rxjs' ? Observable<ISubmittableResult> : Promise<Hash>;
export declare type SubmittableResultSubscription<ApiType extends ApiTypes> = ApiType extends 'rxjs' ? Observable<ISubmittableResult> : Promise<() => void>;
export declare type SubmittableThis<ApiType extends ApiTypes, THIS> = ApiType extends 'rxjs' ? Observable<THIS> : Promise<THIS>;
export interface SignerOptions {
    blockHash: AnyU8a;
    era?: IExtrinsicEra | number;
    nonce: AnyNumber | Codec;
    signer?: Signer;
    tip?: AnyNumber;
}
export declare type AddressOrPair = IKeyringPair | string | AccountId | Address;
export interface SubmittableExtrinsic<ApiType extends ApiTypes> extends IExtrinsic {
    paymentInfo(account: AddressOrPair, options?: Partial<SignerOptions>): SubmittablePaymentResult<ApiType>;
    send(): SubmittableResultResult<ApiType>;
    send(statusCb: Callback<ISubmittableResult>): SubmittableResultSubscription<ApiType>;
    sign(account: IKeyringPair, _options: Partial<SignatureOptions>): this;
    signAsync(account: AddressOrPair, _options: Partial<SignatureOptions>): SubmittableThis<ApiType, this>;
    signAndSend(account: AddressOrPair, options?: Partial<SignerOptions>): SubmittableResultResult<ApiType>;
    signAndSend(account: AddressOrPair, statusCb: Callback<ISubmittableResult>): SubmittableResultSubscription<ApiType>;
    signAndSend(account: AddressOrPair, options: Partial<SignerOptions>, statusCb?: Callback<ISubmittableResult>): SubmittableResultSubscription<ApiType>;
}
