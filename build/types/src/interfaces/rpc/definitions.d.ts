declare const _default: {
    types: {
        ApiId: string;
        BlockHash: string;
        ChainProperties: {
            ss58Format: string;
            tokenDecimals: string;
            tokenSymbol: string;
        };
        ExtrinsicOrHash: {
            _enum: {
                Hash: string;
                Extrinsic: string;
            };
        };
        ExtrinsicStatus: {
            _enum: {
                Future: string;
                Ready: string;
                Broadcast: string;
                InBlock: string;
                Retracted: string;
                FinalityTimeout: string;
                Finalized: string;
                Usurped: string;
                Dropped: string;
                Invalid: string;
            };
        };
        Health: {
            peers: string;
            isSyncing: string;
            shouldHavePeers: string;
        };
        KeyValueOption: string;
        NetworkState: {
            peerId: string;
        };
        PeerInfo: {
            peerId: string;
            roles: string;
            protocolVersion: string;
            bestHash: string;
            bestNumber: string;
        };
        RpcMethods: {
            version: string;
            methods: string;
        };
        RuntimeDispatchInfo: {
            weight: string;
            class: string;
            partialFee: string;
        };
        RuntimeVersionApi: string;
        RuntimeVersion: {
            specName: string;
            implName: string;
            authoringVersion: string;
            specVersion: string;
            implVersion: string;
            apis: string;
        };
        StorageChangeSet: {
            block: string;
            changes: string;
        };
    };
};
export default _default;
