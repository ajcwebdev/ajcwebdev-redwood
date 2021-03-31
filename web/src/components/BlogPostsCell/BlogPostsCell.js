import BlogPost from 'src/components/BlogPost'

export const QUERY = gql`
  query BlogPostsQuery {
    posts {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Almost there...</div>
export const Empty = () => <div>I NEED A POST</div>
export const Failure = ({ error }) => <div>{error.message}</div>

export const Success = ({ posts }) => {
  return posts.map(
    (post) => <BlogPost key={post.id} post={post} />
  )
}