import { useContext } from 'react'
import { Context } from '../AwakeContextProvider'

const useAwakeSDK = () => {
    const { awakeSDK } = useContext(Context);
    return awakeSDK;
}
export default useAwakeSDK
