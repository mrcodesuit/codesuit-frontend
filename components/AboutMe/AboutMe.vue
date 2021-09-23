<template lang="pug">
section#me.pb-6(:class="$options.name")
	.container
		h2.sectionHeading.underline.underline-primary.mt-6 Über mich
		.columns.mb-6.is-8.is-variable
			.column
				.about-me-images
					.bg-img(
						data-aos="fade-right",
						data-aos-once="false",
						data-aos-duration="3000"
					)
					.about-me-slider(data-aos="fade-down", data-aos-once="false")
						.slider-wrapper
							img.about-me-img(src="~/assets/img/codesuit-mirko-rossbach.jpg")
							img.about-me-img(src="~/assets/img/codesuit-seo.jpg")
							img.about-me-img(src="~/assets/img/codesuit-mirko.jpg")
						.indicators
							#prev.icon-care-left(@click="go(-1)")
							.counter
								span {{ currentSlide + 1 }}
								span /
								span 3
							#next.icon-care-right(@click="go(1)")

			.column
				.about-me-content
					p.about-me Über mich
					h3.about-me-heading Zusammen kreieren wir etwas bleibendes
					p.about-me-text Hallo, ich bin Mirko - ein leidenschaftlicher Entwickler mit einer großen Affinität für digitale Medien. Mein Ziel ist es minimalistische Designs / Websites zu kreiren, die für jeden Menschen zugänglich sind, ohne die aktuellen Design- und Webdesign-Trends zu vernachlässigen. Ich bin offen für jegliche Projektanfragen.
					a(
						href="#contact"
					)
						button.btn.btn-primary
							span Jetzt kontaktieren
							span.icon.icon-arrow-right
		//- .columns.is-variable.is-8
		//- 	.column
		//- 			p Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sint totam blanditiis necessitatibus, inventore alias labore molestiae, maxime sequi ut placeat velit quo possimus! Labore aliquam aperiam deserunt consequatur deleniti!  necessitatibus, inventore alias labore molestiae, maxime sequi ut placeat velit quo possimus! Labore aliquam aperiam deserunt consequatur deleniti!
		//- 	.column
		//- 			p Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sint totam blanditiis necessitatibus, inventore alias labore molestiae, maxime sequi ut placeat velit quo possimus! Labore aliquam aperiam deserunt consequatur deleniti!  necessitatibus, inventore alias labore molestiae, maxime sequi ut placeat velit quo possimus! Labore aliquam aperiam deserunt consequatur deleniti!
		.columns
			.column
				.skill-content
					.skill-topic-wrapper
						h3.skill-topic.underline.underline-primary Frontend:
					.skill-wrapper
						img.skill-img(src="~/assets/img/vue-codesuit.svg")
						p.skill-title Vue.js
					.skill-wrapper
						img.skill-img(src="~/assets/img/react-codesuit.svg")
						p.skill-title React.js
					.skill-wrapper
						img.skill-img(src="~/assets/img/pug-codesuit.svg")
						p.skill-title Pug
					.skill-wrapper
						img.skill-img(src="~/assets/img/sass-codesuit.svg")
						p.skill-title Sass
					.skill-wrapper.d-none
					.skill-wrapper
						img.skill-img(src="~/assets/img/nuxt-codesuit.svg")
						p.skill-title Nuxt.js
					.skill-wrapper
						img.skill-img(src="~/assets/img/jest-codesuit.svg")
						p.skill-title Jest
					.skill-wrapper
						p.cy-logo cy
						p.skill-title cypress

		.columns
			.column
				.skill-content
					.skill-topic-wrapper
						h3.skill-topic.underline.underline-primary Backend:
					.skill-wrapper
						img.skill-img(src="~/assets/img/nodejs-codesuit.svg")
						p.skill-title Node.js
					.skill-wrapper
						img.skill-img(src="~/assets/img/mongodb-codesuit.svg")
						p.skill-title MongoDB
					.skill-wrapper
						img.skill-img(src="~/assets/img/postgresql-codesuit.svg")
						p.skill-title PostgresSQL
					.skill-wrapper
						img.skill-img(src="~/assets/img/graphql-codesuit.svg")
						p.skill-title GraphQL
					.skill-wrapper.d-none
					.skill-wrapper
						img.skill-img(src="~/assets/img/rest-codesuit.svg")
						p.skill-title REST-API

		.columns
			.column
				.skill-content
					.skill-topic-wrapper
						h3.skill-topic.underline.underline-primary Learning...
					.skill-wrapper
						img.skill-img(src="~/assets/img/strapi-codesuit.svg")
						p.skill-title Strapi
					.skill-wrapper
						img.skill-img(src="~/assets/img/nextjs-codesuit.svg")
						p.skill-title Next.js

		//- img.bgPattern.circlePattern(
		//- 	src="~/assets/img/circle-pattern.svg",
		//- 	v-rellax="rellax"
		//- )
