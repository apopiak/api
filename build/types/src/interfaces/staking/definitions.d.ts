declare const _default: {
    types: {
        CompactAssignments: {
            votes1: string;
            votes2: string;
            votes3: string;
            votes4: string;
            votes5: string;
            votes6: string;
            votes7: string;
            votes8: string;
            votes9: string;
            votes10: string;
            votes11: string;
            votes12: string;
            votes13: string;
            votes14: string;
            votes15: string;
            votes16: string;
        };
        CompactScore: string;
        ElectionCompute: {
            _enum: string[];
        };
        ElectionResult: {
            compute: string;
            slotStake: string;
            electedStashes: string;
            exposures: string;
        };
        ElectionStatus: {
            _enum: {
                Close: string;
                Open: string;
            };
        };
        EraIndex: string;
        EraPoints: {
            total: string;
            individual: string;
        };
        EraRewards: {
            total: string;
            rewards: string;
        };
        Exposure: {
            total: string;
            own: string;
            others: string;
        };
        Forcing: {
            _enum: string[];
        };
        IndividualExposure: {
            who: string;
            value: string;
        };
        KeyType: string;
        MomentOf: string;
        Nominations: {
            targets: string;
            submittedIn: string;
            suppressed: string;
        };
        PhragmenScore: string;
        Points: string;
        RewardDestination: {
            _enum: string[];
        };
        SlashJournalEntry: {
            who: string;
            amount: string;
            ownSlash: string;
        };
        SlashingSpansTo204: {
            spanIndex: string;
            lastStart: string;
            prior: string;
        };
        SlashingSpans: {
            spanIndex: string;
            lastStart: string;
            lastNonzeroSlash: string;
            prior: string;
        };
        SpanIndex: string;
        SpanRecord: {
            slashed: string;
            paidOut: string;
        };
        StakingLedger: {
            stash: string;
            total: string;
            active: string;
            unlocking: string;
        };
        UnappliedSlashOther: string;
        UnappliedSlash: {
            validator: string;
            own: string;
            others: string;
            reporters: string;
            payout: string;
        };
        UnlockChunk: {
            value: string;
            era: string;
        };
        ValidatorIndex: string;
        ValidatorPrefs: {
            commission: string;
        };
        ValidatorPrefsTo196: {
            validatorPayment: string;
        };
        ValidatorPrefsTo145: {
            unstakeThreshold: string;
            validatorPayment: string;
        };
    };
};
export default _default;
