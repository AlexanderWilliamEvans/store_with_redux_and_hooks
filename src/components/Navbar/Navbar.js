import React, { Fragment} from 'react';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';
import { IoIosSettings, IoMdCart } from 'react-icons/io';
import './Navbar.scss';
import { Merchandise } from '../Merchandise/Merchandise';
import { Cart } from '../Cart/Cart';
import { Counter } from '../Counter';

export default function Navbar(){
    
    return(
       <BrowserRouter>
            <Fragment>
                <nav className="bontrax-navbar">
                    <span className="navbar-header">The Fuzzy store</span>
                    <ul className="bontrax-navbar-pages">
                    <li><Link to="/" className="bontrax-links">Start</Link></li>
                    <li><Link to="/Name" className="bontrax-links">Kartvy</Link></li>
                    <li><Link to="/Counter" className="bontrax-links">Statistik</Link></li>
                    </ul>
                    <div style={{float:'right'}}>
                    <span><IoIosSettings style={{color:'white', height:'2em', width:'2em'}}/>></span>
                    <span><Link to="/Cart"><IoMdCart style={{color:'white', height:'2em', width:'2em'}}/></Link></span>
                    </div>
                </nav>
                <Switch>
                    <Route exact path="/" component={ Merchandise } />
                    <Route path="/kartvy" component={ Counter } />
                    <Route path="/Cart" component={ Cart } />
                </Switch>
            </Fragment>
       </BrowserRouter>
      
    );
} 