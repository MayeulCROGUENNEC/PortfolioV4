<template>
  <router-link tag="div" class="card" :to="`/projects/${id}`">
    <span class="number">#{{ id }}</span>

    <figure>
      <img :src="require(`@/assets/img/projects/${project.img}`)"  alt="project" >
      <figcaption>{{ project.name }}</figcaption>
    </figure>

    <div id="chips">
      <span class="chips" v-for="(category, index) of project.categories" :key="index">
        #{{ category }}
      </span>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true
    },
    project: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
  .card {
    cursor: pointer;
    position: relative;
    padding: 1.2rem;
    background: var(--secondary-color);
    border-radius: 4px;
  }
  .card .number {
    z-index: 1;
    position: absolute;
    letter-spacing: 2px;
    left: 5px;
    top: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    padding: 5px 20px;
    background: rgba(0,0,0,.9);
    color: white;
    font-size: 1.5rem;
    border-radius: 100px;
  }
  .card img {
    display: block;
    width: 100%;
    transition: all 250ms ease-in-out;
  }
  .card figure {
    overflow: hidden;
    border-radius: 4px 4px 12px 12px;
    position: relative;
  }
  .card figcaption {
    width: 100%;
    padding: 15px 0;
    font-size: 14px;
    background: rgba(0,0,0,.9);
    position: absolute;
    bottom: 0;
  }
  .card:hover img {
    filter: blur(5px);
  }
  .card #chips {
    padding-top: 1.2rem;
    display: flex;
    flex-wrap: wrap;
  }
  .card .chips {
    padding: 4px 12px;
    margin: 2px;
    background: white;
    border-radius: 100px;
    color: var(--primary-color)
  }

</style>