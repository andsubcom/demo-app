import React from 'react'
import PropTypes from 'prop-types'

import { Grid, Flex, Heading } from '@chakra-ui/react'

import { Header, PageWrapper } from 'modules/layout'
import { Card } from 'elements'

function PlansPage(props) {
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
        <Heading as="h3" size="lg" padding='0px 0px 28px 6px' color='white'>Plans</Heading>
      </Flex>
    </PageWrapper>
  )
}

PlansPage.propTypes = {

}

export default PlansPage
