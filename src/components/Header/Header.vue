<template lang="pug">
header
	g-link.logo-wrapper
		g-image(src="~/assets/img/codesuit-logo.svg")
		g-image(src="~/assets/img/mirko-rossbach.svg")
	.menu-wrapper
		ul.menu-list
			li.menu-item
				g-link.item-link(to="/" exact) Startseite
			li.menu-item
				g-link.item-link(to="/services" exact) Leistungen
			li.menu-item
				g-link.item-link Portfolio
			li.menu-item
				g-link.item-link Kontakt
		.menu-toggler
			svg
				circle(cx="32" cy="32" r="31")
			span
			span
</template>

<script>
export default {
	name: 'CHeader',
};
</script>

<style lang="scss">
@import './Header';
</style>
