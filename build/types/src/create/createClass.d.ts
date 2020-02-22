import { Codec, Constructor, InterfaceTypes, Registry } from '../types';
import { FromReg, TypeDef } from './types';
import { InterfaceRegistry } from '../interfaceRegistry';
export declare function createClass<T extends Codec = Codec, K extends string = string>(registry: Registry, type: K): Constructor<FromReg<T, K>>;
export declare function ClassOfUnsafe<T extends Codec = Codec, K extends string = string>(registry: Registry, name: K): Constructor<FromReg<T, K>>;
export declare function ClassOf<K extends InterfaceTypes>(registry: Registry, name: K): Constructor<InterfaceRegistry[K]>;
export declare function getTypeClass<T extends Codec = Codec>(registry: Registry, value: TypeDef): Constructor<T>;
