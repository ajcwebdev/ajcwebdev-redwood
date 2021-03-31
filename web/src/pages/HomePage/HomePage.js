import BlogLayout from 'src/layouts/BlogLayout'
import BlogPostsCell from 'src/components/BlogPostsCell'

const HomePage = () => {
  return (
    <>
      <BlogLayout>
        <p>This page is the home!</p>
        <BlogPostsCell />
      </BlogLayout>
    </>
  )
}

export default HomePage