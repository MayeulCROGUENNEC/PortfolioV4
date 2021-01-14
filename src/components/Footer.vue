<template>
 <footer>
   <div class="news_bottom">
       <p id="gauche">@ 2020 - Mayeul Croguennec</p>
       <p id="milieu_gauche">Mentions légales</p>
       <p id="milieu_droite">Mon profil</p>
       <p id="droite">Mes projets</p>
   </div>
 </footer>
</template>



<style scoped>
footer{
  background: none;
  height: 40px;
}
p {
  font-family: "roboto-regular";
  font-size: 14px;
  color: var(--secondary-color);
}

#gauche, #milieu_gauche, #milieu_droite, #droite {
  margin-top: 12px;
  display: inline-block;
  vertical-align: top;
  width: 23%;
}
</style>s