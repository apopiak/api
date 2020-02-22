declare const _default: {
    types: {
        BabeAuthorityWeight: string;
        BabeBlockWeight: string;
        MaybeVrf: string;
        BabeWeight: string;
        RawBabePreDigest: {
            _enum: {
                Phantom: string;
                Primary: string;
                Secondary: string;
            };
        };
        RawBabePreDigestPrimary: {
            authorityIndex: string;
            slotNumber: string;
            vrfOutput: string;
            vrfProof: string;
        };
        RawBabePreDigestSecondary: {
            authorityIndex: string;
            slotNumber: string;
        };
        RawBabePreDigestTo159: {
            _enum: {
                Primary: string;
                Secondary: string;
            };
        };
        RawBabePreDigestPrimaryTo159: {
            authorityIndex: string;
            slotNumber: string;
            weight: string;
            vrfOutput: string;
            vrfProof: string;
        };
        RawBabePreDigestSecondaryTo159: {
            authorityIndex: string;
            slotNumber: string;
            weight: string;
        };
        RawBabePreDigestCompat: {
            _enum: {
                Zero: string;
                One: string;
                Two: string;
            };
        };
        SlotNumber: string;
        VrfData: string;
        VrfProof: string;
    };
};
export default _default;
