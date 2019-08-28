<template>
  <div class="post">
    <div class="post__title">
      <h1>{{title}}</h1>
      <div class="external-link">
          This article is also posted in - 
          <div>
              Dev - <a :href="link">{{title}}</a>
          </div>
      </div>
    </div>
    <div class="post__content" v-html="fileContent.html"></div>
  </div>
</template>

<script>
  export default {
    async asyncData({ params }) {
        const fileContent = await import(`~/content/${params.slug}.md`);
        const attr = fileContent.attributes;
        return {
          title: attr.title,
          link: attr.link,
          fileContent
        }
    }
  }
  </script>

  <style>
    .post {
        margin-top: 50px;
        margin: 50px 20px 0 20px;
    }

    .post__title h1{
        line-height: 1.4;
        font-weight: 800;
        font-size: 40px;
        color: var(--primary-pink-color);
    }
    .external-link {
        margin-top: 2rem;
        font-size: 1.7rem;
        margin-bottom: 4rem;
    }
    .external-link div {
        margin-top: 0.5rem;
        margin-left: 2rem;
    }
    .post__content {
        margin-top: 2rem;
        font-size: 2rem;
        margin-bottom: 5rem;
        border-bottom: 1px solid var(--very-light-grey-color);
    }

    .post__title .external-link, .post__content p{
        margin-bottom: 1.5rem;
        line-height: 1.3;
    }
    .post__content h1{
        font-size: 3rem;
        margin-top: 3rem;
        margin-bottom: 1.5rem;
        display: inline-block;
        background: linear-gradient(180deg,rgba(255,255,255,0) 50%,var(--mark-pink-color) 50%);
    }

    .post__content h2{
        font-size: 2.3rem;
        margin-top: 2rem;
        margin-bottom: 1.5rem;
        display: inline-block;
    }
    .post__content h3{
        font-size: 2rem;
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
        display: inline-block;
    }

    .post__content p{
        margin-bottom: 2.5rem;
        margin-top: 1.6rem;
    }

    .external-link a, .post__content a {
        text-decoration: none;
        color: var(--primary-pink-color);
        font-weight: 700;
        background-image: linear-gradient(var(--mark-pink-color),var(--primary-pink-color));
        background-size: 100% 0.45em;
        background-repeat: no-repeat;
        background-position: left 0 bottom -40%;
    }

    .post__content ul{
        list-style: none;
        margin-left: 2rem;
        margin-top: 1rem;
    }

    .post__content ul li {
        margin-top: 0.5rem;
        line-height: 1.3;
    }

    .post__content ul li code, .post__content p code {
        background-color: #f8bbd070;
    }

    .post__content ul li:before {
        content: '✔️';
        width: 5px;
        font-size: 1.4rem;
        color: var(--primary-pink-color);
    }

    .post__content blockquote {
        border-left: .4rem solid var(--primary-pink-color);
        margin-left: 0;
        padding-left: 1.25rem;
        font-style: italic;
        font-size: 1.56rem;
    }

    .post__content pre {
        margin: 0 0 1.45rem;
        font-size: 1.5rem;
        line-height: 1.42;
        background: rgba(0,0,0,.04);
        border-radius: 3px;
        overflow: auto;
        word-wrap: normal;
        padding-left: 15px;
        padding-top: 15px;
        padding-bottom: 15px;
    }

    .post__content img {
        display: block;
        margin: auto;
        max-width: 75%;
    }

    .post__content strong {
        font-weight: 800;
    }
  </style>