import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';

@Component({
    standalone: true,
    imports: [RouterModule],
    selector: 'bootcamp-root',
    template: `
      <header>
          <h1> Hola Soy Bob.</h1>
    </header>
    `,
})
export class AppComponent {
}
