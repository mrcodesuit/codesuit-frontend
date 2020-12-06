<template lang="pug">
	section(:class="$options.name")
		h2.sectionHeading Über mich
		.row
			.column.column-50
				.about-me-images
					g-image.bg-img(src="~/assets/img/about-me-1.jpg" immediate)
					.about-me-slider
						.slider-wrapper
							g-image.about-me-img(src="~/assets/img/codesuit-mirko-rossbach.jpg" immediate)
							g-image.about-me-img(src="~/assets/img/codesuit-seo.jpg" immediate)
							g-image.about-me-img(src="~/assets/img/codesuit-mirko.jpg" immediate)
						.indicators
							.icon-care-left#prev(@click="go(-1)")
							.counter
								span {{currentSlide + 1}}
								span /
								span 3
							.icon-care-right#next(@click="go(1)")

			.column.column-50
				.about-me-content
					p.about-me Über mich
					h3.about-me-heading Zusammen kreieren wir etwas bleibendes
					p.about-me-text Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate iure ullam fuga distinctio quas eaque amet ipsum dolore minima vero.
					button.btn.btn-4.hover-border-10
						span.gray Mehr erfahren
		.row.mt-9
			.column.column-50
				.text-wrapper
					p Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sint totam blanditiis necessitatibus, inventore alias labore molestiae, maxime sequi ut placeat velit quo possimus! Labore aliquam aperiam deserunt consequatur deleniti!
					button.btn.btn-4.hover-border-10
							span.gray Mehr erfahren
			.column.column-50
				.skill-content
					.skill-wrapper
						.skill-top
							p Design
							p 20%
						.skill-bottom
							.skill-bar
					.skill-wrapper
						.skill-top
							p SEO
							p 20%
						.skill-bottom
							.skill-bar
					.skill-wrapper
						.skill-top
							p Marketing
							p 50%
						.skill-bottom
							.skill-bar
</template>

<script>
import anime from 'animejs/lib/anime.es.js';

export default {
	name: 'CAboutMe',
	data() {
		return {
			currentSlide: 0,
			nextSlide: 0,
			animation: false,
		};
	},
	mounted() {
		this.showDivs(this.currentSlide);
	},
	methods: {
		showDivs: function(n) {
			var x = document.getElementsByClassName('about-me-img');
			var i;
			for (i = 0; i < x.length; i++) {
				x[i].style.zIndex = x.length - i;
			}
			x[n].style.zIndex = x.length;
		},
		go: function(dir) {
			if (!this.animation) {
				this.animation = true;
				var slidesCount = document.getElementsByClassName('about-me-img')
					.length;
				const slideWidth = document
					.getElementsByClassName('about-me-img')[0]
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

				console.log(this.currentSlide);
				var currentSlide = document.getElementsByClassName('about-me-img')[
					this.currentSlide
				];

				console.log(this.nextSlide);
				var nextSlide = document.getElementsByClassName('about-me-img')[
					this.nextSlide
				];

				const _this = this;

				// Next
				if (dir === 1) {
					var tl = anime.timeline({
						easing: 'easeOutExpo',
						duration: 1500,
						complete: function() {
							_this.animation = false;
						},
					});

					tl.add({
						targets: [currentSlide],
						translateX: [0, -slideWidth],
						begin: function(anim) {
							anime({
								targets: [currentSlide],
								zIndex: 3,
								duration: 0,
							});
						},
						complete: function() {
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
							begin: function(anim) {
								anime({
									targets: [nextSlide],
									zIndex: 3,
									duration: 0,
								});
							},
						},
						'-=1500'
					);
					if (this.currentSlide < slidesCount - 1) ++this.currentSlide;
					else this.currentSlide = 0;
				}

				// Prev
				else {
					var tl = anime.timeline({
						easing: 'easeOutExpo',
						duration: 1500,
						complete: function() {
							_this.animation = false;
						},
					});

					tl.add({
						targets: [currentSlide],
						translateX: [0, slideWidth],
						begin: function(anim) {
							anime({
								targets: [currentSlide],
								zIndex: 3,
								duration: 0,
							});
						},
						complete: function() {
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
							begin: function(anim) {
								anime({
									targets: [nextSlide],
									zIndex: 3,
									duration: 0,
								});
							},
						},
						'-=1500'
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

<style lang="scss">
@import './AboutMe.scss';
</style>
