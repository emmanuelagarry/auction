import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Item } from './items.model';

export interface ItemsState extends EntityState<Item> { }

@StoreConfig({ name: 'items' })
export class ItemsStore extends EntityStore<ItemsState, Item> {
    constructor() { 
        super()
    }
}

export const itemStore  = new ItemsStore()