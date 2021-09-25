import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Heading } from '@chakra-ui/react'

import { PageContainer, PageContent, Nav, Table } from 'modules/admin'

const AdminPage = () => {
  const headers = [
    {
      id: "id",
      title: "ID",
    },
    {
      id: "name",
      title: "Name",
    },
    {
      id: "email",
      title: "Email",
    },
    {
      id: "date_registered",
      title: "Date registered",
    },
  ];

  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      date_registered: "July 15, 2020",
    },
    {
      id: 2,
      email: "john2@example.com",
      name: "John2 Doe",
      date_registered: "July 16, 2020",
    },
    {
      id: 3,
      name: "John3 Doe",
      email: "john3@example.com",
      date_registered: "July 17, 2020",
    },
  ];

  return (
    <PageContainer isFixedNav>
      <Nav />
      <Flex>
        <Flex
          width='320px'
          paddingTop="1.5rem"
        >
          <Heading size="lg">Organizations</Heading>
        </Flex>
        <PageContent
          title="Subscriptions"
          primaryAction={{
            content: "Add Subscription",
            onClick: () => {
              alert("ok");
            },
          }}
        >
          <Table headers={headers} items={users} />
        </PageContent>
      </Flex>
    </PageContainer>
  )
}

AdminPage.propTypes = {

}

export default AdminPage
