<script>
	export default {
		props: ['title'],
	};
</script>

<template>
	<section class="section">
		<h2 class="section__title">
			{{ title }}
		</h2>

		<div class="section__content">
			<slot/>
		</div>
	</section>
</template>

<style lang="scss">
	.section {
		margin-bottom: 48px;

		&:last-child {
			margin-bottom: 0;
		}

		@media (min-width: 480px) {
			&__content {
				padding-left: 16px;
			}
		}
	}
</style>
