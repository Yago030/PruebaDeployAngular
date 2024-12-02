import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>Hello {{value}}   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, iusto. Rerum qui cupiditate ratione doloribus sunt reiciendis repellendus quia, expedita sit quae dolorum inventore nesciunt culpa! Sit consectetur exercitationem blanditiis.</div>`,
})
export class AppComponent {
  value = 'World';
}
