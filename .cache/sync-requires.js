// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("D:/temp/tutorial-part-three/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("D:\\temp\\tutorial-part-three\\.cache\\dev-404-page.js")),
  "component---src-pages-about-js": preferDefault(require("D:\\temp\\tutorial-part-three\\src\\pages\\about.js")),
  "component---src-pages-contact-js": preferDefault(require("D:\\temp\\tutorial-part-three\\src\\pages\\contact.js")),
  "component---src-pages-index-js": preferDefault(require("D:\\temp\\tutorial-part-three\\src\\pages\\index.js"))
}

exports.json = {
  "layout-index.json": require("D:\\temp\\tutorial-part-three\\.cache\\json\\layout-index.json"),
  "dev-404-page.json": require("D:\\temp\\tutorial-part-three\\.cache\\json\\dev-404-page.json"),
  "about.json": require("D:\\temp\\tutorial-part-three\\.cache\\json\\about.json"),
  "contact.json": require("D:\\temp\\tutorial-part-three\\.cache\\json\\contact.json"),
  "index.json": require("D:\\temp\\tutorial-part-three\\.cache\\json\\index.json")
}