<script>
	export default {
		props: ['name', 'address', 'description'],
	};
</script>

<template>
	<article class="project">
		<h3 class="project__title">
			<a :href="address" rel="noopener">
				{{ name }}
			</a>
		</h3>

		<p class="project__description">
			{{ description }}
		</p>
	</article>
</template>

<style lang="scss">
	.project {
		margin-bottom: 24px;

		&__title {
			margin-bottom: 4px;
		}
	}
</style>
