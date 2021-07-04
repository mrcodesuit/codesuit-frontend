<template lang="pug">
#hero(:class="$options.name")
	.container
		.columns
			.column.is-3.is-offset-3
			.column.is-6
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
	},
};
</script>

<style lang="scss" src="./HeroMinimal.scss"></style>
