import { Codec, Constructor, InterfaceTypes, Registry } from '../types';
import AbstractArray from './AbstractArray';
/**
 * @name VecFixed
 * @description
 * This manages codec arrays of a fixed length
 */
export default class VecFixed<T extends Codec> extends AbstractArray<T> {
    private _Type;
    constructor(registry: Registry, Type: Constructor<T> | InterfaceTypes, length: number, value?: VecFixed<any> | Uint8Array | string | any[]);
    /** @internal */
    static decodeVecFixed<T extends Codec>(registry: Registry, Type: Constructor<T>, allocLength: number, value: VecFixed<any> | Uint8Array | string | any[]): T[];
    static with<O extends Codec>(Type: Constructor<O> | InterfaceTypes, length: number): Constructor<VecFixed<O>>;
    /**
     * @description The type for the items
     */
    get Type(): string;
    toU8a(): Uint8Array;
    /**
     * @description Returns the base runtime type name for this instance
     */
    toRawType(): string;
}
