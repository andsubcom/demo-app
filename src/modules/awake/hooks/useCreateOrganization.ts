import { useCallback } from 'react';
import useAwakeSDK from './useAwakeSDK';

const useCreateOrganization = (orgName: string) => {
    const awakeSDK = useAwakeSDK();

    const handleCreateOrganization = useCallback(async () => {
		try {
            let tx = await awakeSDK.subscriptionHub.createOrganization(orgName);
			return tx;
		} catch (e) {
			return false;
		}
	}, [awakeSDK]);

	return { onCreateOrganization: handleCreateOrganization };
}

export default useCreateOrganization;