<template>
	<img :src="dynamicIcon" />
</template>

<script>
export default {
	name: "DynamicIcon",
	props: {
		icon: {
			type: String,
			required: true,
		},
	},
	computed: {
		dynamicIcon() {
			return require(`~/assets/img/${this.icon}.svg`)
		}
	},
};
</script>