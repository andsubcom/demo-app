import { BigNumber } from '@ethersproject/bignumber';
import { useCallback, useEffect, useState } from 'react';

import useAwakeSDK from './useAwakeSDK';

const useGetOrganizationInfo = (orgId: number | BigNumber) => {
    const [orgInfo, setOrgInfo] = useState<any>();
    const awakeSDK = useAwakeSDK();

    const fetchSubscriptionHub = useCallback(async (isMounted: boolean) => {
        let data: any = await awakeSDK.subscriptionHub.getOrganizationInfo(orgId);

        setOrgInfo(data);
    }, [awakeSDK, orgId]);

    useEffect(() => {
        let isMounted = true;
        if (awakeSDK) {
            fetchSubscriptionHub(isMounted);
        }
        return () => { isMounted = false };
    }, [awakeSDK]);

	return { orgInfo };
}

export default useGetOrganizationInfo;