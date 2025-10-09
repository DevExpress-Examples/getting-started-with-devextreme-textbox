<script setup lang="ts">
import { ref } from 'vue';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import { DxTextBox } from 'devextreme-vue/text-box';
import type { DxTextBoxTypes } from 'devextreme-vue/text-box';
import notify from 'devextreme/ui/notify';

const textBoxValue = ref<string>('');

const maskRules = {
  X: /[02-9]/,
};

const onValueChanged = (e: DxTextBoxTypes.ValueChangedEvent): void => {
  textBoxValue.value = e.value ?? '';
};

const onEnterKey = (): void => {
  notify('The Enter key pressed', 'success', 2000);
};
</script>

<template>
  <div id="app-container">
    <div id="textbox-container">
      <DxTextBox
        id="text-box"
        label="Full Name"
        label-mode="floating"
        @value-changed="onValueChanged"
        @enter-key="onEnterKey"
      />
      
      <DxTextBox
        id="text-box-masked"
        label="Phone Number"
        label-mode="floating"
        mask="+1 (000) 000-0000"
        :mask-rules="maskRules"
      />
      
      <DxTextBox
        id="text-box-password"
        label="Password"
        label-mode="floating"
        mode="password"
      />
      
      <DxTextBox
        id="text-box-with-placeholder"
        placeholder="Enter your name here..."
      />
      
      <DxTextBox
        id="text-box-disabled"
        label="Disabled"
        label-mode="floating"
        :disabled="true"
        value="John Smith"
      />
    </div>
    
    <div id="value-container">
      The TextBox value is: <span id="textbox-value">{{ textBoxValue }}</span>
    </div>
  </div>
</template>

<style scoped>
#app-container {
  width: 900px;
  position: relative;
}

#textbox-container {
  margin-bottom: 20px;
}

#text-box,
#text-box-masked,
#text-box-password,
#text-box-with-placeholder,
#text-box-disabled {
  margin-bottom: 20px;
}

#value-container {
  font-weight: bold;
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  background-color: #f9f9f9;
}
</style>
