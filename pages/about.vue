<template>
    <section class="about">
        <h1>Hi! I'm Ruphaa 😀</h1>
        <div class="desc">
            <p>I'm a <mark>Frontend Engineer</mark>, currently working with India's Hottest Startup , Freshworks.</p>
            <p>I specialise in Frontend Development and design systems. I ❤️ all things about <mark>web</mark>. I am super passionate about learning and building stuff. Thirst for learning more in me will never settle.</p>
            <p>While I’m not coding, you can find me doing yoga or dance or watching Friends on Netflix may be for the zillionth time 😅</p>
            <p>The Quote that drives me to work hard and never quit - <mark>"Shoot for the moon. Even if you miss, you'll land among the stars.”</mark></p>
        </div>    
        <div class="current_stack">
            <p>My current stack of languages/technologies</p>
            <div class="tech">
                HTML5, CSS3, JavaScript, VUEJS, Firebase, Nuxt, NodeJS, Ruby on Rails,
SASS
            </div>
        </div>    
    </section>
</template>

<script>
export default {
    
}
</script>

<style>
    .about {
        margin-top: 50px;
        margin-left: 50px;
    }
    .about h1 {
        font-size: 40px;
    }
    .desc {
        margin-top: 5rem;
    }
    .about p {
        text-align: center;
        font-size: 2.3rem;
        line-height: 5rem;
    }
    mark {
        background-color: var(--mark-pink-color);
    }
    .current_stack {
        margin-top: 2rem;
    }
    .current_stack .tech {
        display: flex;
        justify-content: center;
        font-size: 2.1rem;
        margin-top: 2rem;
        font-weight: 700;
        color: var(--primary-pink-color);
    }
  @media only screen and (max-width: 1000px) {
      .about {
        margin-left: 0;
      }
      .about h1 {
        text-align: center;
      }
      .current_stack {
        margin-top: 3.5rem;
      }
      .current_stack .tech{
        text-align: center;
        line-height: 3rem;
      }
  }
</style>
