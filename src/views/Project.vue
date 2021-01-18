<template>
  <div id="project" class="flickerBorder">
    <div>
      <router-link to="/home" class="left-down flickerText">
        &#8592;
      </router-link>
    </div>
    <section class="project">
      <h1 class="flickerText"> {{ project.name }} </h1>
      <div class="container">
        <figure>
          <div class="jajjj" :style="{ backgroundImage: `url(${require('@/assets/img/projects/'+project.img)}` }">
          </div>
          <a class="telmemore" :href="project.link" onclick="window.open(this.href); return false;">
            Voir plus !
          </a>
        </figure>

        <div class="rpart">
          <aside class="langage">
            {{ project.tools }}
          </aside>
          <div class="description">
            {{ project.description }}
          </div>
          <div class="sacachips">
            <span
              class="chips"
              v-for="(category, index) in project.categories"
              :key="index"
            >
               {{ category }}
            </span>
          </div>
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

  .jajjj {
    height: 500px;
    width: 500px;
  }

  .project {
    height: calc(100vh - (var(--base-space)*2) - 8px);
    /* fullscreen - padding-top and bottom(main) - border(home) */

  }

  .container {
    display: flex;
    justify-content: space-around;
    text-align: left;
    width: 60%;
    margin-left: 20%;
    margin-top: 5%;
  }

  .rpart {
    margin-left: 20%;
  }

  .langage {
    color: var(--secondary-color);
    font-size: 12px;
    font-family: "roboto-medium";
  }

  .description {
    font-size: 18px;
    line-height: 1.5em;
    margin-top: 3%;
  }

  .sacachips {
    margin-top: 10px;
    display: flex;
  }
  .chips {
    font-size: 12px;
    border-radius: 100px;
    background-color: #fff;
    border: 2px solid var(--secondary-color);
    margin-right: 10px;
    color: var(--primary-color);
    padding: 4px 15px;
    display: flex;
  }

  .telmemore {
    font-size: 18px;
    margin-top: 5%;
  }
  .left-down {
    font-size: 48px;
    padding: 2rem 0;
    position: absolute;
    left: 80px;
  }


  @media only screen and (max-width: 600px) {
    .jajjj {
      height: 100px;
      width: 100px;
      margin-top: 50px;
    }

    .container {
      width: 80%;
      margin-left: 4%;

    }

    .flickerText {
      font-size: 44px;

    }

    .description {
      font-size: 12px;
      line-height: 1em;
      margin-top: 3%;
      width: 110px;
    }
    .rpart {
      text-align: center;
    }
    .sacachips {
      margin-top: 8px;
    }
    .chips {
      font-size: 8px;
      border-radius: 100px;
      background-color: #fff;
      border: 2px solid var(--secondary-color);
      margin-right: 5px;
      color: var(--primary-color);
      padding: 2px 5px;
    }


  }

</style>