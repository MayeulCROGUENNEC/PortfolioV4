<template>
  <footer>
    <div>
      <p>@ 2020 - Mayeul Croguennec</p>
      <span class="space"></span>
      <router-link to="/disclamer">Mentions légales</router-link>
    </div>

    <div>
      <a href="#" v-scroll-to="'#app'">Mon profil</a>
      <span class="space"></span>
      <a href="#" v-scroll-to="'#projects'">Mes projets</a>
    </div>
  </footer>
</template>


<style scoped>
  footer {
    padding: 1rem 0;
    background: var(--secondary-color);
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    font-size: 1.2rem;
  }

  div {
    padding: 0 var(--base-space);
  }

  p, a {
    padding: 0.5rem 0;
    display: inline-block;
  }

  a {
    position: relative;
  }
  a:after {
    transition: all 200ms ease-in-out;
    background: var(--primary-color);
    height: 1px;
    width: 0;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 100px;
    bottom: 0;
    content: '';
  }
  a:hover:after {
    width: 100%;
  }

  .space {
    margin: 0 15px;
  }
</style>