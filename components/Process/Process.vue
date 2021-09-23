<template lang="pug">
section#process.mt-9.mb-9(:class="$options.name")
	.container
		h2.sectionHeading.underline.underline-secondary Ablauf
		.columns
			.column
				h4 Der erste Schritt eines erfolgreichen Projektes ist die Ebene der Kommunikation. Siezen Sie noch oder duzt du schon? - Ab hier wird geduzt!
		.columns.mb-6
			.column.is-12
				ul.process
					li.process__item(
						data-aos="fade-up"
						data-aos-anchor-placement="bottom-bottom"
						data-aos-once="true"
					)
						span.process__number 1
						span.process__title Beratung
						span.process__subtitle Im kostenlosen Erstgespräch werden wir zusammen den Ist- und Soll-Zustand besprechen.
					li.process__item(
						data-aos="fade-up"
						data-aos-anchor-placement="bottom-bottom"
						data-aos-delay="100"
						data-aos-once="true"
					)
						span.process__number 2
						span.process__title Konzeption
						span.process__subtitle Aufbauend auf den Erkenntnissen der Beratung, werde ich Dir ein Konzept vorstellen.
					li.process__item(
						data-aos="fade-up"
						data-aos-anchor-placement="bottom-bottom"
						data-aos-once="true"
						data-aos-delay="200"
					)
						span.process__number 3
						span.process__title Realisierung
						span.process__subtitle Während der Realisierungs-Phase bekommst du Zwischenstände zugeschickt, um sofortige Wünsche deinerseits kundtun zu können.
					li.process__item(
						data-aos="fade-up"
						data-aos-anchor-placement="bottom-bottom"
						data-aos-once="true"
						data-aos-delay="300"
					)
						span.process__number 4
						span.process__title Veröffentlichung
						span.process__subtitle Wenn der Soll-Zustand aus den ersten beiden Phasen zu 100% erreicht ist und du zu 100% zufrieden bist, werden wir gemeinsam das Projekt veröffentlichen.

		.columns.is-variable.is-8.mb-4
			.column
				p Jedes Projekt meinerseits durchläuft die eben aufgelisteten Phasen. Wir bleiben während des Projekts kontinuierlich in Kontakt - Transparenz und Zufriedenheit stehen bei mir an erster Stelle. Wenn gewünscht kann ich Dir in jedem Zeitpunkt des Projekts den aktuellen Stand zuschicken. Dadurch lassen sich frühzeitig ungewünschte Umsetzungen lokalisieren und ändern, damit wir im letzten Schritt eine 100%-tige Zufriedenheit erreichen. Alle Projekte, die ich während meiner Zeit als Webdesigner umgesetzt habe, würde ich gleichermaßen in persönlichen Projekten verwenden.
			.column
				p Ich stehe Dir während des kompletten Projektes zur Verfügung, bei Fragen oder Unklarheiten kannst du mich sehr gerne kontaktieren. Nun, da du Dir diesen Block schon sorgfältig durchgelesen hast und ich dich hoffentlich Überzeugen konnte, dass ich der Richtige bin, um dein nächstes Projekt erfolgreich abzuschließen, würde ich mich über eine Nachricht deinerseits freuen, damit wir endlich gemeinsam deine Ziele realisieren können.
		.columns
			.column
				.btnWrapper.is-justify-content-center
					a(
						href="#contact"
					)
						button.btn.btn-secondary
							span Jetzt kontaktieren
							span.icon.icon-arrow-right
</template>

<script>
import SlantTopDivider from "~/assets/img/slant-top.svg";
import SlantBottomDivider from "~/assets/img/slant-bottom.svg";

export default {
	name: "CProcess",
	components: {
		SlantTopDivider,
		SlantBottomDivider,
	},
	data() {
		return {
			services: [
				{
					title: "1. Erstgespräch",
					content:
						"Beim kostenlosen Erstgespräch wird der aktuelle Ist-Zustand besprochen und darauf aufbauend werden wir gemeinsam ein Konzept erstellen, welches die grundlegenden Rahmenbedinungen enthalten, die uns in der weiteren Projektplanung helfen. Jeder Schritt meines Vorgehens wird dokumentiert, damit Du zu jeder Zeit weißt, wie der aktuelle Stand ist. Zusätzlich kann ich Dir versichern, dass meine Arbeiten eine 100% Transparenz und Zufriedensheitsgarantie verspricht.",
				},
				{
					title: "2. Konzeption",
					content: "---",
				},
				{
					title: "3. Realisierung",
					content: "---",
				},
				{
					title: "4. Langfristiger Support",
					content: "---",
				},
			],
			activeService: null,
			rellax: {
				speed: -3,
			},
			plusRellax: {
				speed: -3,
			},
		};
	},
	beforeMount() {
		this.activeService = this.services;
	},
	methods: {
		selectService: function (title) {
			return (this.activeService = this.services.filter((service) => {
				return service.title === title;
			}));
		},
	},
};
</script>

<style lang="scss" src="./Process.scss"></style>
