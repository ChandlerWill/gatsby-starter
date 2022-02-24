import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>My Portfolio</h2>
          <h3>Results oriented Software Engineer</h3>
          <p>Welcome</p>
          <Link className={styles.btn} to="/projects">My Projects</Link>
        </div>
        <img src="/daisyBeach.png" alt="site banner" style={{ maxWidth: '100%' }}/>
      </section>
    </Layout>
  )
}
