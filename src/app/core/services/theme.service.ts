import { DOCUMENT } from '@angular/common';
import { Injectable, effect, inject, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  #document = inject(DOCUMENT);

  readonly theme = signal<Theme>(this.#readStored());

  constructor() {
    effect(() => {
      const theme = this.theme();
      this.#document.documentElement.setAttribute('data-theme', theme);
      try {
        localStorage.setItem(STORAGE_KEY, theme);
      } catch { /* storage unavailable: keep in memory only */ }
    });
  }

  public toggle() {
    this.theme.update((theme) => (theme === 'light' ? 'dark' : 'light'));
  }

  #readStored(): Theme {
    try {
      return localStorage.getItem(STORAGE_KEY) === 'dark' ? 'dark' : 'light';
    } catch {
      return 'light';
    }
  }
}
