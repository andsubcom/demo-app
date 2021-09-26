import { BigNumber } from '@ethersproject/bignumber';
import { useCallback, useEffect, useState } from 'react';

import useAwakeSDK from './useAwakeSDK';

const useCheckSubscripton = (user: string, subscriptionId: number | BigNumber) => {
    const [result, setResult] = useState<Boolean>();
    const awakeSDK = useAwakeSDK();

    const fetchSubscriptionHub = useCallback(async (isMounted: boolean) => {
        console.log('user ----> ', user)
        console.log('awakeSDK ----> ', awakeSDK)
        let result: Boolean = await awakeSDK.subscriptionHub.checkUserHasActiveSubscription(user, subscriptionId);

        setResult(result);
    }, [user, subscriptionId, awakeSDK]);

    useEffect(() => {
        let isMounted = true;
        if (awakeSDK) {
            fetchSubscriptionHub(isMounted);
        }
        return () => { isMounted = false };
    }, [awakeSDK, user]);

	return { result };
}

export default useCheckSubscripton;