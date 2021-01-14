import React from 'react'
import Slider from 'react-slick'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <article className="sheet">
      <HelmetDatoCms seo={data.datoCmsZap.seoMetaTags} />
      <div className="sheet__inner">
        <h1 className="sheet__title">{data.datoCmsZap.title}</h1>
        <h2 className="sheet__title"> <a href={data.datoCmsZap.demourl}>{data.datoCmsZap.demourl}</a></h2>
        <p className="sheet__lead">{data.datoCmsZap.excerpt}</p>
        <div className="sheet__from">
        <Img fluid={data.datoCmsZap.from_logo.fluid} />

        </div>
        <div className="sheet__to">

          
</div>
        <div
          className="sheet__body"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsZap.descriptionNode.childMarkdownRemark.html,
          }}
        />

		<div className="sheet__links">
      
		  </div>
      </div>
    </article>
  </Layout>
)

export const query = graphql`
  query ZapQuery($slug: String!) {
    datoCmsZap(slug: { eq: $slug }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      zapTitle
      fromLogo {
        url
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      from
      toLogo {
        url
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      to
      description
      templateLink
      tryItLink

      coverImage {
        url
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
    }
  }
`
