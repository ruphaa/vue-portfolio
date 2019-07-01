<template>
  <section class="home">
    <h1>Ruphaa Ganesh<span>|</span></h1>
    <p>Web Developer | Open Source Enthusiast | JavaScript Evangelist</p>
    <div class="social-media">
      <div class="icon"><a href="https://twitter.com/ruphaaganesh" target="_blank"><i class="fa fa-twitter"></i></a></div>
      <div class="icon align-svg"><a href="https://dev.to/_ruphaa95" target="_blank"><svg class="svg-inline--fa fa-dev fa-w-14" title="DEV" aria-labelledby="svg-inline--fa-title-VhjHTnwpi2Z8" data-prefix="fab" data-icon="dev" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><title id="svg-inline--fa-title-VhjHTnwpi2Z8">DEV</title><path fill="currentColor" d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35 3.88-2.9 5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28l.01 70.93zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19l-.01 29.52zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58l-38.46 144.8z"></path></svg></a></div>
      <div class="icon"><a href="https://www.linkedin.com/in/ruphaa-ganesh-4a874412a/" target="_blank"><i class="fa fa-linkedin"></i></a></div>
      <div class="icon"><a href="https://github.com/ruphaa/" target="_blank"><i class="fa fa-github"></i></a></div>
      <div class="icon"><a href="mailto:ruphaaganesh@gmail.com"><i class="fa fa-envelope-o"></i></a></div>
      <div class="icon"><a href="https://codepen.io/ruphaa/" target="_blank"><i class="fa fa-codepen"></i></a></div>
    </div>
  </section>
</template>

<style>
  @import url('https://fonts.googleapis.com/css?family=Lovers+Quarrel');
  @import url('https://fonts.googleapis.com/css?family=Great+Vibes');
  @import url('https://fonts.googleapis.com/css?family=Mrs+Saint+Delafield');
  @import url('https://fonts.googleapis.com/css?family=Josefin+Sans');
  
  .home {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
  }
  .home h1 {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 7rem;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    width: 70rem;
    color: var(--primary-pink-color);
    animation: type 2s steps(60, end);
    margin-bottom: 5rem;
  }

  .home h1 span {
    font-size: 80px;
    animation: blink 1s infinite;
  }
  .home p{
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    color: var(--dark-grey-color);
  }

  .social-media {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }
  .icon {
    margin-right: 20px;
  }
  .icon svg {
    width: 3rem;
    height: 3rem;
    /* vertical-align: bottom; */
  }

  .icon.align-svg {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-top: 4px;
  }

  .icon a {
    font-size: 4rem;
    color: var(--dark-grey-color);
  }
  .icon a:hover {
    color: var(--light-grey-color);
  }
  @keyframes type {
    from {
      width: 0;
    }
  }
  @keyframes blink {
    to {
      opacity: .0;
    }
  }
  @media only screen and (max-width: 1000px) {
    .home p {
      font-size: 2.5rem;
      line-height: 25px;
    }
  }
</style>

