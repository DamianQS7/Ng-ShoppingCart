import { computed, Injectable, signal } from '@angular/core';
import { Category, Theme } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class SectionThemeService {

  // Properties
  private currentSection = signal<Category>('groceries');

  // Computed properties
  currentTheme = computed(() => {
    const themes: Record<string, Theme> = {
      groceries: { image: 'assets/red-panda.jpg', bgColor: 'bg-amber-100/70', btnColor: 'bg-amber-700/80', navColor: 'text-amber-700/70'},
      veggies: { image: 'assets/beaver.jpg', bgColor: 'bg-green-100', btnColor: 'bg-emerald-700/60', navColor: 'text-emerald-800/80'},
      pharmacy: { image: 'assets/snow-leopard2.jpg', bgColor: 'bg-sky-100', btnColor: 'bg-sky-700/80', navColor: 'text-sky-700/80'}
    }

    return themes[this.currentSection()] ?? { image: '', bgColor: 'bg-groceries', btnColor: 'btn-groceries'}
  })
  
  // Methods
  changeSection = (newSection: Category): void => this.currentSection.set(newSection);
}
