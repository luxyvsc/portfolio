import { DOCUMENT } from '@angular/common';
import { Injectable, effect, inject, signal } from '@angular/core';

import { Lang, TranslationKey, TRANSLATIONS } from '../i18n/translations';

const STORAGE_KEY = 'lang';

@Injectable({ providedIn: 'root' })
export class I18nService {
  #document = inject(DOCUMENT);

  readonly lang = signal<Lang>(this.#readStored());

  constructor() {
    effect(() => {
      const lang = this.lang();
      this.#document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
      this.#document.title = TRANSLATIONS[lang]['meta.title'];
      try {
        localStorage.setItem(STORAGE_KEY, lang);
      } catch { /* storage unavailable: keep in memory only */ }
    });
  }

  public setLang(lang: Lang) {
    this.lang.set(lang);
  }

  public t(key: TranslationKey): string {
    return TRANSLATIONS[this.lang()][key];
  }

  #readStored(): Lang {
    try {
      return localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'pt';
    } catch {
      return 'pt';
    }
  }
}
