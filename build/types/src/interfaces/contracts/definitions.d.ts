declare const _default: {
    types: {
        AliveContractInfo: {
            trieId: string;
            storageSize: string;
            codeHash: string;
            rentAllowance: string;
            deductBlock: string;
            lastWrite: string;
        };
        CodeHash: string;
        ContractCallRequest: {
            origin: string;
            dest: string;
            value: string;
            gasLimit: string;
            inputData: string;
        };
        ContractExecResultSuccess: {
            status: string;
            data: string;
        };
        ContractExecResult: {
            _enum: {
                Success: string;
                Error: string;
            };
        };
        ContractInfo: {
            _enum: {
                Alive: string;
                Tombstone: string;
            };
        };
        ContractStorageKey: string;
        Gas: string;
        PrefabWasmModule: {
            scheduleVersion: string;
            initial: string;
            maximum: string;
            _reserved: string;
            code: string;
        };
        PrefabWasmModuleReserved: string;
        ScheduleTo212: {
            version: string;
            putCodePerByteCost: string;
            growMemCost: string;
            regularOpCost: string;
            returnDataPerByteCost: string;
            eventDataPerByteCost: string;
            eventPerTopicCost: string;
            eventBaseCost: string;
            sandboxDataReadCost: string;
            sandboxDataWriteCost: string;
            maxEventTopics: string;
            maxStackHeight: string;
            maxMemoryPages: string;
            enablePrintln: string;
            maxSubjectLen: string;
        };
        Schedule: {
            version: string;
            putCodePerByteCost: string;
            growMemCost: string;
            regularOpCost: string;
            returnDataPerByteCost: string;
            eventDataPerByteCost: string;
            eventPerTopicCost: string;
            eventBaseCost: string;
            sandboxDataReadCost: string;
            sandboxDataWriteCost: string;
            transferCost: string;
            maxEventTopics: string;
            maxStackHeight: string;
            maxMemoryPages: string;
            enablePrintln: string;
            maxSubjectLen: string;
        };
        SeedOf: string;
        TombstoneContractInfo: string;
        TrieId: string;
    };
};
export default _default;
