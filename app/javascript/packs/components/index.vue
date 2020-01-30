<template>
  <div>
    <ul v-for="post in allPosts" :key="post.id">
      <li>タイトル: {{post.title}}</li>
      <li>内容: {{post.content}}</li>
    </ul>
  </div>
</template>

<script>
  import gql from 'graphql-tag'
  const POST_QUERY = gql`
  query allPost{
    allPosts{
      title
      content
    }
  }`

  export default {
    name: 'index',
    data() {
      return {
        allPosts: {}
      }
    },
    apollo: {
      allPosts: {
        query:POST_QUERY
      }
    }
  }
</script>