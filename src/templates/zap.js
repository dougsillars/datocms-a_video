import React from 'react'
import Slider from 'react-slick'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <article className="sheet">
      <HelmetDatoCms seo={data.datoCmsWork.seoMetaTags} />
      <div className="sheet__inner">
        <h1 className="sheet__title">{data.datoCmsWork.title}</h1>
        <h2 className="sheet__title"> <a href={data.datoCmsWork.demourl}>{data.datoCmsWork.demourl}</a></h2>
        <p className="sheet__lead">{data.datoCmsWork.excerpt}</p>
        <div className="sheet__slider">
          <Slider infinite={true} slidesToShow={2} arrows>
            {data.datoCmsWork.gallery.map(({ fluid }) => (
              <img alt={data.datoCmsWork.title} key={fluid.src} src={fluid.src} />
            ))}
          </Slider>
        </div>
        <div class__name="sheet__video">
           <iframe src= {data.datoCmsWork.videoiframeurl} width='600px' height ='340px' frameborder="0" scrolling="no" allowfullscreen="true"></iframe>
		    </div>
        <div
          className="sheet__body"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsWork.descriptionNode.childMarkdownRemark.html,
          }}
        />

		<div className="sheet__links">
      <img src="https://www.datocms-assets.com/37728/1605691885-blogicon2.png?auto=compress%2Cformat" /><a href={data.datoCmsWork.blogurl}>Blog Post</a><br/>
		  <img src="https://www.datocms-assets.com/37728/1605610549-github-mark-32px.png?auto=compress%2Cformat" /><a href={data.datoCmsWork.githuburl}>Github</a> <br/>
		  <img src="https://www.datocms-assets.com/37728/1605691879-demoicon3.png?auto=compress%2Cformat" /><a href={data.datoCmsWork.demourl}>{data.datoCmsWork.demourl}</a><br/>
	
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
      fromLogo
      from
      toLogo
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
