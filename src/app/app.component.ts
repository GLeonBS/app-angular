import { ChangeDetectorRef, Component } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  mobileQuery: MediaQueryList;

  navigation = [
    {
      label: 'Página inicial',
      path: '/'
    },{
      label: 'Dashboard',
      path: '/dashboard'
    },
    {
      label: 'Produtos',
      path: '/produtos'
    },{
      label: 'Carrinho',
      path: '/cart'
    },{
      label: 'Tabela',
      path: '/table'
    },{
      label: 'Contato',
      path: '/contato'
    },
  ]

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }
}
