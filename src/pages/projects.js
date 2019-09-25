import React from "react"
import { graphql } from 'gatsby'
import { Row, Col } from "reactstrap"
import Layout from "../components/layout"
import PageCoverImg from "../components/page-cover"
import SEO from "../components/seo"
import Projects from "../components/project-section"
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

const IndexPage = ({ data }) => {
  console.log("data: ", data)
  return (
    <Layout>

        {/* SEO keywords */}
        <SEO title="Home" keywords={[`connor`, `jaksik`, `web`, `developer`, `denver`, `colorado`]} />
        
       <PageCoverImg image={data.file.childImageSharp.fluid} title="Hello World"/>
        <Projects/>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    file(relativePath: { eq: "mountain-top.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`