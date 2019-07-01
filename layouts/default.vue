<template>
  <div class="wrapper">
    <div class="navbar">
      <ul>
        <li><nuxt-link class="nav-link" to="/">Home</nuxt-link></li>
        <li><nuxt-link class="nav-link" to="/projects">Projects</nuxt-link></li>
        <li><nuxt-link class="nav-link" to="/blog">Blog</nuxt-link></li>
        <li><nuxt-link class="nav-link" to="/speaking">Speaking</nuxt-link></li>
        <li><nuxt-link class="nav-link" to="/about">About</nuxt-link></li>
        <li>
          <div class="theme_switcher"></div>
        </li>
      </ul>
    </div>
    <div class="container">
      <nuxt/>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isActive: false
    };
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Montserrat');
  @import url('https://fonts.googleapis.com/css?family=Lato:700');
  @import url('https://fonts.googleapis.com/css?family=Josefin+Sans');
  /* @import url('https://fonts.googleapis.com/css?family=BenchNine'); */

  :root {
    --primary-font-color: #546e7a;
    --primary-pink-color: #F47895;
    --background-color: #F5F7FA;
    --highlight-color: #fce4ec;
    --dark-grey-color: #585a5c;
    --light-grey-color: #9CA8AE;
    --very-light-grey-color: #d8d8d8;
    --white-color: #FFFFFF;
    --normal-grey-color: #999;
    --lightest-grey-color: #EAF1F6;
    --mark-pink-color: #f8bbd0;
  }

  [data-theme="dark"] {
    --background-color: #16141A;
  }

  html {
      font-size: 10px;
  }

  body {
      box-sizing: border-box;
      height: 100vh;
      font-family: 'Josefin Sans', sans-serif;
      color: var(--primary-font-color);
      background-color: var(--background-color);
  }

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  ::selection {
    background-color: var(--highlight-color);
  }
  .wrapper {
      padding: 4rem 5rem;
  }

  .navbar ul {
    list-style: none;
    font-size: 2rem;
    display: flex;
    justify-content: flex-end;
  }
  .navbar ul li {
    text-transform: uppercase;
    font-size: 1.4rem;
    line-height: 15.04px;
    font-weight: 700;
    color: var(--primary-font-color);
    margin-right: 20px;
  }
  .navbar ul li a {
    text-decoration: none;
    color: var(--dark-grey-color);
  }

  a.nuxt-link-exact-active {
    color: var(--light-grey-color) !important;
  }

  .navbar ul li a:hover {
    color: var(--light-grey-color);
  }

  .container {
    height: 80vh;
  }
  @media only screen and (max-width: 1000px) {
    html {
      font-size: 6px;
    }
    .navbar ul {
      justify-content: center;
      align-items: center;
    }
    .navbar ul li {
      font-size: 1.8rem;
    }
    .navbar ul li:last-child {
      margin-right: 0;
    }
  }

</style>

