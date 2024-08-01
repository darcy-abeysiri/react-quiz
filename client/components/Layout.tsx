// The layout
// may end up scrapping it
import React from 'react'

const Layout = ({ children }) => (
  <div>
    <header>
      <h1></h1>
    </header>
    <main>{children}</main>
    <footer></footer>
  </div>
)

export default Layout
