<template>
  <div id="project" class="flickerBorder">
    <section class="project">

    </section>
    <p>je suce des gros projet</p>
  </div>
</template>

<script>
export default {
name: "Project"
}
</script>

<style scoped>
  #project {
    border-width: 4px;
    border-radius: 4px;
    border-style: solid;
    padding: 0 2rem;
  }

  .project {
    height: calc(100vh - (var(--base-space)*2) - 8px);
    /* fullscreen - padding-top and bottom(main) - border(home) */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }


</style>