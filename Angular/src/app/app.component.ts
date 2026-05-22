import { Component } from '@angular/core';
import notify from 'devextreme/ui/notify';
import { DxTextBoxTypes } from 'devextreme-angular/ui/text-box';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent {
  textBoxValue = '';

  maskRules: Record<string, RegExp> = {
    X: /[02-9]/,
  };

  onValueChanged(e: DxTextBoxTypes.ValueChangedEvent): void {
    this.textBoxValue = e.value ?? '';
  }

  onEnterKey(): void {
    notify('The Enter key pressed', 'success', 2000);
  }
}
