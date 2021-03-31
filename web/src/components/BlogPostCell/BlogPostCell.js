import BlogPost from 'src/components/BlogPost'

export const QUERY = gql`
  query BlogPostQuery($id: Int!) {
    post(id: $id) {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Just a few more seconds I promise...</div>
export const Empty = () => <div>NO POST HERE SORRY BUD</div>
export const Failure = ({ error }) => <div>{error.message}</div>

export const Success = ({ post }) => {
  return <BlogPost post={post} />
}