<template>
  <div id="app">
    <!-- Main -->
    <main>
      <transition
          name="fade"
          mode="out-in"
          @beforeLeave="beforeLeave"
          @enter="enter"
          @afterEnter="afterEnter"
        >
        <router-view/>
      </transition>
    </main>

    <!-- Footer -->
    <Footer/>
  </div>
</template>

<script>
import Footer from "@/components/Footer";

export default {
  name: 'App',
  components: {
    Footer
  },
  data() {
    return {
      prevHeight: 0,
    };
  },
  methods: {
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = 'auto';
    },
  },
}
</script>

<style>
/* Page transition */
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-timing-function: ease;
  transition-property: height, opacity;
  overflow: hidden;
}
.fade-enter,
.fade-leave-active {
  opacity: 0
}

#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background: var(--primary-color);
  font-family: "roboto-regular", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #fff;
}
main {
  padding: var(--base-space);
  flex: 1 0 auto;
}
</style>
