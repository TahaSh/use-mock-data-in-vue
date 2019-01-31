<template>
  <div class="home">
    <span v-if="loading">Loading…</span>
    <ul
      v-else
      class="posts"
    >
      <li
        v-for="post in posts"
        :key="post.title"
        class="post-item"
      >
          <h1>{{ post.title }}</h1>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false
    }
  },

  computed: {
    posts () {
      return this.$store.state.posts
    }
  },

  created () {
    this.loading = true
    this.$store.dispatch('fetchPosts')
      .then(posts => {
        this.loading = false
      })
  }
}
</script>

<style scoped>
.posts {
  list-style: none;
  text-align: left;
}

.post-item + .post-item {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
