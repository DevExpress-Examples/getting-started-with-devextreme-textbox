import React, { useState, useCallback } from 'react';

import 'devextreme/dist/css/dx.light.css';

import TextBox from 'devextreme-react/text-box'

function App() {
  const [value, setValue] = useState("");
  const onValueChange = useCallback((v) => {
    setValue(v)
  }, []);
  const onEnterKey = useCallback(() => {
    console.log(value)
  }, [value]);
  return (
    <div id="container">
      <TextBox 
        value={value}
        mode="url"
        label="Link"
        labelMode="floating"
        maxLength={20}
        showClearButton={true}
        onValueChange={onValueChange}
        valueChangeEvent="input"
        onEnterKey={onEnterKey}
      />
    </div>
  );
}

export default App;
