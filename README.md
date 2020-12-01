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

```
yarn rw g page contact
```

```javascript
// web/src/layouts/BlogLayout/BlogLayout.js

const BlogLayout = ({ children }) => {
  return (
    <>
      <header>
        <h1>
          <Link to={routes.home()}>Redwood Blog</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
            <li>
              <Link to={routes.contact()}>Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}
```

```javascript
// web/src/pages/ContactPage/ContactPage.js

import BlogLayout from 'src/layouts/BlogLayout'

const ContactPage = () => {
  return (
    <BlogLayout>
      <h1>Contact</h1>
      <p>Tell me stuff about my things!</p>
    </BlogLayout>
  )
}

export default ContactPage
```

```javascript
// web/src/pages/ContactPage/ContactPage.js

import {
  Form,
  Label,
  TextField,
  Submit
} from '@redwoodjs/forms'
```

```javascript
// web/src/pages/ContactPage/ContactPage.js

const ContactPage = () => {
  return (
    <BlogLayout>
      <h1>Contact</h1>
      <p>Tell me stuff about my things!</p>
      <Form>
        <Label name="name">Name</Label>
        <TextField name="input" />
        <Submit>Save</Submit>
      </Form>
    </BlogLayout>
  )
}
```

```css
/* web/src/index.css */

button, input, label, textarea {
  display: block;
  outline: none;
}

label {
  margin-top: 1rem;
}

.error {
  color: red;
}

input.error, textarea.error {
  border: 1px solid red;
}
```

```javascript
// web/src/pages/ContactPage/ContactPage.js

const ContactPage = () => {
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <BlogLayout>
      <h1>Contact</h1>
      <p>Tell me stuff about my things!</p>

      <Form onSubmit={onSubmit}>
        <Label name="name">Name</Label>
        <TextField name="input" />
        <Submit>Save</Submit>
      </Form>
    </BlogLayout>
  )
}
```

```javascript
// web/src/pages/ContactPage/ContactPage.js

import {
  Form,
  Label,
  TextField,
  TextAreaField,
  Submit
} from '@redwoodjs/forms'
```

```javascript
// web/src/pages/ContactPage/ContactPage.js

<Form onSubmit={onSubmit}>
  <Label name="name">Name</Label>
  <TextField name="name" />

  <Label name="email">Email</Label>
  <TextField name="email" />

  <Label name="message">Message</Label>
  <TextAreaField name="message" />

  <Submit>Save</Submit>
</Form>
```

```javascript
// web/src/pages/ContactPage/ContactPage.js

<Form onSubmit={onSubmit}>
  <Label name="name">Name</Label>
  <TextField name="name" validation={{ required: true }} />

  <Label name="email">Email</Label>
  <TextField name="email" validation={{ required: true }} />

  <Label name="message">Message</Label>
  <TextAreaField name="message" validation={{ required: true }} />

  <Submit>Save</Submit>
</Form>
```

```javascript
// web/src/pages/ContactPage/ContactPage.js

import {
  Form,
  Label,
  TextField,
  TextAreaField,
  Submit,
  FieldError,
} from '@redwoodjs/forms'
```

```javascript
// web/src/pages/ContactPage/ContactPage.js

<Form onSubmit={onSubmit}>
  <Label name="name">Name</Label>
  <TextField name="name" validation={{ required: true }} />
  <FieldError name="name" />

  <Label name="email">Email</Label>
  <TextField name="email" validation={{ required: true }} />
  <FieldError name="email" />

  <Label name="message">Message</Label>
  <TextAreaField name="message" validation={{ required: true }} />
  <FieldError name="message" />

  <Submit>Save</Submit>
</Form>
```

```javascript
// web/src/pages/ContactPage/ContactPage.js

<Form onSubmit={onSubmit}>
  <Label name="name">Name</Label>
  <TextField name="name" validation={{ required: true }} />
  <FieldError name="name" className="error" />

  <Label name="email">Email</Label>
  <TextField name="email" validation={{ required: true }} />
  <FieldError name="email" className="error" />

  <Label name="message">Message</Label>
  <TextAreaField name="message" validation={{ required: true }} />
  <FieldError name="message" className="error" />

  <Submit>Save</Submit>
</Form>
```

```javascript
// web/src/pages/ContactPage/ContactPage.js

<Form onSubmit={onSubmit}>
  <Label name="name">Name</Label>
  <TextField name="name" validation={{ required: true }} errorClassName="error" />
  <FieldError name="name" className="error" />

  <Label name="email">Email</Label>
  <TextField name="email" validation={{ required: true }} errorClassName="error" />
  <FieldError name="email" className="error" />

  <Label name="message">Message</Label>
  <TextAreaField name="message" validation={{ required: true }} errorClassName="error" />
  <FieldError name="message" className="error" />

  <Submit>Save</Submit>
</Form>
```

```javascript
// web/src/pages/ContactPage/ContactPage.js

<Form onSubmit={onSubmit}>
  <Label name="name" errorClassName="error">Name</Label>
  <TextField name="name" validation={{ required: true }} errorClassName="error" />
  <FieldError name="name" className="error" />

  <Label name="email" errorClassName="error">Email</Label>
  <TextField name="email" validation={{ required: true }} errorClassName="error" />
  <FieldError name="email" className="error" />

  <Label name="message" errorClassName="error">Message</Label>
  <TextAreaField name="message" validation={{ required: true }} errorClassName="error" />
  <FieldError name="message" className="error" />

  <Submit>Save</Submit>
</Form>
```

```javascript
// web/src/pages/ContactPage/ContactPage.js

<TextField
  name="email"
  validation={{
    required: true,
    pattern: {
      value: /[^@]+@[^.]+\..+/,
    },
  }}
  errorClassName="error"
/>
```

```javascript
// web/src/pages/ContactPage/ContactPage.js

<TextField
  name="email"
  validation={{
    required: true,
    pattern: {
      value: /[^@]+@[^.]+\..+/,
      message: 'Please enter a valid email address',
    },
  }}
  errorClassName="error"
/>
```

```javascript
// web/src/pages/ContactPage/ContactPage.js

<Form onSubmit={onSubmit} validation={{ mode: 'onBlur' }}>
```