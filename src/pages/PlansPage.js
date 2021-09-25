import React from 'react'
import PropTypes from 'prop-types'

import { Grid, Flex, Heading, Text, Box, Button } from '@chakra-ui/react'

import { Header, PageWrapper } from 'modules/layout'
import { Card } from 'elements'
import styled from '@emotion/styled'

function PlansPage(props) {
  return (
    <PageWrapper>
      <Header/>
      <Flex
        flexDirection='column'
        justifyContent='center'
        h='100vh'
        width='80%'
        padding='0px 0px 128px 0px'
        margin='0 auto'
      >
        <Heading as="h3" size="lg" padding='0px 0px 28px 6px' color='white'>Plans</Heading>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <PlanCard flexDirection='column' justifyContent='space-between' padding="26px 18px" widht="100%">
            <Box>
              <Heading>Beginner</Heading>
              <Text mt='4px' fontWeight='400' fontSize='1.2rem'>Access to premium content for <b>1 month</b>. Pay with USDT</Text>
            </Box>
            <Box>
              <Button 
                colorScheme="black" 
                backgroundColor='black' 
                color='white'
                padding='24px 28px'
                borderRadius='24px'
                variant="solid">
                Subscribe now ->
              </Button>
            </Box>
            <Clip />
          </PlanCard>
          <PlanCard flexDirection='column' justifyContent='space-between' padding="26px 18px" widht="100%">
            <Box>
              <Heading>Intermediate</Heading>
              <Text mt='4px' fontWeight='400' fontSize='1.2rem'>Access to premium content for <b>6 month</b>. Pay with USDT</Text>
            </Box>
            <Box>
              <Button 
                colorScheme="black" 
                backgroundColor='black' 
                color='white'
                padding='24px 28px'
                borderRadius='24px'
                variant="solid">
                Subscribe now ->
              </Button>
            </Box>
            <Clip />
          </PlanCard>
          <PlanCard flexDirection='column' justifyContent='space-between' padding="26px 18px" widht="100%">
            <Box>
              <Heading>Pro</Heading>
              <Text mt='4px' fontWeight='400' fontSize='1.2rem'>Access to premium content for <b>12 month</b>. Pay with USDT</Text>
            </Box>
            <Box>
              <Button 
                colorScheme="black" 
                backgroundColor='black' 
                color='white'
                padding='24px 28px'
                borderRadius='24px'
                variant="solid">
                Subscribe now ->
              </Button>
            </Box>
            <Clip />
          </PlanCard>
        </Grid>
      </Flex>
    </PageWrapper>
  )
}

PlansPage.propTypes = {

}

const Clip = styled.div`
  position: absolute;
  left: 0px;
  bottom: -2.075rem;
  width: 100%;
  height: 2.125rem;
  background: linear-gradient(rgb(20, 241, 149) 6.43%, rgb(33, 36, 41) 80%);
  clip-path: polygon(20% 64%, 80% 64%, 98% 0%, 2% 0%);
`
const PlanCard = styled(Flex)`
  min-height: 265px;
  position: relative;
  border-radius: 0.75rem;
  background-color: rgb(20, 241, 149);
`

export default PlansPage
