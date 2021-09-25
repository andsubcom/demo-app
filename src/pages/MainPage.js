import React from 'react'
import PropTypes from 'prop-types'
import { useDisclosure, Flex } from '@chakra-ui/react'
import styled from '@emotion/styled'

import { useEthers } from "@usedapp/core"
import { useAddressAssets } from "defi-sdk"

import { ConnectButton, AccountModal, Asset } from 'modules/wallet'

function MainPage(props) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { account } = useEthers()

  const assets = useAddressAssets(
    {
      currency: "USD",
      address: account || "",
    },
    {
      enabled: Boolean(account),
    },
  )

  console.log('assets', assets)
  console.log('account', account)

  return (
    <Flex
     flexDirection="column"
     alignItems="center"
     justifyContent="center"
     h="100vh"
     bg="gray.800"
    >
      <ConnectButton handleOpenModal={onOpen} />
      <AccountModal isOpen={isOpen} onClose={onClose} />
      <AssetsContainer>
        {Object.entries(assets.value || {})?.map(([code, asset]) => (
          <Asset key={code} addressAsset={asset} />
        ))}
      </AssetsContainer>
   </Flex>
  )
}

const AssetsContainer = styled(Flex)`
  margin-top: 32px;
  width: 400px;
  flex-direction: column;
`

MainPage.propTypes = {

}

export default MainPage
