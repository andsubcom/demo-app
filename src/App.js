import React from 'react'
import { client } from "defi-sdk"
import { ChakraProvider } from "@chakra-ui/react"
import theme from "./theme"
import "@fontsource/inter"
import { DAppProvider } from "@usedapp/core"

import Router from './router'

export const endpoint = "wss://api-staging.zerion.io";
export const API_TOKEN = "Zerion.0JOY6zZTTw6yl5Cvz9sdmXc7d5AhzVMG";

client.configure({
  url: endpoint,
  apiToken: API_TOKEN,
  hooks: {
    willSendRequest: request => {
      return request;
    },
  },
});
Object.assign(window, { client });


const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <DAppProvider config={{}}>
        <Router />
      </DAppProvider>
    </ChakraProvider>
  )
}

export default App
