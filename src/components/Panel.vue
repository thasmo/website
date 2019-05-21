<script>
	import projects from '~/data/projects.json';
	import channels from '~/data/channels.json';
	import Section from '~/components/Section.vue';
	import Project from '~/components/Project.vue';
	import Contact from '~/components/Contact.vue';

	export default {
		data() {
			return {
				projects,
				channels,
			};
		},
		components: {
			Section,
			Project,
			Contact,
		},
	};
</script>

<template>
	<div class="panel" role="main">
		<section class="panel__content">
			<header class="section">
				<h1>Thomas Deinhamer</h1>

				<p>
					<b>Web-Developer from Salzburg, Austria,</b>
					<wbr>pushing the web's boundaries at &#32;<a href="https://www.pixelart.at/" rel="noopener">pixelart</a>.
				</p>
			</header>

			<Section title="Side Projects">
				<Project v-for="project in projects"
						 :key="project.address"
						 :name="project.name"
						 :address="project.address"
						 :description="project.description" />
			</Section>

			<Section title="Contact">
				<p v-for="channel in channels">
					<Contact :type="channel.type"
							 :address="channel.address"
							 :label="channel.label" />
				</p>
			</Section>
		</section>
	</div>
</template>

<style lang="scss">
	@import '../assets/style/variables';

	.panel {
		opacity: 0;
		visibility: hidden;
		overflow: auto;

		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		z-index: 1;

		width: 100vw;

		text-align: left;

		background-color: transparentize($color-subtle, 0.1);

		transition: visibility 250ms, opacity 250ms, transform 250ms;

		-webkit-overflow-scrolling: touch;

		&__content {
			padding: 25px;
		}

		@media (prefers-color-scheme: dark) {
			background-color: transparentize($color-void, 0.1);
		}

		@media (min-width: 480px) {
			opacity: 1;

			right: 50px;
			bottom: 0;

			width: 640px;
			max-width: calc(100vw - 50px);

			background: $color-blank;

			transform: translateX(100%);

			&__content {
				padding: 75px 125px 75px 75px;
			}

			@media (prefers-color-scheme: dark) {
				background-color: $color-void;
			}
		}
	}

	.has-navigation .panel {
		opacity: 1;
		visibility: visible;

		@media (min-width: 480px) {
			opacity: 1;
			transform: translateX(0);
		}
	}
</style>
