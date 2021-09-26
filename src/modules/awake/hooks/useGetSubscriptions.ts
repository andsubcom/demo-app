import { BigNumberish } from 'ethers/lib/ethers';
import { useCallback, useEffect, useState } from 'react';

import useAwakeSDK from './useAwakeSDK';

const useGetSubscriptions = (orgId: BigNumberish) => {
    const [result, setResult] = useState<any>();
    const awakeSDK = useAwakeSDK();

    const fetchSubscriptionHub = useCallback(async (isMounted: boolean) => {
        let result: Boolean = await awakeSDK.subscriptionHub.getAllSubscriptionsForOrganization(orgId);

        setResult(result);
    }, [awakeSDK, orgId]);

    useEffect(() => {
        let isMounted = true;
        if (awakeSDK) {
            fetchSubscriptionHub(isMounted);
        }
        return () => { isMounted = false };
    }, [awakeSDK]);

	return { result };
}

export default useGetSubscriptions;