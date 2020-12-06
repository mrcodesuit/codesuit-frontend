<template lang="pug">
	Layout
		CHero
		CServices
		CAboutMe
		.placeholder
		p Test

</template>

<script>
import CHero from '../components/Hero/Hero.vue';
import CServices from '../components/Services/Services.vue';
import CAboutMe from '../components/AboutMe/AboutMe.vue';

export default {
	name: 'LDefault',
	metaInfo: {
		title: 'codesuit.de | Startseite',
		meta: [{ name: 'Mirko Roßbach', content: 'Inhalt der Startseite' }],
	},
	components: { CHero, CServices, CAboutMe },
};
</script>

<style lang="scss">
.placeholder {
	width: 100%;
	height: 200vh;
	background-color: lightcoral;
}
</style>
