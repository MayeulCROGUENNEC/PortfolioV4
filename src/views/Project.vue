<template>
  <div id="project" class="flickerBorder">
    <section class="project">
      <figure>
        <img src="@/assets/img/projects/dogup.png" alt="projet">
      </figure>

      <div>
        <aside>
          {{ project }}
        </aside>

        <p>{{ project.text }}</p>
x`
        <div class="chips">
          <span
            class="chips"
            v-for="(category, index) in project.categories"
            :key="index"
          >
            {{ category }}
          </span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Project",
  props: {
    project: {
      type: Object,
      required: true
    }
  }
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
    align-items: center;
    justify-content: space-between;
  }

</style>