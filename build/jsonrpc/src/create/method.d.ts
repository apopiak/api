import { RpcMethodOpt, RpcMethod } from '../types';
/** @internal */
export default function createMethod(section: string, method: string, { description, isDeprecated, isHidden, isOptional, isSigned, params, pubsub, type }: RpcMethodOpt): RpcMethod;
