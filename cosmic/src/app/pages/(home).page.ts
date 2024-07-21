import { Component } from '@angular/core';

import { AnalogWelcomeComponent } from './analog-welcome.component';

@Component({
  selector: 'cosmic-home',
  standalone: true,
  imports: [AnalogWelcomeComponent],
  template: `
     <cosmic-analog-welcome/>
  `,
})
export default class HomeComponent {
}
