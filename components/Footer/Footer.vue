<template lang="pug">
div(:class="$options.name")
	SlantTopDivider.slantTopDivider
	footer
		.container
			.footerInner
				a(href="/").logo-wrapper
					img(src="~/assets/img/codesuit-logo-white.svg")
				.heart-wrapper
					p mit&nbsp;
						|
						span ❤
						| &nbsp;erstellt
				.menu-wrapper
					ul.menu-list
						li.menu-item
							nuxt-link.item-link(to="/impressum", exact) Impressum
						li.menu-item
							nuxt-link.item-link(to="/datenschutz", exact) Datenschutzerklärung
</template>

<script>
import SlantTopDivider from "~/assets/img/slant-top.svg?inline";

export default {
	name: "CFooter",
	components: {
		SlantTopDivider
	}
};
</script>

<style lang="scss" src="./Footer.scss"></style>
