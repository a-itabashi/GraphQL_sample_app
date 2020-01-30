<template>
  <div>
    <div>
      <input type="text" v-model="title" placeholder="title">
    </div>
    <div>
      <textarea type="text" v-model="content" placeholder="content"></textarea>
    </div>
    <button @click="createPost()">Submit</button>
  </div>
</template>

<script>
  import gql from 'graphql-tag'
  const POST_QUERY = gql`
  mutation createPost($title: String!, $content: String!) {
    createPost(title: $title, content: $content) {
      post{
        id
        title
        content
      }
    }
  }
  `

  export default {
    name: 'createPost',
    data() {
      return {
        title: '',
        content: '',
      }
    },
    methods: {
      createPost(){
        const { title, content } = this.$data
        this.$apollo.mutate({
          mutation: POST_QUERY,
          variables: {
            title,
            content
          }
        })
      }
    },
  }
</script>