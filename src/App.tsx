// import React, { Suspense, lazy } from 'react';
import * as React from "react";

import { render } from 'react-dom';


const Home = React.lazy(() => import('./components/Home'));


  
import { Router } from "@reach/router";



function App () {
    return (
        <div>
        

            <React.Suspense fallback={<div>Loading...</div>}>
                <Router>
                     <Home  path="/"/>
                    </Router>
            </React.Suspense>
        </div>
    )
}

render(
<App key="App"/> , document.getElementById('app')
);