<template>
    <section class="blog">
        <h1>Blog</h1>
        <div class="blog-container">
            <ul class="blog-list">
                <li class="post" v-for="post in posts" :key="post.attributes.title">
                    <div class="post-title">
                        <nuxt-link :to="{path: 'blog/'+post.attributes.name}" class="post-link">{{post.attributes.title}}</nuxt-link>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
  export default {
    async asyncData() {
      const resolve = require.context("~/content/", true, /\.md$/)
      const imports = resolve.keys().map((key) => {
        const [, name] = key.match(/\/(.+)\.md$/);
        return resolve(key);
      });
      return {
        posts: imports
      }
    },
  }
</script>

<style>
    .blog {
        margin-top: 50px;
        margin: 50px 20px 0 20px;
    }
    .blog h1 {
        font-size: 36px;
        font-weight: 800;
    }
    .blog .blog-container {
        margin-top: 30px;
        margin-bottom: 50px;
    }
    ul.blog-list {
        list-style: none;
        width: 80%;
        margin-left: 20px;
    }
    li.post {
        padding: 1em 0;
        margin: 0 0 2em;
        padding-top: 2rem;
        border-top: 1px solid var(--very-light-grey-color);
    }
    li.post:nth-of-type(1) {
        border-top: transparent;
    }
    .post .post-meta {
        margin-bottom: 1rem;
        font-size: 15px;
    }
    .post-meta .post-host {
        font-weight: 800;
        color: var(--dark-grey-color);
        font-size: 16px;
    }
    .post .post-title {
        line-height: 1.4;
        font-weight: 800;
        font-size: 25px;
    }
    .post .post-title a {
        text-decoration: none;
        color: var(--primary-font-color);
        border-bottom: 2px dotted var(--primary-pink-color);
    } 

    .post .post-title a:hover {
        border: 2px dashed var(--primary-pink-color);
    }

    .post .post-tags {
        margin-top: 1rem;
        font-size: 15px;
    }
  @media only screen and (max-width: 1000px) {
      ul.blog-list {
        margin-left: 0;
        width: 100%;    
      }
      .post .post-title {
        font-size: 3rem;
      }
  }
</style>