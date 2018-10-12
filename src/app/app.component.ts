// importation package Component '@angular/core'
import { Component } from '@angular/core';

// definition du composant, qui doit contenir au moins 2 elements selector et template
@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`,
})

// export du nouveau compsant ainsi cree pour etre disponible aux autres modules
export class AppComponent  { name = 'Angular'; }