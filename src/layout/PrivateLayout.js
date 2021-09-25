import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { Redirect } from 'react-router-dom'
import { Flex } from '@chakra-ui/react'

import { useEthers } from '@usedapp/core'
import { useAddressAssets } from 'defi-sdk'

import { Loader } from 'elements'

function PrivateLayout({ children }) {
  const [loading, setLoading] = useState(true)
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

  useEffect(() => {
    if(assets.status === 3) {
      setLoading(false)
    }
  }, [assets])

  console.log('assets', assets)
  console.log('account', account)

  if(!account && assets.status !== 0) { 
    return (<Redirect to="/403" />)
  }

  if(loading) {
    return (
      <Flex
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        h='100vh'
        bg='gray.800'
        >
        <Loader/>
     </Flex>
    )
  }
  let hasAccess = false
  Object.entries(assets.value || {}).find( ([ key, asset ]) => {
    if(key === 'eth') {
      hasAccess = true
    }
  })

  if(hasAccess) {
    return (
      <>
        { children }
      </>
    )
  }

  if(!hasAccess) { 
    return (<Redirect to="/403" />)
  }
}

PrivateLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default PrivateLayout
