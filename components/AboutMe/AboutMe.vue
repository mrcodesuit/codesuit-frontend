<template lang="pug">
section#me.pb-6(:class="$options.name")
	.container
		h2.sectionHeading.marker.mb-9.mt-6(
			data-aos="fade-left",
			data-aos-once="false"
		) Über mich
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
				.about-me-content(
					data-aos="fade-left",
					data-aos-once="false",
					data-aos-duration="2500"
				)
					p.about-me Über mich
					h3.about-me-heading Zusammen kreieren wir etwas bleibendes
					p.about-me-text Hallo, ich bin Mirko - ein leidenschaftlicher Entwickler mit einer großen Affinität für digitale Medien. Mein Ziel ist es minimalistische Designs / Websites zu kreiren, die für jeden Menschen zugänglich sind, ohne die aktuellen Design- und Webdesign-Trends zu vernachlässigen. Ich bin offen für jegliche Projektanfragen.
					button.btn.btn-primary(href="#contact")
						span Jetzt kontaktieren
						span.icon.icon-arrow-right
		//- .columns.is-variable.is-8
		//- 	.column
		//- 		.text-wrapper
		//- 			p Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sint totam blanditiis necessitatibus, inventore alias labore molestiae, maxime sequi ut placeat velit quo possimus! Labore aliquam aperiam deserunt consequatur deleniti!  necessitatibus, inventore alias labore molestiae, maxime sequi ut placeat velit quo possimus! Labore aliquam aperiam deserunt consequatur deleniti!
		//- 			p Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sint totam blanditiis necessitatibus, inventore alias labore molestiae, maxime sequi ut placeat velit quo possimus! Labore aliquam aperiam deserunt consequatur deleniti!  necessitatibus, inventore alias labore molestiae, maxime sequi ut placeat velit quo possimus! Labore aliquam aperiam deserunt consequatur deleniti!
		//- 	.column
		//- 		.skill-content
		//- 			.skill-wrapper
		//- 				.skill-top
		//- 					p Modernes Webdesign
		//- 					p 95%
		//- 				.skill-bottom
		//- 					.skill-bar
		//- 						.skill-bar-progress(style="width: 95%")
		//- 			.skill-wrapper
		//- 				.skill-top
		//- 					p Klassisches (Print-)Design
		//- 					p 90%
		//- 				.skill-bottom
		//- 					.skill-bar
		//- 						.skill-bar-progress(style="width: 90%")
		//- 			.skill-wrapper
		//- 				.skill-top
		//- 					p SEO
		//- 					p 85%
		//- 				.skill-bottom
		//- 					.skill-bar
		//- 						.skill-bar-progress(style="width: 85%")
		//- 			.skill-wrapper
		//- 				.skill-top
		//- 					p Marketing
		//- 					p 85%
		//- 				.skill-bottom
		//- 					.skill-bar
		//- 						.skill-bar-progress(style="width: 85%")
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
