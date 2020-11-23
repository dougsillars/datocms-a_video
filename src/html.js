  
import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <script
  dangerouslySetInnerHTML={{
    __html: `
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
        `,
  }}
/>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}



