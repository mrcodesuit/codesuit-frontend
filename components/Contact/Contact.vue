<template lang="pug">
div(:class="$options.name")
	SlantTopDivider
	#contact.mt-9.pb-7.container
		h2.sectionHeading.white.underline.underline-black Kontakt
		.columns.is-variable.is-6
			.column.is-4
				h3 Kontaktiere mich
				h4 Ich freue mich über jede nette Mail und neue Kontakte.
				p Schreib mir einfach eine E-Mail, eine Nachricht mit Hilfe des nebenstehenden Formulars oder kontaktiere mich über WhatsApp, ich werde Dir schnellstmöglich antworten.
				p.iconWrapper
					|
					MailIcon.icon
					| kontakt@codesuit.de
				p.iconWrapper
					|
					WhatsAppIcon.icon
					| 0176 / 345 066 97
			.column.is-8
				form
					.columns
						.column
							.input
								.text
									input#name(type="text", placeholder="Dein Name", v-model="name")
						.column
							.input
								.text
									input#email(
										type="text",
										placeholder="Deine E-Mail",
										v-model="email",
										:class="{ error: $v.email.$model && $v.email.$invalid && $v.$anyError }"
									)
							span.text-error(v-show="$v.email.$model && $v.email.$invalid && $v.$anyError") Bitte geben sie eine gültige E-Mail-Adresse an.
					.columns.m-tb-3
						.column
							.input
								.text
									input#phone(
										type="text",
										placeholder="Deine Telefonnummer",
										v-model="phone"
									)

					.columns.m-tb-3
						.column
							.input-textarea
								.text
									textarea#message(
										placeholder="Deine Anfrage / Nachricht",
										v-model="message",
										rows="10"
									)
					.columns.m-tb-3
						.column.send-wrapper
							button.btn.white.submit(type="submit", @click.stop.prevent="submit")
								span Senden
								span.icon.icon-arrow-right
							transition(name="fade")
								p.submitMessage(v-if="submitStatus === 'OK'") Ihr Nachricht wurde erfolgreich gesendet!
</template>

<script>
// Vuelidate
import Vue from "vue";
import Vuelidate from "vuelidate";
Vue.use(Vuelidate);
import { required, email } from "vuelidate/lib/validators";

import MailIcon from "~/assets/img/mail-thin.svg?inline";
import WhatsAppIcon from "~/assets/img/whatsapp.svg?inline";
import SlantTopDivider from "~/assets/img/slant-top.svg?inline";

export default {
	name: "CContact",
	components: {
		SlantTopDivider,
		MailIcon,
		WhatsAppIcon,
	},
	data() {
		return {
			name: "",
			email: "",
			phone: "",
			message: "",
			submitStatus: "",
		};
	},
	validations: {
		name: {
			required,
		},
		email: {
			required,
			email,
		},
		phone: {
			required,
		},
		message: {
			required,
		},
	},
	mounted() {},
	watch: {
		submitStatus: function (newStatus, oldStatus) {
			if (newStatus === "OK") {
				setTimeout(() => {
					this.submitStatus = "";
				}, 5000);
			}
		},
	},
	methods: {
		async submit() {
			this.$v.$touch();
			if (this.$v.$invalid) {
				this.submitStatus = "ERROR";
			} else {
				this.submitStatus = "PENDING";
				// do your submit logic here
				var data = {
					subject: "Nachricht über Kontaktformular",
					name: this.name,
					email: this.email,
					phone: this.phone,
					message: this.message,
				};

				await this.$axios
					.$post(
						"https://api.codesuit.de/codesuit/sendtome",
						JSON.stringify(data),
						{
							headers: {
								"Content-Type": "application/json",
							},
						}
					)
					.then((res) => {
						// reset form values
						this.submitStatus = "OK";
						this.resetFormValues();
					})
					.catch((err) => {
						console.log(err);
					});
			}
		},
		resetFormValues: function () {
			return (
				this.$v.$reset(),
				(this.name = ""),
				(this.email = ""),
				(this.phone = ""),
				(this.message = "")
			);
		},
	},
};
</script>

<style lang="scss" src="./Contact.scss"></style>
