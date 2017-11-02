<template>

    <div>
        <success-setting
                v-if="language"
        ></success-setting>
    </div>

</template>

<script>
    import successSetting from  '../components/successSetting';
	export default {
        components: {
        	'success-setting': successSetting
        }
	}
</script>

<style scoped>

</style>