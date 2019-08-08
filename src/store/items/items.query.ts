import { QueryEntity } from '@datorama/akita';
import { ItemsState, itemStore } from './items.store';
import { Observable } from 'rxjs';
import { Item } from './items.model';

export class ItemsQuery extends QueryEntity<ItemsState, Item>{
    items$: Observable<Item[]> = this.selectAll();
}

export const itemQuery = new ItemsQuery(itemStore)