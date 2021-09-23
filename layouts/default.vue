<template lang="pug">
.LDefault
	Header
	Nuxt
	Contact
	Footer
	transition(name="fade")
		a(v-show="showToTopIcon", href="#hero")
			.to-top
				span.icon.icon-arrow-right
				span.text Nach oben
</template>

<script>
export default {
	name: "LDefault",
	data() {
		return {
			showToTopIcon: false,
		};
	},
	mounted() {
		window.addEventListener("scroll", () => {
			this.scrollFunction();
		});
	},
	methods: {
		scrollFunction: function () {
			if (
				document.body.scrollTop > 20 ||
				document.documentElement.scrollTop > 20
			) {
				this.showToTopIcon = true;
			} else {
				this.showToTopIcon = false;
			}
		},
	},
};
</script>

<style lang="scss">
@import "~assets/scss/variables";
@import "~assets/scss/breakpoints";

.LDefault {
	position: relative;

	.to-top {
		display: block;
		bottom: 4rem;
		display: flex;
		flex-direction: column;
		position: fixed;
		right: 4rem;

		@include media("<=tablet") {
			bottom: 2rem;
			right: 2rem;
		}

		&:hover {
			@include media(">tablet") {
				span.icon {
					transform: rotate(-90deg) translateX(3.6rem);
				}
				span.text {
					transform: translateY(-1.2rem);
				}
			}
		}

		span {
			display: block;
			transition: all 0.4s;
		}

		span.icon {
			color: $offblack;
			display: inline-block;
			font-size: 4rem;
			transform: rotate(-90deg) translateX(2.4rem);

			@include media("<=tablet") {
				font-size: 2.4rem;
				transform: rotate(-90deg) translateX(1.6rem);
			}
		}

		span.text {
			@include media("<=tablet") {
				font-size: 1.1rem;
			}
		}
	}

	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.4s;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
		opacity: 0;
	}
}
</style>
