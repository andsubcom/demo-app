import React from 'react'
import PropTypes from 'prop-types'

import { withRouter } from 'react-router-dom'
import { Flex } from '@chakra-ui/react'

import { useEthers } from '@usedapp/core'
import { useAddressAssets } from 'defi-sdk'

import { Loader } from 'elements'

function PrivateLayout({ children }) {
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
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      h='100vh'
      bg='gray.800'
      >
      <Loader/>
   </Flex>
  )
}

PrivateLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default withRouter(PrivateLayout)
