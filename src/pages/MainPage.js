import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { Grid, Flex, Heading } from '@chakra-ui/react'

import { Header, PageWrapper } from 'modules/layout'
import { Card } from 'elements'

import { useEthers } from '@usedapp/core'
import { useAddressAssets } from 'defi-sdk'
import useCheckSubscripton from 'modules/awake/hooks/checkSubscription'

function MainPage(props) {
  const { account } = useEthers()
  
  // const valid = useCheckSubscripton("0x2E3b1Acb6963c188Ea8855dBF5f902B2c6B7f41d", 2)
  // console.log('valid', valid)

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
        justifyContent='center'
        h='100vh'
        width='80%'
        padding='0px 0px 128px 0px'
        margin='0 auto'
      >
        <Heading as="h3" size="lg" padding='0px 0px 28px 6px' color='white'>Latest Releases</Heading>
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          <Card widht="100%" />
          <Card widht="100%" />
          <Card widht="100%" />
          <Card widht="100%" />
        </Grid>
      </Flex>
    </PageWrapper>
  )
}

MainPage.propTypes = {

}

export default MainPage
