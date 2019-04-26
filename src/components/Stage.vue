<script>
	import bus from '~/bus.js';

	export default {
		data() {
			return {
				navigate: false,
			};
		},
		methods: {
			react(event) {
				this.navigate = event;
			},
		},
		mounted() {
			bus.$on('state', this.react);
		},
	};
</script>

<template>
	<div :class="{'stage': true, 'has-navigation': navigate}">
		<slot/>
	</div>
</template>

<style lang="scss">
	.stage {
		position: relative;
		overflow: hidden;

		height: 100vh;
		width: 100vw;
		vertical-align: middle;

		&::before {
			content: '';
			display: inline-block;
			height: 100%;
			width: 0;

			vertical-align: middle;
		}
	}
</style>
