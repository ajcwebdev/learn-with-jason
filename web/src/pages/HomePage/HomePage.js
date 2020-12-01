import BlogLayout from 'src/layouts/BlogLayout'
import BlogPostsCell from 'src/components/BlogPostsCell'

const HomePage = () => {
  return (
    <BlogLayout>
      <p>Get booped on the what?</p>
      <BlogPostsCell />
    </BlogLayout>
  )
}

export default HomePage