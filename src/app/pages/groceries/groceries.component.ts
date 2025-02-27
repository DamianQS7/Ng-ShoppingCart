import { SectionThemeService } from './../../services/section-theme.service';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NavTabComponent } from '../../ui/nav-tab/nav-tab.component';
import { Category } from '../../types/types';

@Component({
  selector: 'app-groceries',
  imports: [ReactiveFormsModule, NavTabComponent],
  templateUrl: './groceries.component.html',
  host: {
    class: 'flex flex-col h-dvh font-light max-w-[428px] mx-auto',
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class GroceriesComponent {
  
  // Services
  protected firebaseService = inject(FirebaseService);
  protected sectionThemeService = inject(SectionThemeService);

  // Properties
  input = new FormControl<string>('');

  // Methods
  addItem(): void {
    const value = this.input.getRawValue();
    if (!value) return;

    this.firebaseService.addItemsToCart(value);
    this.input.reset();
  }

  removeItem = (itemId: string): void => this.firebaseService.removeItemsFromCart(itemId);

  changeCategory(category: Category): void {
    this.firebaseService.changeSection(category);
    this.sectionThemeService.changeSection(category);
  }
}
