import React from 'react'
import { Link, graphql } from 'gatsby'
import Masonry from 'react-masonry-component'
import Img from 'gatsby-image'
import Layout from "../components/layout"
import {Helmet} from "react-helmet";



const IndexPage = ({ data }) => (

  <Layout>
    <Helmet>
      <script>
        var __nspid="isrtzw";
        var __nsptags=[];
        (function(w, d) { var x = function() {
        var j=d.createElement("script");j.type="text/javascript";j.async=true;
        j.src="http"+("https:"===d.location.protocol?"s://cs":"://c")+".ns1p.net/p.js?a="+__nspid;
        d.body.appendChild(j); }
        if(w.addEventListener) { w.addEventListener("load", x, false); }
        else if(w.attachEvent) { w.attachEvent("onload", x); }
        else { w.onload = x; }
        }(window, document));
      </script>
    </Helmet>
    <Masonry className="showcase">
      {data.allDatoCmsWork.edges.map(({ node: work }) => (
        <div key={work.id} className="showcase__item">
          <figure className="card">
            <Link to={`/works/${work.slug}`} className="card__image">
              <Img fluid={work.coverImage.fluid} />
            </Link>
            <figcaption className="card__caption">
              <h6 className="card__title">
                <Link to={`/works/${work.slug}`}>{work.title}</Link>
              </h6>
              <div className="card__description">
                <p>{work.excerpt}</p>
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
  query IndexQuery {
    allDatoCmsWork(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          id
          title
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
