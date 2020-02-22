declare const _default: {
    isDeprecated: boolean;
    isHidden: boolean;
    description: string;
    section: string;
    methods: {
        getBlock: import("./types").RpcMethod;
        getBlockHash: import("./types").RpcMethod;
        getFinalizedHead: import("./types").RpcMethod;
        getHeader: import("./types").RpcMethod;
        subscribeFinalizedHeads: import("./types").RpcMethod;
        subscribeNewHeads: import("./types").RpcMethod;
        subscribeAllHeads: import("./types").RpcMethod;
    };
};
/**
 * @summary Calls to retrieve chain data.
 */
export default _default;
