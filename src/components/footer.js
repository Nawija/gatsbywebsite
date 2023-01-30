import * as React from "react"
import { Link } from "gatsby"

const Footer = () => (
  <footer className="mt-12 p-4 bg-indigo-400">
    © 2023 &middot; Built with
    {` `}
    <Link to="/">Boople</Link>
  </footer>
)

export default Footer
