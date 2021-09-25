import React from 'react'
import PropTypes from 'prop-types'

import { Flex } from '@chakra-ui/react'

function PageWrapper({children, ...rest}) {
  return (
    <Flex 
      flexDirection='column'
      h='100vh'
      w='100%'
      bg='gray.900'
      {...rest}
      >
      { children }
    </Flex>
  )
}

PageWrapper.propTypes = {

}

export default PageWrapper

