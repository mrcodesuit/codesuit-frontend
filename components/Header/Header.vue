<template lang="pug">
header(:class="$options.name")
	.container
		.headerSocialContactWrapper
			.iconWrapper
				WhatsApp.icon
				span +49 176 345 066 97
			.socialWrapper
				a(href="#")
					Facebook.icon.icon-facebook
				a(href="#")
					LinkedIn.icon.icon-linkedin
				a(href="#")
					Youtube.icon.icon-youtube
				a(href="#")
					Instagram.icon.icon-instagram
		#headerInner.headerInner
			nuxt-link.logo-wrapper(to="/#hero")
				CodesuitLogo.codesuit-logo
			.menu-wrapper
				ul.menu-list
					template(v-if="isIndexPage")
						li.menu-item
							a.item-link(href="#hero") Startseite
						li.menu-item
							a.item-link(href="#services") Leistungen
						li.menu-item
							a.item-link(href="#me") Über mich
						li.menu-item
							a.item-link(href="#process") Ablauf
						li.menu-item
							a.item-link(href="#contact") Kontakt
					template(v-else)
						li.menu-item
							nuxt-link.item-link(to="/#hero") Startseite
						li.menu-item
							nuxt-link.item-link(to="/#services") Leistungen
						li.menu-item
							nuxt-link.item-link(to="/#me") Über mich
						li.menu-item
							nuxt-link.item-link(to="/#contact") Kontakt
				.menu-toggler-easy
					Menu.icon(@click="toggleSidebarMenu")
			.menu-toggler.isActive(ref="menuToggler")
				CodesuitLogoWhite.icon-codesuit
				Menu.icon(@click="toggleSidebarMenu")
		.sidebarMenuWrapper(:class="{ isOpen: showSidebar }")
			.innerWrapper
				XMark.icon-x-mark(@click="toggleSidebarMenu")
				CodesuitLogoWhite.icon-codesuit
				.menu-wrapper
					ul.menu-list
						li.menu-item
							a.item-link(href="#hero", @click="toggleSidebarMenu") Startseite
						li.menu-item
							a.item-link(href="#services", @click="toggleSidebarMenu") Leistungen
						li.menu-item
							a.item-link(href="#process", @click="toggleSidebarMenu") Ablauf
						li.menu-item
							a.item-link(href="#me", @click="toggleSidebarMenu") Über mich
						li.menu-item
							a.item-link(href="#contact", @click="toggleSidebarMenu") Kontakt
				.socialWrapper
					a(href="#")
						Facebook.icon.icon-facebook
					a(href="#")
						LinkedIn.icon.icon-linkedin
					a(href="#")
						Youtube.icon.icon-youtube
					a(href="#")
						Instagram.icon.icon-instagram
			SlantBottomDivider.slantBottomDivider
</template>

<script>
import WhatsApp from "~/assets/img/whatsapp.svg?inline";
import Facebook from "~/assets/img/facebook.svg?inline";
import Youtube from "~/assets/img/youtube.svg?inline";
import LinkedIn from "~/assets/img/linkedin.svg?inline";
import Instagram from "~/assets/img/instagram.svg?inline";
import Menu from "~/assets/img/menu.svg?inline";
import XMark from "~/assets/img/x-mark.svg?inline";
import SlantBottomDivider from "~/assets/img/slant-bottom.svg?inline";
import CodesuitLogo from "~/assets/img/codesuit-logo.svg?inline";
import CodesuitLogoWhite from "~/assets/img/codesuit-logo-white.svg?inline";
import MRSign from "~/assets/img/mirko-rossbach.svg?inline";

function elementInViewport(el) {
	var top = el.offsetTop;
	var height = el.offsetHeight;

	while (el.offsetParent) {
		el = el.offsetParent;
		top += el.offsetTop;
	}

	return (
		top >= window.pageYOffset &&
		top + height <= window.pageYOffset + window.innerHeight
	);
}

export default {
	name: "CHeader",
	components: {
		WhatsApp,
		Facebook,
		Youtube,
		LinkedIn,
		Instagram,
		Menu,
		XMark,
		CodesuitLogo,
		CodesuitLogoWhite,
		MRSign,
		SlantBottomDivider,
	},
	data() {
		return {
			showSidebar: false,
			isIndexPage: false,
		};
	},
	beforeMount() {
		if (this.$route.path === "/") this.isIndexPage = true;
		else this.isIndexPage = false;
	},
	mounted() {
		document.addEventListener("scroll", this.handleScroll);
	},
	destroyed() {
		document.removeEventListener("scroll", this.handleScroll);
	},
	methods: {
		toggleSidebarMenu() {
			this.showSidebar = !this.showSidebar;
		},
		handleScroll() {
			const el = document.getElementById("headerInner");
			if (elementInViewport(el)) {
				this.$refs.menuToggler.classList.remove("isActive");
			} else {
				this.$refs.menuToggler.classList.add("isActive");
			}
		},
	},
};
</script>

<style lang="scss" src="./Header.scss"></style>
