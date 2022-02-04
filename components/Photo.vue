<template>
	<v-col>
		<v-img :src="photo.url" width="200" height="200"></v-img>
	</v-col>
</template>

<script>
export default {
	props: {
		photo: {
			type: Object,
			required: true
		}
	}
}
</script>