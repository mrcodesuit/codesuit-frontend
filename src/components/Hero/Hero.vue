<template lang="pug">
	.hero
		.images-wrapper
			template(v-for="(slide,index) in slides")
				g-image.topic-img(
					immediate
					:src="require(`!!assets-loader!@images/${slide.node.img}`)"
					quality="100"
					:id="`hero-img-${index}`"
					)
		.hero--inner
			.content-wrapper
				p.topic#hero-topic {{slides[0].node.topic}}
				h1.heading#hero-heading {{slides[0].node.heading}}
				#hero-link
					g-link(to="/" exact)
						button.btn.btn-4.hover-border-10
							span.heroLinkContent {{slides[0].node.linkText}}
			.arrows
				.icon-arrow-left#prev(@click="go(-1)")
				.icon-arrow-right#next(@click="go(1)")
			.indicators
					template(v-for="(slide,index) in slides")
						span(
							:class="[currentSlide === index ? 'activeSlide' : null]"
							@click="event => selectSlide(event.target)"
							:data-index="index"
						)



</template>

<static-query>
query{
  slides: allHeroSlide{
	 edges{
		node{
		  id
		  topic
		  heading
		  img
		  linkText
		}
	 }
  }
}
</static-query>

<script>
import anime from 'animejs/lib/anime.es.js';

export default {
	name: 'CHero',
	data() {
		return {
			slides: [],
			currentSlide: 0,
		};
	},
	beforeMount() {
		this.slides = this.$static.slides.edges;
	},
	mounted() {
		this.showDivs(this.currentSlide);
	},
	methods: {
		selectSlide: function(slide) {
			this.currentSlide = slide.getAttribute('data-index') - 1;
			this.go(1);
		},
		showDivs: function(n) {
			var x = document.getElementsByClassName('topic-img');
			var i;
			for (i = 0; i < x.length; i++) {
				x[i].style.opacity = 0;
			}
			x[n].style.opacity = 1;
		},
		go: function(dir) {
			const heroTopic = document.getElementById('hero-topic');
			const heroHeading = document.getElementById('hero-heading');
			const heroLink = document.getElementById('hero-link');
			const heroLinkContent = document.querySelector('.heroLinkContent');
			var slidesCount = document.getElementsByClassName('topic-img').length;

			if (this.currentSlide === 0 && dir === -1) {
				this.currentSlide = slidesCount;
			} else if (this.currentSlide === slidesCount - 1 && dir === 1) {
				this.currentSlide = -1;
			}
			// Next
			if (dir === 1) {
				this.showDivs(++this.currentSlide);

				const _this = this;

				var tl = anime.timeline({
					easing: 'easeOutExpo',
					duration: 550,
				});

				tl.add({
					targets: [heroTopic, heroHeading, heroLink],
					opacity: 0,
					translateX: [0, 100],
					complete: function() {
						heroTopic.innerHTML = _this.slides[_this.currentSlide].node.topic;
						heroHeading.innerHTML =
							_this.slides[_this.currentSlide].node.heading;
						heroLinkContent.innerHTML =
							_this.slides[_this.currentSlide].node.linkText;
					},
				}).add({
					targets: [heroTopic, heroHeading, heroLink],
					opacity: 1,
					translateX: [-100, 0],
				});
			}
			// Prev
			else {
				this.showDivs(--this.currentSlide);

				const _this = this;

				var tl = anime.timeline({
					easing: 'easeOutExpo',
					duration: 550,
				});

				tl.add({
					targets: [heroTopic, heroHeading, heroLink],
					opacity: 0,
					translateX: [0, -100],
					complete: function() {
						heroTopic.innerHTML = _this.slides[_this.currentSlide].node.topic;
						heroHeading.innerHTML =
							_this.slides[_this.currentSlide].node.heading;
						heroLinkContent.innerHTML =
							_this.slides[_this.currentSlide].node.linkText;
					},
				}).add({
					targets: [heroTopic, heroHeading, heroLink],
					opacity: 1,
					translateX: [100, 0],
				});
			}
		},
	},
	watch: {
		slides: function(val) {
			if (this.slides > 0) console.log(val);
		},
	},
};
</script>

<style lang="scss">
@import './Hero.scss';
</style>
