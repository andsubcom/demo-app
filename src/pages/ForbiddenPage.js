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
      <Heading as='h1' size='2xl' color='gray.100' marginTop={-16}>
        This page is private
      </Heading>
   </Flex>
  )
}

ForbiddenPage.propTypes = {

}

export default ForbiddenPage
