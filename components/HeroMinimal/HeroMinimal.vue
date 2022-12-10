<template lang="pug">
#hero(:class="$options.name")
	.container
		.columns
			.column
			.column(:class="getBoxWidth")
				.infoBox
					h1.title {{ title }}
	SlantBottomDivider.triangleDivider
</template>

<script>
import SlantBottomDivider from "~/assets/img/slant-bottom.svg?inline";

export default {
	name: "CHeroMinimal",
	components: { SlantBottomDivider },
	props: {
		title: {
			type: String,
			required: true,
		},
		boxWidth: {
			type: Number,
			default: 6
		},
	},
	computed: {
      getBoxWidth(){
        return 'is-' + this.$props.boxWidth;
      }
    },
};
</script>

<style lang="scss" src="./HeroMinimal.scss"></style>
