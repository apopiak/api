import { Codec } from '@polkadot/types/types';
import { ModuleConstantMetadataLatest } from '@polkadot/types/interfaces';
export declare type AugmentedConst<T extends Codec> = T & ConstantCodec;
export declare type ModuleConstants = Record<string, Codec>;
export interface Constants {
    [index: string]: ModuleConstants;
}
export interface ConstantCodec extends Codec {
    meta: ModuleConstantMetadataLatest;
}
