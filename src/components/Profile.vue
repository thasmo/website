<script>
	import {CodeIcon} from '~/icons';

	export default {
		components: {
			CodeIcon,
		},
	};
</script>

<template>
	<div class="profile" itemscope="itemscope" itemtype="http://schema.org/Person">
		<figure class="profile__figure">
			<span class="profile__link">
				<img class="profile__photo"
					 itemprop="image"
					 src="https://gravatar.com/avatar/39263d15a3b0838a938aaaa59dde5c06?s=256"
					 srcset="https://gravatar.com/avatar/39263d15a3b0838a938aaaa59dde5c06?s=256 1x,https://gravatar.com/avatar/39263d15a3b0838a938aaaa59dde5c06?s=512 2x"
					 width="256" height="256"
					 alt="Photo of Thomas Deinhamer">
			</span>

			<a class="profile__employer"
			   href="https://www.pixelart.at/"
			   rel="noopener">
				<img src="https://gravatar.com/avatar/573dc407c63009618cbc693f21c23428?s=256"
					 srcset="https://gravatar.com/avatar/573dc407c63009618cbc693f21c23428?s=256 1x, https://gravatar.com/avatar/573dc407c63009618cbc693f21c23428?s=512 2x"
					 width="256"
					 height="256"
					 alt="Logo of pixelart">
			</a>
		</figure>

		<p class="profile__quote">
			<CodeIcon/>
			<span>web matters,<br>online and offline.</span>
		</p>
	</div>
</template>

<style lang="scss">
	@import '../assets/style/variables';

	.profile {
		position: relative;
		top: -30px;

		display: inline-block;
		width: 256px;
		max-width: 99%;

		background: none;
		vertical-align: middle;
		transition: opacity 250ms, filter 250ms, transform 250ms;

		&__figure {
			position: relative;
			margin: 0;
		}

		&__link {
			display: block;
			overflow: hidden;
			border-radius: 100%;
		}

		&__photo {
			display: block;
			max-width: 100%;
			height: auto;
			user-select: none;
		}

		&__employer {
			position: absolute;
			right: 0;
			bottom: 0;
			opacity: 1;

			display: block;
			width: 72px;
			height: 72px;

			overflow: hidden;

			border: 1px solid $color-blank;
			border-radius: 2px;
			background: $color-blank;

			transition: opacity 250ms;
		}

		&__quote {
			opacity: 1;

			float: left;
			margin: 10px 0 0 0;

			font-family: 'Roboto Condensed', sans-serif;
			font-size: 28px;
			font-weight: 300;
			text-align: right;
			line-height: 1.2;
			letter-spacing: -.01em;
			white-space: nowrap;

			transition: opacity 250ms;

			svg {
				display: inline-block;
				vertical-align: baseline;
				max-width: 24px;
				color: $color-accent;
			}
		}

		@media(min-width: 480px) {
			top: auto;
		}
	}

	.has-navigation .profile {
		@media(max-width: 480px) {
			&__link,
			&__photo {
				filter: blur(2.5px);
			}

			&__employer,
			&__quote {
				opacity: 0;
			}
		}
	}
</style>
