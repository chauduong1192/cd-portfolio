exports.createPages = ({ graphql, actions }) => {
  const { createRedirect } = actions
  createRedirect({ fromPath: 'https://chauduong.netlify.com/', toPath: 'http://chauduong.xyz/', isPermanent: true, redirectInBrowser: true })
  // Create pages here
}