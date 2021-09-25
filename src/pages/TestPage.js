import React from 'react'
import PropTypes from 'prop-types'

import { Header, PageWrapper } from 'modules/layout'
import { Flex, Heading } from '@chakra-ui/react'

import { useEthers } from '@usedapp/core'
import { useAddressAssets } from 'defi-sdk'

function TestPage(props) {
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
    <PageWrapper>
      <Header/>
      <Flex
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        h='100vh'
      >
        <Heading color='white'>Test Page</Heading>
      </Flex>
    </PageWrapper>
  )
}

TestPage.propTypes = {

}

export default TestPage
