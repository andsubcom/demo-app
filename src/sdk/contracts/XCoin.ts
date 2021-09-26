import { BigNumber, Contract, Signer} from 'ethers';
import { BaseProvider } from '@ethersproject/providers';
import abis from "../abis";

export class XCoin {
    contract: Contract;

    constructor(signerOrProvider: Signer | BaseProvider, addressOrName: string) {
        this.contract = new Contract(
            addressOrName,
            abis.XCoin,
            signerOrProvider,
          );      
    };

    approve = async (spender: string, amount: number | BigNumber) => {
        return await this.contract.approve(spender, amount);
    }

    balance = async (user: string) => {
        return await this.contract.balanceOf(user);
    }

}