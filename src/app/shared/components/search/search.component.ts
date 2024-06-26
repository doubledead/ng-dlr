import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  template: `
    <div role="search">
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      </form>
    </div>
  `,
  styleUrl: './search.component.scss'
})
export class SearchComponent {

}
