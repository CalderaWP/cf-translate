<template>
    <div>

        <div class="caldera-config-group">
            <label for="cf-translations-success_message">
                {{strings.success_message}}
            </label>

            <div class="caldera-config-field">
                <input
                    type="text"
                    id="cf-translations-success_message"
                    v-model="form.info.success"
                />
            </div>

        </div>

    </div>
</template>

<script>

</script>

<style scoped>

</style>