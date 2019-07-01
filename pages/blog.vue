<template>
    <section class="blog">
        <h1>Blog</h1>
        <div class="blog-container">
            <ul class="blog-list">
                <li class="post">
                    <div class="post-meta">
                        <time>Jan 5, 2019 -</time>
                        <span class="post-host"> Dev.to</span>
                    </div>
                    <div class="post-title">
                        <a href="https://dev.to/_ruphaa95/everything-about-event-handlers-and-event-propagation-47a8" class="post-link" target="_blank">Everything about Event Handlers and Event Propagation</a>
                    </div>
                    <div class="post-tags">
                        #JavaScript
                    </div>
                </li>
                <li class="post">
                    <div class="post-meta">
                        <time>Feb 1, 2019 -</time>
                        <span class="post-host">  Dev.to</span>
                    </div>
                    <div class="post-title">
                        <a href="https://dev.to/_ruphaa95/2018-year-in-review-584p" class="post-link" target="_blank">2018: Year in Review</a>
                    </div>
                    <div class="post-tags">
                        #Career
                    </div>
                </li>
                <li class="post">
                    <div class="post-meta">
                        <time>Apr 21, 2019 -</time>
                        <span class="post-host">  Dev.to</span>
                    </div>
                    <div class="post-title">
                        <a href="https://dev.to/ruphaa/css-subgrid-level-2-of-css-grid-1na0" class="post-link" target="_blank">CSS Subgrid — Level 2 of CSS Grid</a>
                    </div>
                    <div class="post-tags">
                        #CSS
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    
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
        color: var(--primary-pink-color);
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
