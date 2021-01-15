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
          <img src={data.datoCmsZap.fromLogo.url} width="150"/>
          <div className="sheet__from_text">
            {data.datoCmsZap.from}
          </div>  
        </div>
        <div className="sheet__to">
          <img src={data.datoCmsZap.toLogo.url} width="150" />
          <div className="sheet__to_text">
            {data.datoCmsZap.to}
          </div>        

          
        </div>
        <div
          className="sheet__body"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsZap.descriptionNode.childMarkdownRemark.html,
          }}
        />

        <div className="sheet__links">
          <a href={data.datoCmsZap.templateLink}>See the Zapier Template page</a><br/>
		      <a href={data.datoCmsZap.tryItlink}>Try it!</a> <br/>
		      
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
        fluid(maxWidth: 500, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      from
      toLogo {
        url
        fluid(maxWidth: 500, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      to
      descriptionNode {
        childMarkdownRemark {
          html
        }
      }
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
