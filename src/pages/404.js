import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div class="container mx-auto p-8 text-center">
      <h1 className="mb-4 text-2xl font-bold">404: Not Found</h1>
      <p>You just hit a page that doesn&#39;t exist...</p>
      <StaticImage
        className="mt-4 max-w-xs"
        src="../images/404.png"
        alt="404"
      />
    </div>
  </Layout>
)

export default NotFoundPage
