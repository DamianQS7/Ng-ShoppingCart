import { computed, Injectable, Signal, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { environment } from '../../environments/environment';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { Database, DatabaseReference, getDatabase, push, ref, remove } from 'firebase/database';
import { object } from 'rxfire/database';
import { map } from 'rxjs';
import { Category, DatabaseItems } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  // Properties
  private category = signal<Category>('groceries')
  private readonly app: FirebaseApp = initializeApp(environment.firebase);
  private readonly database: Database = getDatabase(this.app);
  private readonly shoppingList: Signal<DatabaseReference> = computed(() => ref(this.database, "shoppingList"));
  
  private itemsInDb$ = object(this.shoppingList()).pipe(
    map(change => {
      const data = change.snapshot.val();
      if (data === undefined || data === null){
        return [] as DatabaseItems
      } else {
        return Object.entries(change.snapshot.val()) as DatabaseItems
      }
    })
  );
  // Computed properties
  private itemsInDb = toSignal(this.itemsInDb$);
  private updatedItemsInDb = computed(() => this.itemsInDb() == undefined ? [] as DatabaseItems: this.itemsInDb());
  private groceries = computed(() => this.updatedItemsInDb()?.filter(item => item[1].category === 'groceries'));
  private veggies = computed(() => this.updatedItemsInDb()?.filter(item => item[1].category === 'veggies'));
  private pharmacy = computed(() => this.updatedItemsInDb()?.filter(item => item[1].category === 'pharmacy'));

  itemsToDisplay = computed(() => {
    if(this.category() === 'groceries'){
      return this.groceries()
    } else if (this.category() === 'veggies') {
      return this.veggies()
    } else {
      return this.pharmacy()
    }
  })
  groceriesQuantity = computed(() => this.groceries()?.length || 0)
  veggiesQuantity = computed(() => this.veggies()?.length || 0)
  pharmacyQuantity = computed(() => this.pharmacy()?.length || 0)
  currentCategory = computed(() => this.category());

  // Methods
  addItemsToCart = (item: string) => push(this.shoppingList(), {item: item, category: this.category()})
  
  removeItemsFromCart(itemId: string): void {
    const itemLocationInDb = ref(this.database, `shoppingList/${itemId}`);
    remove(itemLocationInDb);
  }

  changeSection = (section: Category): void => this.category.set(section)
}
