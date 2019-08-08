import * as React from "react";
import { useState } from 'react';
import { itemFacades } from '../hooks/items.hook';
import GitDetails from './GitDetails'

const Home = (props) => {
    let [user, setUser] = useState('');
    const [usersData] = itemFacades(user);

  const inputChange = (e) => {
      user = e.target.value
  } 
  
    return (
        <div>
            
        <form 
        onSubmit ={e => {
            e.preventDefault();
            setUser(user);
        }}>
          <input placeholder="something" type="text" onChange={inputChange}/>
          <button type="submit">submit</button>
        </form>
        
        <br />
        {
          usersData.items.length === 0 ? (<div></div>) : (usersData.items.map(({name, id, avatar_url, public_repos, bio})=> (
            <GitDetails
            key = {id}
            name = {name}
              avatar_url={avatar_url}
              public_repos={public_repos}
              bio = {bio}
            />
          )))
        }
         </div>
    );
}

export default Home