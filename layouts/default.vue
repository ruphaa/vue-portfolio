<template>
  <div class="wrapper">
    <div class="navbar">
      <ul>
        <li><nuxt-link class="nav-link" to="/">Home</nuxt-link></li>
        <li><nuxt-link class="nav-link" to="/projects">Projects</nuxt-link></li>
        <li><nuxt-link class="nav-link" to="/blog">Blog</nuxt-link></li>
        <li><nuxt-link class="nav-link" to="/about">About</nuxt-link></li>
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
  html {
      font-size: 10px;
  }

  body {
      box-sizing: border-box;
      height: 100vh;
      /* font-family: 'Montserrat', sans-serif; */
      /* font-family: 'Lato', sans-serif; */
      font-family: 'Josefin Sans', sans-serif;
      /* font-family: 'BenchNine', sans-serif; */
      color: #546e7a;
      background-color: #F5F7FA;
      /* background-color: #000; */
      /* color: lime; */
  }

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  ::selection {
    /* background-color: #f8bbd0; */
    background-color: #fce4ec;
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
    color: #546e7a;
    /* color: lime; */
    margin-right: 20px;
  }
  .navbar ul li a {
    text-decoration: none;
    color: #585a5c;
    /* color: lime; */
  }

  .navbar ul li a:hover {
    color: #9CA8AE;
  }

  .container {
    /* height: auto; */
    height: 80vh;
    /* display: flex;
    justify-content: center;
    align-items: center; */
    /* align-content: center; */
  }

</style>

