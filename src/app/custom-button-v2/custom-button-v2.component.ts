import { Component, HostBinding, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';

type ButtonType = 'simple' | 'pill' | '3D';

@Component({
  selector: 'button[custom-button-v2], a[custom-button-v2]',
  standalone: true,
  imports: [CommonModule],
  template: '<ng-content></ng-content>',
})
export class CustomButtonV2Component {
  @Input() buttonType: ButtonType = 'simple';
  @Input() disabled: boolean = false;
  @HostBinding('class.opacity-50')
  @HostBinding('class.cursor-not-allowed')
  get disabledClass() {
    return this.disabled;
  }
  @HostBinding('class') get buttonTypeClass() {
    switch (this.buttonType) {
      case 'simple':
        return 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded';
      case 'pill':
        return 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full';
      case '3D':
        return 'bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded';
    }
  }
}
