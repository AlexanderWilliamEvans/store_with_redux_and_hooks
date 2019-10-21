import React, { Fragment} from 'react';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';
import { IoIosSettings, IoMdPerson } from 'react-icons/io';
import './Navbar.scss';
import { Merchandise } from '../Merchandise/Merchandise';
import { Name } from '../Name';
import { Counter } from '../Counter';

export default function Navbar(){
    
    return(
       <BrowserRouter>
            <Fragment>
                <nav className="bontrax-navbar">
                    <ul className="bontrax-navbar-pages">
                    <li><Link to="/" className="bontrax-links">GIS</Link></li>
                    <li><Link to="/Name" className="bontrax-links">Kartvy</Link></li>
                    <li><Link to="/Counter" className="bontrax-links">Statistik</Link></li>
                    </ul>
                    <div style={{float:'right'}}>
                    <span><IoIosSettings style={{color:'white', height:'2em', width:'2em'}}/>></span>
                    <span><IoMdPerson style={{color:'white', height:'2em', width:'2em'}}/></span>
                    </div>
                </nav>
                <Switch>
                    <Route exact path="/" component={ Merchandise } />
                    <Route path="/kartvy" component={ Counter } />
                    <Route path="/statistik" component={ Name } />
                </Switch>
            </Fragment>
       </BrowserRouter>
      
    );
} 