// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": require("gatsby-module-loader?name=component---cache-dev-404-page-js!D:\\temp\\tutorial-part-three\\.cache\\dev-404-page.js"),
  "component---src-pages-about-js": require("gatsby-module-loader?name=component---src-pages-about-js!D:\\temp\\tutorial-part-three\\src\\pages\\about.js"),
  "component---src-pages-contact-js": require("gatsby-module-loader?name=component---src-pages-contact-js!D:\\temp\\tutorial-part-three\\src\\pages\\contact.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!D:\\temp\\tutorial-part-three\\src\\pages\\index.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!D:\\temp\\tutorial-part-three\\.cache\\json\\layout-index.json"),
  "dev-404-page.json": require("gatsby-module-loader?name=path---dev-404-page!D:\\temp\\tutorial-part-three\\.cache\\json\\dev-404-page.json"),
  "about.json": require("gatsby-module-loader?name=path---about!D:\\temp\\tutorial-part-three\\.cache\\json\\about.json"),
  "contact.json": require("gatsby-module-loader?name=path---contact!D:\\temp\\tutorial-part-three\\.cache\\json\\contact.json"),
  "index.json": require("gatsby-module-loader?name=path---index!D:\\temp\\tutorial-part-three\\.cache\\json\\index.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!D:/temp/tutorial-part-three/.cache/layouts/index.js")
}