import React from 'react'

import Layout from '../components/layout'

import capSrc from '../images/reference.gif'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <img src={capSrc} alt='Captain America' />
  </Layout>
)

export default IndexPage
