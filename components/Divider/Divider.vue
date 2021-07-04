<template lang="pug">
section(:class="$options.name")
	SlantTopDivider.mb-6
	.container
		.columns
			.column.is-4.is-offset-4
				.logoWrapper
					img.codesuitLogo(src="~/assets/img/codesuit-logo-white.svg")
					//- img.mrLogo(src="~/assets/img/mirko-rossbach-white.svg")
	SlantBottomDivider.SlantBottomDivider.mt-9
</template>

<script>
import SlantTopDivider from "~/assets/img/slant-top.svg?inline";
import SlantBottomDivider from "~/assets/img/slant-bottom.svg?inline";

export default {
	name: "CDivider",
	components: {
		SlantTopDivider,
		SlantBottomDivider,
	},
};
</script>

<style lang="scss" src="./Divider.scss"></style>
