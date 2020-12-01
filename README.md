```
yarn create redwood-app ./learnwithjason
```

```
cd learnwithjason
code .
yarn rw dev
```

```
yarn rw g page home /
```

```javascript
// web/src/pages/HomePage/HomePage.js

const HomePage = () => {
  return (
    <>
      <h1>Learn with Jason</h1>
      <p>Get booped on the what?</p>
    </>
  )
}

export default HomePage
```

```
yarn rw g page about
```

```javascript
// web/src/pages/AboutPage/AboutPage.js

const AboutPage = () => {
  return (
    <>
      <h1>About</h1>
      <p>Booped on the brain!</p>
    </>
  )
}

export default AboutPage
```

```
yarn rw g layout blog
```

```javascript
// web/src/layouts/BlogLayout/BlogLayout.js

import { Link, routes } from '@redwoodjs/router'

const BlogLayout = ({ children }) => {
  return (
    <>
      <header>
        <h1>
          <Link to={routes.home()}>Learn With Jason</Link>
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
    </>
  )
}

export default BlogLayout
```

```javascript
// web/src/pages/HomePage/HomePage.js

import BlogLayout from 'src/layouts/BlogLayout'

const HomePage = () => {
  return (
    <BlogLayout>
      <p>Get booped on the what?</p>
    </BlogLayout>
  )
}

export default HomePage
```

```javascript
// web/src/pages/AboutPage/AboutPage.js

import BlogLayout from 'src/layouts/BlogLayout'

const AboutPage = () => {
  return (
    <BlogLayout>
      <p>Booped on the brain!</p>
    </BlogLayout>
  )
}

export default AboutPage
```

```
// api/prisma/schema.prisma

model Post {
  id        Int      @id @default(autoincrement())
  title     String
  body      String
  createdAt DateTime @default(now())
}
```

```
yarn rw db save
```

```
yarn rw db up
```

```
yarn rw g scaffold post
```

```
yarn rw g cell BlogPosts
```

```javascript
export const QUERY = gql`
  query BlogPostsQuery {
    posts {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ posts }) => {
  return JSON.stringify(posts)
}
```

```javascript
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
```

```javascript
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
```

```javascript
export const Success = ({ posts }) => {
  return posts.map(post => (
    <article key={post.id}>
      <header>
        <h2>{post.title}</h2>
      </header>
      <time>{post.createdAt}</time>
      <p>{post.body}</p>
    </article>
  ))
}
```