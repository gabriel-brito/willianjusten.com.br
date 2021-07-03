import { useEffect } from 'react'
import Link from 'next/link'

import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-markdown'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-yaml'

import SEO from 'components/Seo'
// import RecommendedPosts from '../components/RecommendedPosts'

import { timeToRead } from 'lib/utils'
import {
  PostHeader,
  PostTitle,
  PostDescription,
  PostDate,
  MainContent,
  ButtonBack
} from '../styles/base'

const BlogPost = ({ post }) => {
  // const next = props.pageContext.next
  // const previous = props.pageContext.previous

  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={`https://willianjusten.com.br${post.frontmatter.image}`}
      />
      <PostHeader>
        <Link href="/" passHref>
          <ButtonBack>← Voltar na listagem</ButtonBack>
        </Link>

        <PostDate>
          {post.frontmatter.date} • {timeToRead(post.content)}
        </PostDate>
        <PostTitle>{post.frontmatter.title}</PostTitle>
        <PostDescription>{post.frontmatter.description}</PostDescription>
      </PostHeader>
      <MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </MainContent>
      {/* <RecommendedPosts next={next} previous={previous} /> */}
    </>
  )
}

export default BlogPost
