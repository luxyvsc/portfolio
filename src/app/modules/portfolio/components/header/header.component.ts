import { Component, inject } from '@angular/core';

//services
import { ThemeService } from '../../../../core/services/theme.service';
import { I18nService } from '../../../../core/services/i18n.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public readonly theme = inject(ThemeService);
  public readonly i18n = inject(I18nService);
}
