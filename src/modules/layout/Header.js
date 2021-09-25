import React from 'react'
import PropTypes from 'prop-types'

import { useDisclosure, Flex, Button } from '@chakra-ui/react'
import { ConnectButton, AccountModal } from 'modules/wallet'
import { Link } from 'react-router-dom'

function Header(props) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex 
      flexDirection='row'
      justifyContent='flex-end'
      width='100%'
      padding='20px'
      alignItems='center'>
      <Link to='/plans'>
        <Button mr='18px' backgroundColor='pink.700' colorScheme="pink" variant="solid">
          Get Premium
        </Button>
      </Link>
      <ConnectButton handleOpenModal={onOpen} />
      <AccountModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  )
}

Header.propTypes = {

}

export default Header

