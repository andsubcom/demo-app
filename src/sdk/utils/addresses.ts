export interface ContractAddresses {
    subscriptionHub: string,
    subscriptionTicketNFT: string,
    xCoinToken: string,
}

const ROPSTEN_ADDRESSES: ContractAddresses = {
    subscriptionHub: '0xA20B982b7a534b4a1e8c71A45ADbfe8faeed2cff',
    subscriptionTicketNFT: '0xcC3F2418f5E8DF1Bd02f57054a75A6637EF96547',
    xCoinToken: "0x6ef6f7Ca5fb523C0Cf8F793cd9C3EEF228e86679",
};

export const addresses:{[key: number]: ContractAddresses}  = {
    3: ROPSTEN_ADDRESSES,
};