import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Heading } from '@chakra-ui/react'

import { Header, PageWrapper } from 'modules/layout'

function PrivatePage(props) {
  return (
    <PageWrapper>
      <Header/>
      <Flex
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      h='100vh'
      >
        <Heading as='h1' size='lg' color='gray.100' marginTop={-16}>
          Private Content Example
        </Heading>
      </Flex>
    </PageWrapper>
  )
}

PrivatePage.propTypes = {

}

export default PrivatePage
