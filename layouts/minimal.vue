<template lang="pug">
.LMinimal
	Header
	Nuxt
	Contact
	Footer
</template>

<script>
export default {
  name: "LMinimal",
  data() {
    return {
      hasLoaded: false
    };
  },
  methods: {
    loaderCallback(value) {
      this.hasLoaded = value;
    }
  }
};
</script>

<style lang="scss">
.LMinimal {
  position: relative;
  overflow-x: hidden;
  .CFooter .slantTopDivider path {
    fill: white;
  }
}
</style>
