import * as React from "react"
import { loadFull } from "tsparticles"
import Layout from "../layouts/layout"
import { Helmet } from "react-helmet"
import Particles from "react-particles"
import { notfound } from "../constants/particles"
import { text } from "./404.module.css"
import { Link } from "gatsby"

const NotFoundPage = () => {
  const particlesInit = React.useCallback(async engine => {
    await loadFull(engine)
  }, [])
  const particlesLoaded = React.useCallback(async container => {
    await console.log(container)
  }, [])

  return (
    <Layout>
      <div style={{ backgroundColor: "black", width: "100%" }}>
        <Helmet title="404 Not Found" defer={false} />
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={notfound}
        />
        <div className={text}>
          <h1>404 Not Found</h1>
          <h2>به نظر میرسه در فضا گم شدی !</h2>
          <Link to="/">
            <h3>برگرد به صفحه اصلی</h3>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage
