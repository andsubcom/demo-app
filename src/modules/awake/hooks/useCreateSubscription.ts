import { BigNumberish } from '@ethersproject/bignumber';
import { useCallback, useState } from 'react';

import useAwakeSDK from './useAwakeSDK';

const useCreateSubscription = (
    orgId: BigNumberish,
    orgName: string, 
    token: string, 
    amount: BigNumberish, 
    period: BigNumberish,
) => {
    const awakeSDK = useAwakeSDK();

    const handleCreateSubscription = useCallback(async () => {
		try {
            let tx = await awakeSDK.subscriptionHub.createSubscription(orgId, orgName, token, amount, period);
			return tx
		} catch (e) {
			return false
		}
	}, [awakeSDK])

	return { onCreateSubscription: handleCreateSubscription }
}

export default useCreateSubscription;