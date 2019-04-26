<template>
	<Layout>
		<Profile/>
	</Layout>
</template>

<script>
	import Layout from '~/layouts/Default.vue';
	import Profile from '~/components/Profile.vue';

	export default {
		components: {
			Layout,
			Profile,
		},
	};
</script>
