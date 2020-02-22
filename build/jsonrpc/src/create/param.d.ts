import { InterfaceTypes } from '@polkadot/types/types';
import { RpcParam } from '../types';
interface RpcParamOptions {
    isOptional?: boolean;
}
/** @internal */
export default function createParam(name: string, type: InterfaceTypes, { isOptional }?: RpcParamOptions): RpcParam;
export {};
