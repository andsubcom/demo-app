import { BigNumber } from "@ethersproject/bignumber";
import { GasPrices } from "./gas";

export const NETWORKS: {[key: number]: string} = {
    3: 'ropsten',
};

export const SUBTRACT_GAS_LIMIT = 100000;
export const DEFAULT_CHAIN_ID = 3;
export const DEFAULT_NETWORK = 'ropsten';
export const DEFAULT_MNEMONIC: string = "test test test test test test test test test test test junk";
export const ZERO_BN = BigNumber.from('0');

export const DEFAULT_GAS_PRICES: {[key: number]: GasPrices} = {
    3: {
        instant: 10,
        fast: 5,
        standard: 3,
        low: 1,
    },
};
