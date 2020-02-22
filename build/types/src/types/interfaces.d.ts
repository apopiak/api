import { SignOptions } from '@polkadot/keyring/types';
import { Hash } from '../interfaces/runtime';
import { FunctionMetadataLatest } from '../interfaces/metadata';
import BN from 'bn.js';
import { ArgsDef, Codec } from './codec';
export interface ICompact<T> extends Codec {
    toBn(): BN;
    toNumber(): number;
    unwrap(): T;
}
export interface IKeyringPair {
    address: string;
    publicKey: Uint8Array;
    sign: (data: Uint8Array, options?: SignOptions) => Uint8Array;
}
export interface IMethod extends Codec {
    readonly args: Codec[];
    readonly argsDef: ArgsDef;
    readonly callIndex: Uint8Array;
    readonly data: Uint8Array;
    readonly hash: Hash;
    readonly hasOrigin: boolean;
    readonly meta: FunctionMetadataLatest;
}
export interface IRuntimeVersion {
    readonly apis: any[];
    readonly authoringVersion: BN;
    readonly implName: String;
    readonly implVersion: BN;
    readonly specName: String;
    readonly specVersion: BN;
}
export declare type ITuple<Sub extends Codec[]> = Sub & Codec;
export interface IU8a extends Uint8Array, Codec {
    bitLength(): number;
    toHuman(isExtended?: boolean): any;
    toJSON(): any;
}
