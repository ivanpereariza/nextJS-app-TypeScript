import Footer from "components/Footer/Footer"
import NavBar from "components/NavBar/NavBar"
import React from "react"

import styles from './layout.module.css'

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <>
      <div className={styles.container} style={{ minHeight: '97.4vh' }}>
        <NavBar />
        {children}
      </div>
      <Footer />
    </>
  )
}

export default Layout
