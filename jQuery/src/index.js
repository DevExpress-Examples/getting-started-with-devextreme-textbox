$(() => {
  const textBox = $('#text-box').dxTextBox({
    label: 'Full Name',
    labelMode: 'floating',
    onValueChanged(e) {
      $('#textbox-value').text(e.value);
    },
    onEnterKey() {
      DevExpress.ui.notify('The Enter key pressed', 'success', 2000);
    },
  }).dxTextBox('instance');

  $('#text-box-masked').dxTextBox({
    label: 'Phone Number',
    labelMode: 'floating',
    mask: '+1 (000) 000-0000',
    maskRules: {
      X: /[02-9]/,
    },
  });

  $('#text-box-password').dxTextBox({
    label: 'Password',
    labelMode: 'floating',
    mode: 'password',
  });

  $('#text-box-with-placeholder').dxTextBox({
    placeholder: 'Enter your name here...',
  });

  $('#text-box-disabled').dxTextBox({
    label: 'Disabled',
    labelMode: 'floating',
    disabled: true,
    value: 'John Smith',
  });
});
