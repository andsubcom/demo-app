import { BigNumber } from 'ethers/lib/ethers';
import { useCallback } from 'react'
import useAwakeSDK from './useAwakeSDK'

const useApprove = (spender: string, amount: number | BigNumber) => {
	const awakeSDK = useAwakeSDK()
	const handleApprove = useCallback(async () => {
		try {
			const tx = await awakeSDK.xCoinToken.approve(spender, amount)
			return tx
		} catch (e) {
			return false
		}
	}, [awakeSDK]);

	return { onApprove: handleApprove };
}

export default useApprove;
