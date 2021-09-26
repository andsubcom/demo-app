import { BigNumberish } from '@ethersproject/bignumber';
import { useCallback } from 'react';
import useAwakeSDK from './useAwakeSDK';

const useBuySubscription = (subscriptionId: BigNumberish) => {
    const awakeSDK = useAwakeSDK();

    const handleBuySubscription = useCallback(async () => {
		try {
            let tx = await awakeSDK.subscriptionHub.buySubscription(subscriptionId);
			return tx;
		} catch (e) {
			return false;
		}
	}, [awakeSDK]);

	return { onBuySubscription: handleBuySubscription };
}

export default useBuySubscription;