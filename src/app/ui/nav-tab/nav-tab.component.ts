import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Category } from '../../types/types';

@Component({
  selector: 'app-nav-tab',
  imports: [],
  template: `
  <button 
    type="button"
    class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
    <div class="relative">
      <span class="absolute top-0 left-2 inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold bg-slate-100 rounded-full">
        {{ itemsQuantity() }}
      </span>
      <ng-content/>
    </div>
    <span class="text-sm text-slate-100">{{ buttonText() }}</span>
  </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavTabComponent {
  itemsQuantity = input.required<number>();
  buttonText = input.required<string>();
}
