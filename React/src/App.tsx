import { useCallback, useState } from 'react';
import './App.css';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import TextBox from 'devextreme-react/text-box';
import type { TextBoxTypes } from 'devextreme-react/text-box';
import notify from 'devextreme/ui/notify';

function App(): JSX.Element {
  const [textBoxValue, setTextBoxValue] = useState<string>('');

  const maskRules = {
    X: /[02-9]/,
  };

  const onValueChanged = useCallback((e: TextBoxTypes.ValueChangedEvent) => {
    setTextBoxValue(e.value ?? '');
  }, []);

  const onEnterKey = useCallback(() => {
    notify('The Enter key pressed', 'success', 2000);
  }, []);

  return (
    <div id="app-container">
      <div id="textbox-container">
        <TextBox
          id="text-box"
          label="Full Name"
          labelMode="floating"
          onValueChanged={onValueChanged}
          onEnterKey={onEnterKey}
        />
        
        <TextBox
          id="text-box-masked"
          label="Phone Number"
          labelMode="floating"
          mask="+1 (000) 000-0000"
          maskRules={maskRules}
        />
        
        <TextBox
          id="text-box-password"
          label="Password"
          labelMode="floating"
          mode="password"
        />
        
        <TextBox
          id="text-box-with-placeholder"
          placeholder="Enter your name here..."
        />
        
        <TextBox
          id="text-box-disabled"
          label="Disabled"
          labelMode="floating"
          disabled={true}
          defaultValue="John Smith"
        />
      </div>
      
      <div id="value-container">
        The TextBox value is: <span id="textbox-value">{textBoxValue}</span>
      </div>
    </div>
  );
}

export default App;
