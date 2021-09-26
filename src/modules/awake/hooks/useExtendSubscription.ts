import { BigNumberish } from '@ethersproject/bignumber';
import { useCallback } from 'react';
import useAwakeSDK from './useAwakeSDK';

const useExtendSubscription = (tokenId: BigNumberish) => {
    const awakeSDK = useAwakeSDK();

    const handleExtendSubscription = useCallback(async () => {
		try {
            let tx = await awakeSDK.subscriptionHub.extendSubscription(tokenId);
			return tx;
		} catch (e) {
			return false;
		}
	}, [awakeSDK]);

	return { onExtendSubscription: handleExtendSubscription };
}

export default useExtendSubscription;