</template>

<script>
import Vue from "vue";
import VueRellax from "vue-rellax";

Vue.use(VueRellax);
import anime from "animejs";

export default {
	name: "CAboutMe",
	components: {},
	data() {
		return {
			currentSlide: 0,
			nextSlide: 0,
			animation: false,
			rellax: {
				speed: -1.5,
			},
		};
	},
	mounted() {
		this.showDivs(this.currentSlide);
	},
	methods: {
		showDivs: function (n) {
			var x = document.getElementsByClassName("about-me-img");
			var i;
			for (i = 0; i < x.length; i++) {
				x[i].style.zIndex = x.length - i;
			}
			x[n].style.zIndex = x.length;
		},
		go: function (dir) {
			if (!this.animation) {
				this.animation = true;
				var slidesCount = document.getElementsByClassName("about-me-img")
					.length;
				const slideWidth = document
					.getElementsByClassName("about-me-img")[0]
					.getBoundingClientRect().width;

				if (this.currentSlide === 0 && dir === -1) {
					this.nextSlide = slidesCount - 1;
				} else if (this.currentSlide === slidesCount - 1 && dir === 1) {
					this.nextSlide = 0;
				} else if (dir === -1) {
					--this.nextSlide;
				} else if (dir === 1) {
					++this.nextSlide;
				}

				var currentSlide = document.getElementsByClassName("about-me-img")[
					this.currentSlide
				];

				var nextSlide = document.getElementsByClassName("about-me-img")[
					this.nextSlide
				];

				const _this = this;

				// Next
				if (dir === 1) {
					var tl = anime.timeline({
						easing: "easeOutExpo",
						duration: 1500,
						complete: function () {
							_this.animation = false;
						},
					});

					tl.add({
						targets: [currentSlide],
						translateX: [0, -slideWidth],
						begin: function (anim) {
							anime({
								targets: [currentSlide],
								zIndex: 3,
								duration: 0,
							});
						},
						complete: function () {
							anime({
								targets: [currentSlide],
								translateX: [-slideWidth, 0],
								zIndex: 1,
								duration: 0,
							});
						},
					}).add(
						{
							targets: [nextSlide],
							translateX: [slideWidth, 0],
							zIndex: 3,
							begin: function (anim) {
								anime({
									targets: [nextSlide],
									zIndex: 3,
									duration: 0,
								});
							},
						},
						"-=1500"
					);
					if (this.currentSlide < slidesCount - 1) ++this.currentSlide;
					else this.currentSlide = 0;
				}

				// Prev
				else {
					var tl = anime.timeline({
						easing: "easeOutExpo",
						duration: 1500,
						complete: function () {
							_this.animation = false;
						},
					});

					tl.add({
						targets: [currentSlide],
						translateX: [0, slideWidth],
						begin: function (anim) {
							anime({
								targets: [currentSlide],
								zIndex: 3,
								duration: 0,
							});
						},
						complete: function () {
							anime({
								targets: [currentSlide],
								translateX: [slideWidth, 0],
								zIndex: 1,
								duration: 0,
							});
						},
					}).add(
						{
							targets: [nextSlide],
							translateX: [-slideWidth, 0],
							zIndex: 3,
							begin: function (anim) {
								anime({
									targets: [nextSlide],
									zIndex: 3,
									duration: 0,
								});
							},
						},
						"-=1500"
					);
					if (this.currentSlide <= slidesCount - 1 && this.currentSlide > 0)
						--this.currentSlide;
					else this.currentSlide = 2;
				}
			}
		},
	},
};
</script>

<style lang="scss" src="./AboutMe.scss"></style>
