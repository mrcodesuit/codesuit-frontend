<template lang="pug">
#hero(:class="$options.name")
	.container
		.columns
			.column.is-3.is-offset-3
				.subTitleWrapper
					p
						span Kreativ
						| und Modern
			.column.is-6
				.infoBox
					h1.title Webdesign & Webentwicklung
						span aus Köln
	img.triangleDivider(src="~/assets/img/slant-bottom.svg")
</template>

<script>
export default {
	name: "CHero2"
};
</script>

<style lang="scss" src="./Hero2.scss"></style>
