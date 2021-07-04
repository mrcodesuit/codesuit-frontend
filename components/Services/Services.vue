<template lang="pug">
section#services(:class="$options.name")
	SlantTopDivider.triangleTopDivider.mb-6
	.container
		h2.sectionHeading.white.marker.mb-6(
			data-aos="fade-left",
			data-aos-once="false"
		) Leistungen
		.services
			.columns
				template(v-for="service in services.slice(0, 2)")
					.column
						.service-card.top(
							:class="{ active: activeService[0].title === service.title }",
							:key="service.title",
							@click="selectService(service.title)"
						)
							DynamicIcon.icon(:icon="service.icon")
							h4 {{ service.title }}
		.contentWrapper
			template(v-for="service in services")
				transition(name="slide-fade")
					p(v-if="activeService[0].title === service.title") {{ service.content }}
		.services
			.columns
				template(v-for="service in services.slice(2, 5)")
					.column
						.service-card.bottom(
							:class="{ active: activeService[0].title === service.title }",
							:key="service.title",
							@click="selectService(service.title)"
						)
							DynamicIcon.icon(:icon="service.icon")
							h4 {{ service.title }}
		img.cactus(
			src="~/assets/img/cactus.png",
			data-aos="fade-right",
			data-aos-once="false"
		)
	SlantBottomDivider.mt-7.slantBottomDivider
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

import DynamicIcon from "../DynamicIcon.vue";
import SlantTopDivider from "~/assets/img/slant-top.svg?inline";
import SlantBottomDivider from "~/assets/img/slant-bottom.svg?inline";

