import { Component } from '@angular/core';
import { SearchComponent } from '../../../shared/components/search/search.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SearchComponent],
  template: `
    <header>
      <div class="navigation">
        <div class="navigation-container">
          <div class="navigation__chrome">
            <div class="navigation__chrome__links">
              <app-search />
            </div>
          </div>
        </div>
        <div class="container navigation__nav">
          <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
              <a class="navigation__nav__logo navigation__nav__logo--dlr" href="https://disneyland.disney.go.com" target="_self" aria-label="Disneyland Logo">
                <img src="/assets/img/logos/dlr.svg" alt="Disneyland Logo">
              </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link" href="#">Tickets & Parks</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Places to Stay</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Things to Do</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Magic Key</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Shop</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                    <img alt="shopping cart icon" class="section-title__link__icon--cart" src="/assets/img/icons/pep/cart-empty.svg" loading="lazy">
                      Cart
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">My DisneyLand</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  `,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
