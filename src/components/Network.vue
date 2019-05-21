<script>
	import icons from '~/icons';

	export default {
		props: ['title', 'address', 'type'],
		computed: {
			icon: function() {
				return icons[this.type];
			},
		},
	};
</script>

<template>
	<a :class="['network', 'network--'+type]"
	   :href="address"
	   :title="title"
	   rel="me noopener">
		<component :is="icon"/>
	</a>
</template>

<style lang="scss">
	@import '../assets/style/variables';

	.network {
		position: relative;

		display: flex;
		flex-grow: 1;
		justify-content: center;
		height: 50px;

		color: #ccc;
		font-size: 28px;
		text-decoration: none;

		transition: color 250ms, opacity 250ms, background 250ms;

		svg {
			width: 100%;
			max-width: 26px;
		}

		&.network:hover {
			color: $color-blank;
			opacity: 1 !important;
		}
	}

	.network--twitter:hover {
		background-color: #55acee;
	}

	.network--github:hover {
		background-color: #333;
	}

	.network--xing:hover {
		background-color: #cfdc00;
	}

	.network--linkedin:hover {
		background-color: #0077b5;
	}

	.network--stackoverflow:hover {
		background-color: #f48024;
	}
</style>
