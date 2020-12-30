import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby";

//import SideBar from './Sidebar/index';

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import HeaderEN from './headerEN'
import Footer from './Footer/footer'




class Layout2 extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    const data = useStaticQuery(graphql`
    query ENBlogSiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

    return (
      <>
      <HeaderEN siteTitle={data.site.siteMetadata.title}/>
      <Wrapper>
        <section className="">
          <Container>
          <main>{children}</main>

        </Container>
        </section>
      </Wrapper>
      <Footer />
      </>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`


export default Layout2
