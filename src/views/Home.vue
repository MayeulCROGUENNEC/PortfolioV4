<template>
  <div id="home">
    <section id="bigcontainer">
     <section class="profil">
      <h1>Mayeul Croguennec</h1>
      <figure>
        <img class="avatata" src="@/assets/img/avatar.png" alt="avatar">
      </figure>
      <div class="wrapper">
        <div class="icon facebook">
          <div class="tooltip">Mon cv</div>
          <span><i class="fab fa-facebook-f"><img src="@/assets/svg/cv.svg" alt="cv logo"></i></span>
        </div>

        <div class="icon twitter">
          <div class="tooltip">Mon Mail</div>
          <span><i class="fab fa-twitter"><img src="@/assets/svg/mail.svg" alt="mail logo"></i></span>
        </div>

        <div class="icon instagram">
          <div class="tooltip">Mon linkedin</div>
          <span><i class="fab fa-instagram"><img src="@/assets/svg/linkedin.svg" alt="linkedin logo"></i></span>
        </div>

        <div class="icon github">
          <div class="tooltip">Mon Github</div>
          <span><i class="fab fa-github"><img src="@/assets/svg/github.svg" alt="github logo"></i></span>
        </div>
      </div>

       <div class="txtprez">
         <p>
        Bonjour je m’appelle Mayeul Croguennec.
        <br>
        <br>
        Je suis actuellement diplômé d’un bachelor web.
        <br>
        <br>
        Je recherche un CDI ou CDD en tant que dévelopeur web ou bien dévelopeur Front.
       </p>
       </div>

      <span class="arrow-down">
        ⇩
      </span>

    </section>
     <section class="projects">
       <h2>Mes différents projets ici</h2>
       <p class="txtprez">
         Mon expertise au travers de mes projets.
       </p>
     </section>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>
#home{
  background: #000000;
  padding-top: 2.5%;
  padding-left: 2.5%;
  padding-right: 2.5%;
}
#bigcontainer{
  border: 3px solid #9BCD39;
}

.profil {
  height: 100vh;
}
.avatata {
  width: 198px;
  height: 198px;
  margin-top: 7%;
}

.wrapper{
  display: inline-flex;
  margin-top: 2.5%;
}


.wrapper .icon{
  margin: 0 20px;
  text-align: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  z-index: 2;
  transition: 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .icon span{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  background: #fff;
  color: #000;
  border-radius: 50%;
  position: relative;
  z-index: 2;
  box-shadow: 0px 10px 10px rgba(0,0,0,0.4);
  transition: 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .icon span i{
  line-height: 60px;
  font-size: 30px;
}

.wrapper .icon .tooltip{
  position: absolute;
  top: 0;
  z-index: 1;
  background: #fff;
  color: #000;
  padding: 10px 18px;
  font-size: 20px;
  font-weight: 500;
  border-radius: 25px;
  opacity: 0;
  pointer-events: none;
  box-shadow: 0px 10px 10px rgba(0,0,0,0.1);
  transition: 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .icon:hover .tooltip{
  top: -70px;
  opacity: 1;
  pointer-events: auto;
}

.icon .tooltip:before{
  position: absolute;
  content: "";
  height: 15px;
  width: 15px;
  background: #fff;
  left: 50%;
  bottom: -6px;
  transform: translateX(-50%) rotate(45deg);
  transition: 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .icon:hover span{
  color: #000;
}

.wrapper .icon:hover span,
.wrapper .icon:hover .tooltip{
  text-shadow: 0px -1px 0px rgba(0,0,0,0.4);
}

.wrapper .facebook:hover span,
.wrapper .facebook:hover .tooltip,
.wrapper .facebook:hover .tooltip:before {
  background: #fff;
}

.wrapper .twitter:hover span,
.wrapper .twitter:hover .tooltip,
.wrapper .twitter:hover .tooltip:before {
  background: #fff;
}

.wrapper .instagram:hover span,
.wrapper .instagram:hover .tooltip,
.wrapper .instagram:hover .tooltip:before {
  background: #fff;
}

.wrapper .github:hover span,
.wrapper .github:hover .tooltip,
.wrapper .github:hover .tooltip:before {
  background: #fff;
}

.wrapper .youtube:hover span,
.wrapper .youtube:hover .tooltip,
.wrapper .youtube:hover .tooltip:before {
  background: #fff;
}

.wrapper .linkedin:hover span,
.wrapper .linkedin:hover .tooltip,
.wrapper .linkedin:hover .tooltip:before {
  background: #fff;
}

.txtprez {
  font-family: "roboto-regular";
  font-size: 18px;
  margin-top: 4%;
}

.arrow-down {
  display: inline-block;
  margin-top: 5% !important;
}

.projects {
  height: 100vh;
}


</style>