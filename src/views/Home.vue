<template>
  <div id="home" class="flickerBorder">
    <!-- Profil -->
    <section id="profil">
      <!-- H1 Title -->
      <h1 class="flickerText">Mayeul Croguennec</h1>

      <!-- Avatar and Links -->
      <aside>
        <figure>
          <img class="avatar" src="@/assets/img/avatar.png" alt="avatar">
        </figure>

        <div class="wrapper">
          <div class="icon">
            <a href="src/assets/img/mayeul_croguennec_cv.pdf" onclick="window.open(this.href); return false;">
            <div class="tooltip">Mon CV</div>
            <span><img src="@/assets/svg/cv.svg" alt="cv"></span>
              </a>
          </div>

          <div class="icon">
            <a href="mailto:ma.croguennec@orange.fr">
            <div class="tooltip">Email</div>
            <span><img src="@/assets/svg/mail.svg" alt="email"></span>
              </a>
          </div>

          <div class="icon">
            <a href="https://github.com/MayeulCROGUENNEC" onclick="window.open(this.href); return false;">
            <div class="tooltip">Linkedin</div>
            <span><img src="@/assets/svg/linkedin.svg" alt="linkedin"></span>
            </a>
          </div>

          <div class="icon">
            <a href="https://github.com/MayeulCROGUENNEC" onclick="window.open(this.href); return false;">
            <div class="tooltip">Github</div>
            <span><img src="@/assets/svg/github.svg" alt="github"></span>
            </a>
          </div>
        </div>
      </aside>

      <!-- Presentation -->
      <article class="presentation">
        <h2>Développeur Front-End</h2>
        <p>
          Bonjour je m’appelle Mayeul Croguennec. Je suis actuellement diplômé d’un bachelor web. Je recherche un CDI
          ou CDD en tant que dévelopeur web ou bien dévelopeur Front.
        </p>
      </article>

      <!-- Arrow down -->
      <a href="#" v-scroll-to="'#projects'" class="arrow-down flickerText">⇩</a>
    </section>

    <!-- Projects -->
    <section id="projects">
      <!-- Presentation -->
      <div class="presentation">
        <h2>Mes différents projets ici</h2>
        <p>Mon expertise au travers de mes projets.</p>
      </div>

      <!-- Projects -->
      <div class="projects">
        <Card
          v-for="(project, index) of projects"
          :key="index"
          :id="index"
          :project="project"
        />
      </div>
    </section>
  </div>
</template>

<script>
  import projects from "@/assets/database/projects"
  import Card from "@/components/Card"

  export default {
    name: "Home",
    components: {
      Card
    },
    data: () => ({
      projects
    })
  }
</script>

<style scoped>
  #home {
    border-width: 4px;
    border-radius: 4px;
    border-style: solid;
    padding: 0 2rem;
  }

  /* Presentation */
  .presentation p {
    font-size: 18px;
    line-height: 2.4rem;
    width: 65%;
    margin: 0 auto;
  }

  /*///////////////////////////
    Section profil
  ///////////////////////////*/
  #profil {
    height: calc(100vh - var(--base-space) - 4px);
    /* fullscreen - padding-top(main) - border(home) */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  /* Avatar */
  .avatar {
    width: 180px;
    height: 180px;
  }

  /* Arrow down */
  .arrow-down {
    font-size: 48px;
    padding: 2rem 0;
  }

  /* Buttons - Tooltips */
  .wrapper {
    display: inline-flex;
    flex-wrap: wrap;
    margin-top: 1.5rem;
  }
  .wrapper .icon {
    margin: 0 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;
  }
  .wrapper .icon span {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    background: #fff;
    border-radius: 50%;
    position: relative;
    z-index: 2;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.4);
  }
  .wrapper .icon .tooltip {
    position: absolute;
    top: 0;
    z-index: 9999 !important;
    background: #fff;
    color: #000;
    padding: 8px 15px;
    font-size: 18px;
    min-width: max-content;
    border-radius: 4px;
    opacity: 0;
    pointer-events: none;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    transition: 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  .wrapper .icon:hover .tooltip {
    top: 55px;
    opacity: 1;
    pointer-events: auto;
  }
  .wrapper .icon .tooltip:after {
    position: absolute;
    z-index: 0;
    content: "";
    height: 10px;
    width: 10px;
    background: #fff;
    left: 50%;
    top: -5px;
    transform: translateX(-50%) rotate(45deg);
    transition: 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  /*///////////////////////////
  Section Projects
  ///////////////////////////*/
  .projects {
    margin-top: 5rem;
    margin-bottom: 2rem;
    display: grid;
    column-gap: 1.5rem;
    row-gap: 1.5rem;
    grid-template-columns: repeat(4, 1fr);
  }


  @media only screen and (max-width: 600px) {
    h2 {
      font-size: 26px;
    }

    .presentation p {
      font-size: 12px;
      line-height: 2rem;
      width: 70%;
      margin: 0 auto;
    }

    .flickerText {
      font-size: 44px;
    }

    .avatar {
      width: 120px;
      height: 120px;
    }

    .wrapper .icon {
      margin: 0 8px;
    }

    .projects {
      column-gap: 1rem;
      row-gap: 1rem;
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>