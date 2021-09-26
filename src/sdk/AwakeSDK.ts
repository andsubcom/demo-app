import { addresses, ContractAddresses} from './utils/addresses';
import { BigNumber, getDefaultProvider, Signer, Wallet } from 'ethers';
import { BaseProvider } from '@ethersproject/providers';

import { SUBTRACT_GAS_LIMIT, NETWORKS, ZERO_BN, } from './utils/constants'
import { SubscriptionHub, SubscriptionTicketNFT } from "./contracts";
import { XCoin } from './contracts/XCoin';

export class AwakeSDK {
    provider: BaseProvider;
    networkId: number = 0;
    blockGasLimit: BigNumber = ZERO_BN;
    network: string = 'ropsten';
    signer: Wallet | Signer;
    contracts: ContractAddresses;
    subscriptionHub: SubscriptionHub;
    subscriptionTicketNFT: SubscriptionTicketNFT;
    xCoinToken: XCoin;
  
    constructor(provider: BaseProvider, signer?: Wallet | Signer, networkId?: number, options?: { defaultGas?: number; defaultGasPrice?: any; }) {
      this.signer = signer;
  
      this.provider = provider || getDefaultProvider();
      this.networkId = networkId || 3;
      this.network = NETWORKS[this.networkId];
      this.contracts = addresses[this.networkId];

      this.subscriptionHub = new SubscriptionHub(this.signer || this.provider, addresses[this.networkId].subscriptionHub);
      this.subscriptionTicketNFT = new SubscriptionTicketNFT(this.signer || this.provider, addresses[this.networkId].subscriptionTicketNFT);
      this.xCoinToken = new XCoin(this.signer || this.provider, addresses[this.networkId].xCoinToken);
    }
  
    async setGasLimit() {
        const block = await this.provider.getBlock('latest')
        this.blockGasLimit = block.gasLimit.sub(BigNumber.from(SUBTRACT_GAS_LIMIT));
    }

    async estimateGasPrice() {
      const block = await this.provider.getBlock('latest')
      this.blockGasLimit = block.gasLimit.sub(BigNumber.from(SUBTRACT_GAS_LIMIT));
    }
}