import React from 'react'
import { Link, graphql } from 'gatsby'
import Masonry from 'react-masonry-component'
import Img from 'gatsby-image'
import Layout from "../components/layout"
import {Helmet} from "react-helmet";



const IndexPage = ({ data }) => (

  <Layout>
    <Masonry className="showcase">
      {data.allDatoCmsZap.edges.map(({ node: zap }) => (
        <div key={zap.id} className="showcase__item">
          <figure className="card">
            <Link to={`/zaps/${zap.slug}`} className="card__image">
              <Img fluid={zap.coverImage.fluid} />
            </Link>
            <figcaption className="card__caption">
              <h6 className="card__title">
                <Link to={`/zaps/${zap.slug}`}>{zap.zapTitle}</Link>
              </h6>
              <div className="card__description">
                <p>{zap.excerpt}</p>
              </div>
            </figcaption>
          </figure>
        </div>
      ))}
    </Masonry>

  </Layout>
  
)

export default IndexPage

export const query = graphql`
  query zapQuery {
    allDatoCmsZap(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          id
          ZapTitle
          slug
          excerpt
          coverImage {
            fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
  }
`
