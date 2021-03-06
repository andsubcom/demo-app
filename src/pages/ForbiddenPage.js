import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Heading } from '@chakra-ui/react'

function ForbiddenPage(props) {
  return (
    <Flex
     flexDirection='column'
     alignItems='center'
     justifyContent='center'
     h='100vh'
     bg='gray.800'
    >
      <Heading as='h1' size='lg' color='gray.100' marginTop={-16}>
        You don't have access to this page
      </Heading>
   </Flex>
  )
}

ForbiddenPage.propTypes = {

}

export default ForbiddenPage
