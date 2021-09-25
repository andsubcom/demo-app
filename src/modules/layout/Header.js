import React from 'react'
import PropTypes from 'prop-types'

import { useDisclosure, Flex } from '@chakra-ui/react'
import { ConnectButton, AccountModal } from 'modules/wallet'

function Header(props) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex 
      flexDirection='row'
      justifyContent='flex-end'
      width='100%'
      padding='20px'
      alignItems='center'>
      <ConnectButton handleOpenModal={onOpen} />
      <AccountModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  )
}

Header.propTypes = {

}

export default Header

