<template lang="pug">
	section(:class="$options.name")
		h2.sectionHeading Leistungen
		.row.mb-4
			.column.column-33
				.content-inner
					h2.h3 Webdesign
					p Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, similique unde? Dignissimos ut labore corporis ab reiciendis earum eveniet quis!
					button.btn.btn-4.hover-border-10
						span.gray Mehr erfahren
			.column.column-33
				.content-inner
					h2.h3 SEO
					p Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, similique unde? Dignissimos ut labore corporis ab reiciendis earum eveniet quis!
					button.btn.btn-4.hover-border-10
						span.gray Mehr erfahren
			.column.column-33
				.content-inner.content-inner--last
					h2.h3 Marketing
					p Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, similique unde? Dignissimos ut labore corporis ab reiciendis earum eveniet quis!
					button.btn.btn-4.hover-border-10
						span.gray Mehr erfahren

		hr
		.row.m-tb-4
			.column.column-33
				.content-inner
					h2.h3 Corporate Design
					p Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, similique unde? Dignissimos ut labore corporis ab reiciendis earum eveniet quis!
					button.btn.btn-4.hover-border-10
						span.gray Mehr erfahren
			.column.column-33
				.content-inner
					h2.h3 Grafikdesign
					p Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, similique unde? Dignissimos ut labore corporis ab reiciendis earum eveniet quis!
					button.btn.btn-4.hover-border-10
						span.gray Mehr erfahren
			.column.column-33
				.content-inner.content-inner--last
					h2.h3 Printdesign
					p Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, similique unde? Dignissimos ut labore corporis ab reiciendis earum eveniet quis!
					button.btn.btn-4.hover-border-10
						span.gray Mehr erfahren
		
</template>

<script>
export default {
	name: 'CServices',
};
</script>

<style lang="scss">
@import './Services';
</style>
