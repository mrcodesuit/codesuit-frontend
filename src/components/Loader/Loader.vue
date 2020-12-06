<template lang="pug">
   div(:class="$options.name")
      g-image(src="~/assets/img/codesuit-logo.svg" immediate)
      span.progress 0%
      .progress-bar
</template>

<script>
export default {
	name: 'CLoader',
	mounted() {
		this.loadLoader();
	},
	methods: {
		loadLoader() {
			console.log('loadLoader');
			var CLoader = document.querySelector('.CLoader');
			var progress = document.querySelector('.progress');
			var progressBar = document.querySelector('.progress-bar');
			var currentPercent = 0;

			const _this = this;

			function updateProgress(percent) {
				progressBar.style.width = percent + '%';
				progress.innerHTML = percent + '%';
			}

			progressBar.addEventListener(
				'animationend',
				function(event) {
					CLoader.style.display = 'none';
					_this.close();
				},
				false
			);

			var interval = setInterval(function() {
				if (currentPercent > 101) {
					clearInterval(interval);
				}
				currentPercent += parseInt(Math.random() * 5, 10);

				if (currentPercent < 101) {
					updateProgress(currentPercent);
				} else {
					updateProgress(100);
					CLoader.classList.add('CLoader-end');
					progress.classList.add('progress-end');
					progressBar.classList.add('progress-bar-end');
					_this.loaderCallback(true);
				}
			}, 70);
		},

		close() {
			this.$destroy();
			this.$el.parentNode.removeChild(this.$el);
		},
		loaderCallback(value) {
			this.$emit('loaderCallback', value);
		},
	},
};
</script>

<style lang="scss">
@import './Loader.scss';
</style>
