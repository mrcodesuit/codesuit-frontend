<template lang="pug">
section#portfolio.mt-9.mb-9(:class="$options.name")
	.container
		h2.sectionHeading.underline.underline-primary Portfolio
		p.subHeading / Fiktive Arbeiten
		.columns
			.column.is-7(
				data-aos="zoom-in-down"
				data-aos-delay="100"
				data-aos-anchor-placement="bottom-bottom"
			)
				.img-wrapper
					img.triangleDivider(src="~/assets/img/interior_responsive_gadgets.png")
			.column.is-5.pl-2
				.case-content
					h3.case-title # Interiors
					p.h4.topic Inneneinrichtung -/ design
					p Auf Basis eines Screendesigns mit dem Thema: "Inneneinrichtung -/ design", habe ich einen sogenannten "Hero"-Bereich umgesetzt. Der "Hero"-Bereich wird in der Webentwicklung, als der Bereich definiert, welcher der Besucher einer Webseite zuerst wahrnimmt - meistens am Anfang der Startseite, zentriert und die ganzen Bilschirmbreite einnehmend.
					.actions
						a(
							href="https://wizardly-feynman-7b1fc2.netlify.app/"
							target="_blank"
						)
							button.btn.btn-primary.mb-2.mt-1
								span Vorschau
								span.icon.icon-arrow-right
						a.design-link(
							href="https://dribbble.com/shots/3968422-Skillshare-Test"
							target="_blank"
						) Design / Idee >
		.columns.mt-7.row-reverse
			.column.is-7(
				data-aos="zoom-in-down"
				data-aos-delay="100"
				data-aos-anchor-placement="bottom-bottom"
			)
				.img-wrapper
					img.triangleDivider(src="~/assets/img/mist_responsive_gadgets.png")
			.column.is-5.pr-2
				.case-content
					h3.case-title # The mist
					p.h4.topic Filmvorschau
					p Wie auch im vorherigen Projekt, habe ich ein "Hero"-Bereich für den gleichnamigen Film "The mist" umgesetzt. Dieser soll den Hauptdarsteller in Szene setzen und dem Besucher dazu einladen den Trailer des Films anzuschauen, dafür wurde zentriert auf der rechten Seite ein Link platziert.
					.actions
						a(
							href="https://agitated-meitner-1a7dad.netlify.app/"
							target="_blank"
						)
							button.btn.btn-primary.mb-2.mt-1
								span Vorschau
								span.icon.icon-arrow-right
						//- a.design-link(
						//- 	href="#"
						//- ) Design / Idee >

		.columns.mt-7
			.column.is-7(
				data-aos="zoom-in-down"
				data-aos-delay="100"
				data-aos-anchor-placement="bottom-bottom"
			)
				.img-wrapper
					img.triangleDivider(src="~/assets/img/fima_responsive_gadgets.png")
			.column.is-5.pl-2
				.case-content
					h3.case-title # Fima - fashion house
					p.h4.topic Klamottenmarkt
					p Auf Basis eines Webdesigns wurde eine Startseite für einen Klamottenmarkt umgesetzt. Die einzelnen Produkte / Bereiche der Seite werden per Animation dem Besucher der Seite präsentiert, um so die volle Aufmerksamkeit auf das Produkt zu lenken.
					.actions
						a(
							href="https://quirky-fermat-8b8af1.netlify.app/"
							target="_blank"
						)
							button.btn.btn-primary.mb-2.mt-1
								span Vorschau
								span.icon.icon-arrow-right
						a.design-link(
							href="https://www.behance.net/gallery/69821161/Fima-Free-Website-Template"
							target="_blank"
						) Design / Idee >

		.portfolio-end-text.mt-7
			h3 Hat dir mein Portfolio gefallen ?
			h4 Dann schreib mir gerne eine Nachricht, damit wir endlich zusammen deine Ziele realisieren können.
			a(
				href="#contact"
			)
				button.btn.btn-primary(href="#contact")
					span Jetzt kontaktieren
					span.icon.icon-arrow-right
					
</template>

<script>
export default {
	name: "CPortfolio",
	methods: {},
};
</script>

<style lang="scss" src="./Portfolio.scss"></style>
