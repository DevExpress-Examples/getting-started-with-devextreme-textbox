<template>
    <div id="container">
        <DxTextBox
            v-model:value="value"
            mode="url"
            label="Link"
            label-mode="floating"
            :max-length="20"
            :show-clear-button="true"
            @enterKey="onEnterKey($event)"
        /> 
    </div>
</template>

<script>
    import { DxTextBox } from 'devextreme-vue/text-box';

    export default {
        components: {
            DxTextBox
        },
        data() {
            return {
                value: ""
            }
        },
        methods: {
            onEnterKey() {
                console.log(this.value);
            }
        }
    }
</script>

<style>
    #container {
        width: 250px;
    }
</style>