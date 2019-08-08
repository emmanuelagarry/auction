import { ItemsStore, itemStore } from './items.store';
import axios from 'axios';
class ItemsService {

    
     private api_path = "https://api.github.com/users/";
    constructor(private usersStore: ItemsStore) { }
    async getSomeItems(user: string) {
        if (user) {
            try {
            const {data} = await axios.get(`${this.api_path}${user}`)
            this.usersStore.set({data})
        } catch(e){
            console.log(e.message)
        }
          
        }
        }
        
//    this.usersStore.set([]);

};


export const itemService = new ItemsService(itemStore);

