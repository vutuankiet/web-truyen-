import './App.css';
import * as Route from 'react-router-dom'
import {Navigate} from 'react-router-dom'
import {Home} from "./pages/Home";
import {Detail} from "./pages/Detail";
import {Layout} from "./pages/Layout";
import {CreateBook} from "./pages/Author/CreateBook";
import {LayoutAuthor} from "./pages/Author/LayoutAuthor";
import {createContext, useState} from "react";

function App() {

    return (
        <Route.BrowserRouter>
            <Route.Routes>
                <Route.Route path={'/'} element={<Layout></Layout>}>
                    <Route.Route index path={'home'} element={<Home/>}/>
                    <Route.Route path={'detail'}
                                 element={<Detail title={'hello kiet'} style={{color: 'red'}}></Detail>}/>
                    <Route.Route path={'/'} element={<Navigate to={'home'}/>}/>
                </Route.Route>
                <Route.Route path={'/author'} element={<LayoutAuthor></LayoutAuthor>}>
                    <Route.Route index path={'createbook'} element={<CreateBook/>}/>
                </Route.Route>
            </Route.Routes>
        </Route.BrowserRouter>

    )
}

export default App;
