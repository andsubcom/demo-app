import React from 'react'
import PropTypes from 'prop-types'

import { withRouter } from 'react-router-dom'

import { useEthers } from '@usedapp/core'
import { useAddressAssets } from 'defi-sdk'

function PrivateLayout({ children }) {
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

  console.log('assets', assets)
  console.log('account', account)
  return (
    <>
      { children }
    </>
  )
}

PrivateLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default withRouter(PrivateLayout)
