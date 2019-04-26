<script>
	import icons from '~/icons';

	export default {
		props: ['label', 'address', 'type'],
		computed: {
			icon: function() {
				return icons[this.type];
			},
		},
	};
</script>

<template>
	<a class="contact" :href="address" rel="noopener">
		<component :is="icon"/>
		{{ label }}
	</a>
</template>

<style lang="scss">
	.contact {
		font-size: 18px;

		svg {
			position: relative;
			top: -2px;

			display: inline-block;
			max-width: 18px;
			margin-right: 5px;

			vertical-align: middle;
		}
	}
</style>
