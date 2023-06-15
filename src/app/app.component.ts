import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomButtonV1Component } from './custom-button-v1/custom-button-v1.component';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CustomButtonV2Component } from './custom-button-v2/custom-button-v2.component';
import { AngularIconComponent } from './angular-icon.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CustomButtonV1Component,
    FontAwesomeModule,
    CustomButtonV2Component,
    AngularIconComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'custom-component';
  faExternalLink = faExternalLink;
}
