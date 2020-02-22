declare const _default: {
    types: {
        CallMetadataV0: {
            name: string;
            functions: string;
        };
        EventMetadataV0: {
            name: string;
            args: string;
            documentation: string;
        };
        FunctionArgumentMetadataV0: {
            name: string;
            type: string;
        };
        FunctionMetadataV0: {
            id: string;
            name: string;
            args: string;
            documentation: string;
        };
        MapTypeV0: {
            key: string;
            value: string;
        };
        MetadataV0: {
            outerEvent: string;
            modules: string;
            outerDispatch: string;
        };
        ModuleMetadataV0: {
            name: string;
            call: string;
        };
        OuterDispatchCallV0: {
            name: string;
            prefix: string;
            index: string;
        };
        OuterDispatchMetadataV0: {
            name: string;
            calls: string;
        };
        OuterEventEventMetadataEventsV0: string;
        OuterEventEventMetadataV0: string;
        OuterEventMetadataV0: {
            name: string;
            events: string;
        };
        PlainTypeV0: string;
        RuntimeModuleMetadataV0: {
            prefix: string;
            module: string;
            storage: string;
        };
        StorageFunctionMetadataV0: {
            name: string;
            modifier: string;
            type: string;
            fallback: string;
            documentation: string;
        };
        StorageFunctionModifierV0: {
            _enum: string[];
        };
        StorageFunctionTypeV0: {
            _enum: {
                Plain: string;
                Map: string;
            };
        };
        StorageMetadataV0: {
            prefix: string;
            functions: string;
        };
        EventMetadataV1: string;
        FunctionArgumentMetadataV1: string;
        FunctionMetadataV1: {
            name: string;
            args: string;
            documentation: string;
        };
        MetadataV1: {
            modules: string;
        };
        ModuleMetadataV1: {
            name: string;
            prefix: string;
            storage: string;
            calls: string;
            events: string;
        };
        StorageFunctionMetadataV1: string;
        StorageFunctionModifierV1: string;
        StorageFunctionTypeV1: string;
        EventMetadataV2: string;
        FunctionArgumentMetadataV2: string;
        FunctionMetadataV2: string;
        MapTypeV2: {
            key: string;
            value: string;
            linked: string;
        };
        MetadataV2: {
            modules: string;
        };
        ModuleMetadataV2: {
            name: string;
            prefix: string;
            storage: string;
            calls: string;
            events: string;
        };
        PlainTypeV2: string;
        StorageFunctionMetadataV2: {
            name: string;
            modifier: string;
            type: string;
            fallback: string;
            documentation: string;
        };
        StorageFunctionModifierV2: string;
        StorageFunctionTypeV2: {
            _enum: {
                Plain: string;
                Map: string;
            };
        };
        DoubleMapTypeV3: {
            key1: string;
            key2: string;
            value: string;
            key2Hasher: string;
        };
        EventMetadataV3: string;
        FunctionArgumentMetadataV3: string;
        FunctionMetadataV3: string;
        MapTypeV3: string;
        MetadataV3: {
            modules: string;
        };
        ModuleMetadataV3: {
            name: string;
            prefix: string;
            storage: string;
            calls: string;
            events: string;
        };
        PlainTypeV3: string;
        StorageFunctionMetadataV3: {
            name: string;
            modifier: string;
            type: string;
            fallback: string;
            documentation: string;
        };
        StorageFunctionModifierV3: string;
        StorageFunctionTypeV3: {
            _enum: {
                Plain: string;
                Map: string;
                DoubleMap: string;
            };
        };
        DoubleMapTypeV4: {
            hasher: string;
            key1: string;
            key2: string;
            value: string;
            key2Hasher: string;
        };
        EventMetadataV4: string;
        FunctionArgumentMetadataV4: string;
        FunctionMetadataV4: string;
        MapTypeV4: {
            hasher: string;
            key: string;
            value: string;
            linked: string;
        };
        MetadataV4: {
            modules: string;
        };
        ModuleMetadataV4: {
            name: string;
            prefix: string;
            storage: string;
            calls: string;
            events: string;
        };
        PlainTypeV4: string;
        StorageFunctionMetadataV4: {
            name: string;
            modifier: string;
            type: string;
            fallback: string;
            documentation: string;
        };
        StorageFunctionModifierV4: string;
        StorageFunctionTypeV4: {
            _enum: {
                Plain: string;
                Map: string;
                DoubleMap: string;
            };
        };
        StorageHasherV4: {
            _enum: {
                Blake2_128: null;
                Blake2_256: null;
                Twox128: null;
                Twox256: null;
                Twox64Concat: null;
                InvalidEntry: null;
            };
        };
        DoubleMapTypeV5: {
            hasher: string;
            key1: string;
            key2: string;
            value: string;
            key2Hasher: string;
        };
        EventMetadataV5: string;
        FunctionArgumentMetadataV5: string;
        FunctionMetadataV5: string;
        MapTypeV5: string;
        MetadataV5: {
            modules: string;
        };
        ModuleMetadataV5: {
            name: string;
            prefix: string;
            storage: string;
            calls: string;
            events: string;
        };
        PlainTypeV5: string;
        StorageFunctionMetadataV5: {
            name: string;
            modifier: string;
            type: string;
            fallback: string;
            documentation: string;
        };
        StorageFunctionModifierV5: string;
        StorageFunctionTypeV5: {
            _enum: {
                Plain: string;
                Map: string;
                DoubleMap: string;
            };
        };
        StorageHasherV5: string;
        DoubleMapTypeV6: string;
        EventMetadataV6: string;
        FunctionArgumentMetadataV6: string;
        FunctionMetadataV6: string;
        MapTypeV6: string;
        MetadataV6: {
            modules: string;
        };
        ModuleConstantMetadataV6: {
            name: string;
            type: string;
            value: string;
            documentation: string;
        };
        ModuleMetadataV6: {
            name: string;
            prefix: string;
            storage: string;
            calls: string;
            events: string;
            constants: string;
        };
        PlainTypeV6: string;
        StorageEntryModifierV6: string;
        StorageEntryMetadataV6: string;
        StorageEntryTypeV6: string;
        StorageHasherV6: string;
        DoubleMapTypeV7: string;
        EventMetadataV7: string;
        FunctionArgumentMetadataV7: string;
        FunctionMetadataV7: string;
        MapTypeV7: string;
        MetadataV7: {
            modules: string;
        };
        ModuleConstantMetadataV7: string;
        ModuleMetadataV7: {
            name: string;
            storage: string;
            calls: string;
            events: string;
            constants: string;
        };
        PlainTypeV7: string;
        StorageEntryModifierV7: string;
        StorageEntryMetadataV7: string;
        StorageEntryTypeV7: string;
        StorageHasherV7: string;
        StorageMetadataV7: {
            prefix: string;
            items: string;
        };
        DoubleMapTypeV8: string;
        ErrorMetadataV8: {
            name: string;
            documentation: string;
        };
        EventMetadataV8: string;
        FunctionArgumentMetadataV8: string;
        FunctionMetadataV8: string;
        MapTypeV8: string;
        MetadataV8: {
            modules: string;
        };
        ModuleConstantMetadataV8: string;
        ModuleMetadataV8: {
            name: string;
            storage: string;
            calls: string;
            events: string;
            constants: string;
            errors: string;
        };
        PlainTypeV8: string;
        StorageEntryModifierV8: string;
        StorageEntryMetadataV8: string;
        StorageEntryTypeV8: string;
        StorageHasherV8: string;
        StorageMetadataV8: string;
        DoubleMapTypeV9: string;
        ErrorMetadataV9: string;
        EventMetadataV9: string;
        FunctionArgumentMetadataV9: string;
        FunctionMetadataV9: string;
        MapTypeV9: string;
        MetadataV9: string;
        ModuleConstantMetadataV9: string;
        ModuleMetadataV9: string;
        PlainTypeV9: string;
        StorageEntryModifierV9: string;
        StorageEntryMetadataV9: string;
        StorageEntryTypeV9: string;
        StorageHasherV9: string;
        StorageMetadataV9: string;
        DoubleMapTypeV10: {
            hasher: string;
            key1: string;
            key2: string;
            value: string;
            key2Hasher: string;
        };
        ErrorMetadataV10: string;
        EventMetadataV10: string;
        FunctionArgumentMetadataV10: string;
        FunctionMetadataV10: string;
        MapTypeV10: {
            hasher: string;
            key: string;
            value: string;
            linked: string;
        };
        MetadataV10: {
            modules: string;
        };
        ModuleConstantMetadataV10: string;
        ModuleMetadataV10: {
            name: string;
            storage: string;
            calls: string;
            events: string;
            constants: string;
            errors: string;
        };
        PlainTypeV10: string;
        StorageEntryModifierV10: string;
        StorageEntryMetadataV10: {
            name: string;
            modifier: string;
            type: string;
            fallback: string;
            documentation: string;
        };
        StorageEntryTypeV10: {
            _enum: {
                Plain: string;
                Map: string;
                DoubleMap: string;
            };
        };
        StorageMetadataV10: {
            prefix: string;
            items: string;
        };
        StorageHasherV10: {
            _enum: {
                Blake2_128: null;
                Blake2_256: null;
                Blake2_128Concat: null;
                Twox128: null;
                Twox256: null;
                Twox64Concat: null;
            };
        };
        DoubleMapTypeV11: string;
        ErrorMetadataV11: string;
        EventMetadataV11: string;
        ExtrinsicMetadataV11: {
            version: string;
            signedExtensions: string;
        };
        FunctionArgumentMetadataV11: string;
        FunctionMetadataV11: string;
        MapTypeV11: string;
        MetadataV11: {
            modules: string;
            extrinsic: string;
        };
        ModuleConstantMetadataV11: string;
        ModuleMetadataV11: string;
        PlainTypeV11: string;
        StorageEntryModifierV11: string;
        StorageEntryMetadataV11: string;
        StorageEntryTypeV11: string;
        StorageMetadataV11: string;
        StorageHasherV11: string;
        DoubleMapTypeLatest: string;
        EventMetadataLatest: string;
        ExtrinsicMetadataLatest: string;
        FunctionArgumentMetadataLatest: string;
        FunctionMetadataLatest: string;
        MapTypeLatest: string;
        MetadataLatest: string;
        ModuleConstantMetadataLatest: string;
        ModuleMetadataLatest: string;
        PlainTypeLatest: string;
        StorageEntryMetadataLatest: string;
        StorageEntryModifierLatest: string;
        StorageEntryTypeLatest: string;
        StorageMetadataLatest: string;
        StorageHasher: string;
        MetadataAll: {
            _enum: {
                V0: string;
                V1: string;
                V2: string;
                V3: string;
                V4: string;
                V5: string;
                V6: string;
                V7: string;
                V8: string;
                V9: string;
                V10: string;
                V11: string;
            };
        };
    };
};
export default _default;
