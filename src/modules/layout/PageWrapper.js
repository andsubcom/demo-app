import React from 'react'
import PropTypes from 'prop-types'

import { Flex } from '@chakra-ui/react'

function PageWrapper({children, ...rest}) {
  return (
    <Flex
      position='relative'
      flexDirection='column'
      h='100vh'
      w='100%'
      bg='rgb(33, 36, 41)'
      {...rest}
      >
      { children }
    </Flex>
  )
}

PageWrapper.propTypes = {

}

export default PageWrapper

