import { Signer } from '@ethersproject/abstract-signer';
import { Web3Provider } from '@ethersproject/providers';
import { ethers, Wallet } from 'ethers';

import React, { createContext, useEffect, useState } from 'react'

import { AwakeSDK } from '../../sdk/AwakeSDK';

declare global {
  interface Window {
    awakeSDK: any
    ethereum: any
  }
}

interface AwakeContext {
    awakeSDK: AwakeSDK;
}

export const Context = createContext<AwakeContext>({
    awakeSDK: undefined,
});

const AwakeContextProvider: React.FC = ({ children }) => {
    const [awakeSDK, setAwakeSDK] = useState<AwakeSDK>()
    const [provider, setProvider] = useState<Web3Provider>();
    const [signer, setSigner] = useState< Wallet | Signer >();
    const [networkId, setNetworkId] = useState<number>();

    // @ts-ignore
    window.awakeSDK = awakeSDK

    useEffect(() => {
        const handleEthers = async () => {
            let provider = new ethers.providers.Web3Provider(window.ethereum);
            setProvider(provider);
    
            let signer = await provider.getSigner();
            setSigner(signer);
    
            const network = await provider.getNetwork();
            setNetworkId(network.chainId);
        }

        handleEthers();
        
        const awake = new AwakeSDK(
            provider,
            signer,
            networkId
        );
        setAwakeSDK(awake);
        window.awakeSDK = awake;
    }, []);

      
    return (<Context.Provider value={{ awakeSDK }}> { children } </Context.Provider>)
}

export default AwakeContextProvider
