<script>
	import bus from '~/bus.js';
	import channels from '~/data/channels.json';
	import Network from '~/components/Network.vue';

	import {
		DotCircleIcon,
		CircleIcon,
	} from '~/icons';

	export default {
		data: () => {
			return {
				state: false,
				channels,
			};
		},
		methods: {
			activate() {
				this.state = true;
				bus.$emit('state', this.state);
			},
			deactivate() {
				this.state = false;
				bus.$emit('state', this.state);
			},
		},
		components: {
			Network,
			DotCircleIcon,
			CircleIcon,
		},
	};
</script>

<template>
	<aside class="bar">
		<p class="bar__social">
			<Network v-for="channel in channels"
					 v-if="channel.primary"
					 :key="channel.type"
					 :address="channel.address"
					 :title="channel.title"
					 :type="channel.type" />
		</p>

		<button class="bar__button bar__button--on"
				title="more information"
				v-if="!state"
				@click="activate">
			<CircleIcon/>
		</button>

		<button class="bar__button bar__button--off"
				title="less information"
				v-if="state"
				@click="deactivate">
			<DotCircleIcon/>
		</button>
	</aside>
</template>

<style lang="scss">
	@import '../assets/style/variables';

	.bar {
		display: block;
		position: fixed;
		bottom: 0;
		right: 0;
		z-index: 1;

		width: 100%;
		margin: 0;

		background-color: $color-blank;

		&__button {
			display: flex;
			flex-grow: 1;
			justify-content: center;

			float: right;
			height: 50px;
			width: 20%;

			font-size: 20px;
			text-align: center;

			transition: color 250ms;

			&:hover {
				color: $color-accent;
			}

			svg {
				width: 100%;
				max-width: 20px;
			}

			&--on {
				color: $color-base;
			}

			&--off {
				color: $color-accent;
			}
		}

		&__social {
			overflow: hidden;
			opacity: 1;

			display: flex;
			float: left;
			width: 80%;
			margin: 0;

			transition: opacity 250ms, background 250ms, transform 250ms;

			&:hover {
				.network {
					opacity: 0;
				}
			}
		}

		@media(min-width: 480px) {
			top: 0;
			right: 0;
			bottom: 0;

			width: auto;
			height: 100%;
			padding-top: 50px;

			&__button, &__social {
				float: none;
			}

			&__button {
				position: absolute;
				top: 0;
				right: 0;
				width: 100%;
			}

			&__social {
				flex-direction: column;
				width: 50px;
				height: 100%;
			}
		}

		@media (prefers-color-scheme: dark) {
			background-color: $color-void;

			&__button {
				&--on {
					color: $color-blank;
				}

				&--off {
					color: $color-accent;
				}
			}
		}
	}

	.has-navigation .bar {
		width: 20%;
		background-color: transparent;

		&__button {
			width: 100%;

			&--on {
				display: none;
			}

			&--off {
				display: flex;
			}
		}

		&__social {
			display: none;
		}

		@media(min-width: 480px) {
			width: auto;
			background-color: $color-blank;

			&__social {
				display: flex;
				opacity: 0;
				transform: translateX(100%);
			}

			@media (prefers-color-scheme: dark) {
				background-color: $color-void;
			}
		}
	}
</style>
