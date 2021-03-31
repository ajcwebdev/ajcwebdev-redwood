import { Link, routes } from '@redwoodjs/router'

const BlogLayout = ({ children }) => {
  return (
    <>
      <header>
        <h1>
          <Link to={routes.home()}>ajcwebdev</Link>
        </h1>

        <nav>
          <ul>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>{children}</main>

      <footer>
        <h3>Find me online:</h3>

        <ul>
          <li>
            <a href="https://dev.to/ajcwebdev">Blog</a>
          </li>
          <li>
            <a href="https://twitter.com/ajcwebdev">Twitter</a>
          </li>
          <li>
            <a href="https://github.com/ajcwebdev">GitHub</a>
          </li>
        </ul>
      </footer>
    </>
  )
}

export default BlogLayout