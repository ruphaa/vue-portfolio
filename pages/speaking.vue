<template>
    <section class="blog">
        <h1>Speaking</h1>
        <div class="blog-container">
            <ul class="conference-list">
                <li class="conference">
                    <div class="conference__title">
                        VueBLR #15 - Atomic Design using VUE
                    </div>
                    <div class="conference__time">
                        <i class="fa fa-calendar"></i>
                        <time>Jun 22, 2019</time>
                    </div>
                    <div class="conference__location">
                        <i class="fa fa-map-marker"></i>
                        <span>Bangalore, India</span>
                    </div>
                    <div class="conference__slides">
                        <i class="fa fa-file-powerpoint-o"></i>
                        <span class="link"><a href="https://slides.com/ruphaaganesh/deck-475da59f-b464-4070-b526-0b00bb81bd5d/fullscreen" target="_blank">Slides</a></span>
                    </div>
                    <div class="conference__video">
                        <i class="fa fa-caret-square-o-right"></i>
                        <span class="link"><a href="https://www.youtube.com/watch?v=duaDIM3dJH8" target="_blank">Watch the video</a></span>
                    </div>
                </li>
                <li class="conference">
                    <div class="conference__title">
                        Frontend DevHours - Flex your layout muscle
                    </div>
                    <div class="conference__time">
                        <i class="fa fa-calendar"></i>
                        <time>Feb 15, 2019</time>
                    </div>
                    <div class="conference__location">
                        <i class="fa fa-map-marker"></i>
                        <span>Chennai, India</span>
                    </div>
                    <div class="conference__slides">
                        <i class="fa fa-file-powerpoint-o"></i>
                        <span class="link"><a href="http://bit.ly/devhour-flexbox" target="_blank">Slides</a></span>
                    </div>
                </li>
                <li class="conference">
                    <div class="conference__title">
                        Frontend Syncup - It's time to Ember Up
                    </div>
                    <div class="conference__time">
                        <i class="fa fa-calendar"></i>
                        <time>May 30, 2019</time>
                    </div>
                    <div class="conference__location">
                        <i class="fa fa-map-marker"></i>
                        <span>Chennai, India</span>
                    </div>
                    <div class="conference__slides">
                        <i class="fa fa-file-powerpoint-o"></i>
                        <span class="link"><a href="https://slides.com/ruphaaganesh/ember-intro/fullscreen" target="_blank">Slides</a></span>
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
    ul.conference-list {
            list-style: none;
            width: 80%;
            margin-left: 20px;
    }
     li.conference {
        padding: 1em 0;
        margin: 0 0 2em;
        padding-top: 2rem;
        border-top: 1px solid var(--very-light-grey-color);
        font-size: 1.6rem;
    }
     li.conference:nth-of-type(1) {
        border-top: transparent;
    }
    .conference .conference__title {
        font-size: 3rem;
        color: var(--primary-pink-color);
        font-weight: 600;
        margin-bottom: 2rem;
    }
    .conference .conference__time {
        margin-left: 0.5rem;
        margin-bottom: 1rem;
    }
    .conference .conference__location {
        margin-left: 0.5rem;
        margin-bottom: 1rem;
    }
    .conference .conference__slides {
        margin-left: 0.5rem;
        margin-bottom: 1rem;
    }
    .conference .conference__video {
        margin-left: 0.5rem;
        margin-bottom: 1rem;
    }
    .link {
        border-bottom: 3px solid var(--primary-pink-color);
    }
    .conference span a {
        text-decoration: none;
        color: var(--primary-font-color);
    }
  @media only screen and (max-width: 1000px) {
      ul.conference-list  {
        margin-left: 0;
        width: 100%;
      }
      li.conference {
          font-size: 2rem;
      }
  }
</style>
