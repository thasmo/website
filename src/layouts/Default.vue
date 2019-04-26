<template>
	<Stage>
		<slot/>
		<Panel/>
		<Bar/>
	</Stage>
</template>

<script>
	import Bar from '~/components/Bar.vue';
	import Panel from '~/components/Panel.vue';
	import Stage from '~/components/Stage.vue';

	export default {
		components: {
			Bar,
			Panel,
			Stage,
		},
	};
</script>
