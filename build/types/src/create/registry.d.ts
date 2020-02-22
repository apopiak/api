import { ChainProperties, DispatchErrorModule } from '../interfaces/types';
import { CallFunction, Codec, Constructor, InterfaceTypes, RegistryError, RegistryTypes, Registry, RegistryMetadata } from '../types';
import { EventData } from '../generic/Event';
export declare class TypeRegistry implements Registry {
    #private;
    constructor();
    get chainDecimals(): number;
    get chainSS58(): number | undefined;
    get chainToken(): string;
    findMetaCall(callIndex: Uint8Array): CallFunction;
    findMetaError(errorIndex: Uint8Array | DispatchErrorModule): RegistryError;
    findMetaEvent(eventIndex: Uint8Array): Constructor<EventData>;
    get<T extends Codec = Codec>(name: string, withUnknown?: boolean): Constructor<T> | undefined;
    getChainProperties(): ChainProperties | undefined;
    getDefinition(name: string): string | undefined;
    getOrThrow<T extends Codec = Codec>(name: string, msg?: string): Constructor<T>;
    getOrUnknown<T extends Codec = Codec>(name: string): Constructor<T>;
    getSignedExtensionExtra(): Record<string, InterfaceTypes>;
    getSignedExtensionTypes(): Record<string, InterfaceTypes>;
    hasClass(name: string): boolean;
    hasDef(name: string): boolean;
    hasType(name: string): boolean;
    register(type: Constructor | RegistryTypes): void;
    register(name: string, type: Constructor): void;
    private registerObject;
    setChainProperties(properties?: ChainProperties): void;
    setMetadata(metadata: RegistryMetadata): void;
}
