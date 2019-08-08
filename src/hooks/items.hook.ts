import { Observable, Subscription } from 'rxjs';
import { useEffect, useState } from 'react';
import { Item } from '../store/items/items.model';
import { itemQuery } from '../store/items/items.query';
import { itemService } from '../store/items/items.service';



interface ItemState { items: Item[]}

function onEmit<T>(source$:Observable<T>, nextFn:(value: T) => void): Subscription {
  return source$.subscribe(nextFn, console.error);
}

export const itemFacades = (name: string): [ItemState] => {

    const [state, setState] = useState({ items: [] });
    


    useEffect(() => {
        const subscriptions: Subscription[] = [
            onEmit<Item[]>(itemQuery.items$, items => setState(state => ({ ...state, items })))
        ]

        itemService.getSomeItems(name);
        return () => { subscriptions.map(sub => { sub.unsubscribe})}
    }, [name])

    return [state]
}

