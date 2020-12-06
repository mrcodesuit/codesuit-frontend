<template lang="pug">
	.layout
		CLoader(v-if="!hasLoaded" @loaderCallback="loaderCallback")
		CHeader
		.container
			slot
</template>

<static-query>
	query {
	metadata {
		siteName
	}
}
</static-query>

<script>
import CHeader from '../components/Header/Header.vue';
import CLoader from '../components/Loader/Loader.vue';
export default {
	name: 'LDefault',
	components: { CHeader, CLoader },
	data() {
		return {
			hasLoaded: false,
		};
	},
	methods: {
		loaderCallback(value) {
			this.hasLoaded = value;
		},
	},
};
</script>

<style lang="scss">
.layout {
	position: relative;
}
</style>
