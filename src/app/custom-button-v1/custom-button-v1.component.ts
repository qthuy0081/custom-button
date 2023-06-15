import { Component, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule, IconDefinition } from '@fortawesome/angular-fontawesome';
type ButtonMode = 'button' | 'internalLink' | 'externalLink';
type ButtonType = 'simple' | 'pill' | '3D';
@Component({
  selector: 'custom-button-v1',
  templateUrl: './custom-button-v1.component.html',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
})
export class CustomButtonV1Component {
  @Input() buttonText!: string;
  @Input() buttonContent!: TemplateRef<any>;
  @Input() buttonMode: ButtonMode = 'button';
  @Input() icon!: IconDefinition;
  @Input() url!: string;
  @Input() buttonType: ButtonType = 'simple';
  @Input() disabled: boolean = false;

  get buttonTypeClass() {
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