export default {
	name: "CServices",
	components: {
		SlantTopDivider,
		SlantBottomDivider,
		DynamicIcon,
	},
	data() {
		return {
			services: [
				{
					id: 1,
					title: "Kreatives Webdesign",
					heading: "Voll responsiv, optimiert für den Wettbewerb",
					content:
						"Webdesign befasst sich mit dem, was der Benutzer tatsächlich auf seinem Computerbildschirm oder mobilen Gerät sieht, und weniger mit den Mechanismen unter der Oberfläche, die dafür sorgen, dass das Ganze funktioniert. Durch den Einsatz von Farbe, Bildern, Typografie und Layout wird ein digitales Erlebnis zum Leben erweckt. Ich erstelle aufmerksamkeitsstarke Webseiten, die Besucher ansprechen und zu Kunden akquiriert werden. Zu meinen Kernkompetenzen gehören maßgeschneidertes Webseiten-Designs, mobile Webseiten, Erstellung von Webanwendungen und Webseiten. Ich erstelle Webseiten, die für jeden zugänglich sind, auf jedes Gerät reagieren und sich an Ihre wachsenden und sich entwickelnden Bedürfnisse anpassen können.",
					icon: "code-thin",
				},
				{
					id: 2,
					title: "Moderne Webseiten",
					heading:
						"Wir entwickeln Websites auf höchstem Niveau - für jeden Bedarf.",
					content:
						"Ihre Webseite muss Eindruck machen; sie ist die erste Erfahrung, die Ihre Kunden mit Ihrem Unternehmen machen. Ihre Webseite repräsentiert Ihre Marke. Und eine Webseite, die langsam, unzuverlässig oder schwer zu bedienen ist, ist eine Webseite, die Kunden und Interessenten meiden werden. Meine Webseiten werden mit dem Fokus auf Benutzerfreundlickeit, XXX und XXX erstellt. Moderne Webseiten sind der Schlüssel zu Ihrem Wachstum, Ihrer Leistung und Ihrem Einfluss im digitalen Zeitalter. Sie bieten Ihren Kunden die Informationen, die sie benötigen, und etablieren gleichzeitig Ihre Marke. Denn sobald ihre Webseite funktional und designtechnisch ansprechend ist, werden immer mehr Kunden ihre Webseite besuchen.",
					icon: "globe-thin",
				},
				{
					id: 3,
					title: "Blog / Wordpress",
					heading:
						"Wir entwickeln Websites auf höchstem Niveau - für jeden Bedarf.",
					content:
						"Neben den individuellen Webdesigns / Webseiten biete ich auch Webseiten an, die auf Basis von Wordpress veröffentlicht werden. Ich verwende WordPress als mein Framework der Wahl wegen seiner Anpassbarkeit und der einfachen, ausgefeilten Verwaltungsoberfläche für eine wirklich benutzerfreundliche Erfahrung. Alle meine WordPress-Websites werden speziell für jedes Projekt erstellt. Als erfahrener Frontend-Entwickler geben ich Ihnen nicht nur die Werkzeuge an die Hand, um Inhalte für Ihre neue Website zu erstellen, sondern ich helfe Ihnen auch bei der Zusammenstellung dieser Inhalte vor der endgültigen Erstellung/Publikation. Ich verwende kollaborative Tools zum Sammeln von Inhalten, die es Ihnen ermöglichen, die Inhalte in Bezug auf die Architektur der Website zu visualisieren und alle Änderungen innerhalb Ihres Teams vorzunehmen, bevor Sie live gehen. Zusätzlich haben Sie Zugang zu einer gesicherten Testumgebung Ihrer Website, die auf meinem Server gehostet wird, während die Website erstellt wird.",
					icon: "globe-thin",
				},
				{
					id: 4,
					title: "Webanwendungen & Widgets",
					content:
						"Möchten Sie ihre bestehende Internetpräsenz optimieren? Benötigen Sie eine Erweiterung (Widget) für ihre Webseite? Welche neue Funktionalitäten muss ihre Webseite mitbringen? Auf Basis ihrer Anforderungen kann ihre Webseite erweitert werden. Ein Beispiel für solch ein Widget ist ein Online-Terminvereinbarungssystem. Mit Hilfe solcher Erweiterungen kann Ihre Webseite neue Funktionen erlangen, ihre unternehmerischen Tätigkeiten digitalisiert und letztendlich modernisiert werden.",
					icon: "windows-thin",
				},
				{
					id: 5,
					title: "SEO & Marketing",
					content:
						"SEO steht für Search Engine Optimization (zu dt. Suchmaschinenoptimierung). Es ist eine Reihe von Regeln für die Optimierung Ihrer Website, so dass sie höhere Platzierungen in den organischen Ergebnissen der Suchmaschinen erreichen kann. Es ist der Prozess, den Sie befolgen müssen, um die Sichtbarkeit Ihrer Website in Suchmaschinen zu erhöhen und mehr Traffic zu erhalten. SEO hat zwei Hauptziele. Das erste ist, Ihnen dabei zu helfen, zu verstehen, wonach Benutzer online suchen, damit Sie qualitativ hochwertige Inhalte erstellen können, um deren Absicht zu erfüllen. Das zweite ist, Ihnen dabei zu helfen, eine Website zu erstellen, die von Suchmaschinen gefunden, indiziert und deren Inhalt verstanden werden kann. Darüber hinaus ist das Befolgen guter SEO-Praktiken eine großartige Möglichkeit, die Qualität ihrer Website zu erhöhen, indem sie benutzerfreundlich, schneller und einfacher zu navigieren ist.",
					icon: "gear-thin",
				},
				// {
				// 	id: 2,
				// 	title: "Grafikdesign",
				// 	content:
				// 		"Was ist Grafikdesign? Die meisten Menschen haben eine Vorstellung davon, was es umfasst; das Erstellen von Logos, das Bearbeiten von Fotos, das Erstellen von Broschüren. Aber das sind nur ein paar Elemente eines viel größeren Bildes, das mehr ist als nur der physische Ausdruck von Grafikdesign. Grafikdesign wird zu einem immer wichtigeren Aspekt für jedes Unternehmen oder jede Organisation. ",
				// 	icon: "pencil-thin",
				// },
				// {
				// 	id: 3,
				// 	title: "Logodesign",
				// 	content:
				// 		"Logodesign ist nicht nur das Entwerfen eines Logos oder das Bearbeiten von Bildern in Photoshop, sondern umfasst eine viel breitere Palette von kreativen Assets für ein Unternehmen. Wenn Sie darüber nachdenken - wir sind von Design umgeben. Von der ersten Sache, die Sie morgens sehen, wie z. B. eine Flasche Milch, die Werbung, die Sie in der U-Bahn sehen, oder die Benutzeroberfläche, die Sie für die Buchung Ihres nächsten Urlaubs verwenden werden. Sie sind ständig von visuellen Elementen umgeben, die Grafik und Text miteinander verbinden. Als Marke ist es wichtig, sich vor Augen zu halten, dass ein Logo allein nicht ausreicht, um Ihr Unternehmen auf die nächste Stufe zu heben. Sie müssen über das größere Bild nachdenken und darüber, wie Sie Ihre Markenbotschaft auf andere kreative Weise vermitteln können. Ich tauche tief in das Verständnis Ihrer Marke ein und verstehe, was Sie wollen und vor allem, was Sie brauchen.",
				// 	icon: "pencil-thin",
				// },
			],
			activeService: null,
		};
	},
	created() {
		this.activeService = this.services;
	},
	mounted() {
		AOS.init();
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

<style lang="scss" src="./Services.scss"></style>