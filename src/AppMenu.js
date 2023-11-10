//Wendel Cavalcante

import React from 'react';
import { Menubar } from 'primereact/menubar';
import LoginForm from './components/login';
import MovimentoMagistrado from './components/movimento-magistrado';
import { Routes, Route, Link } from "react-router-dom";

export default function TemplateDemo() {
    const items = [
        {
            label: 'Movimento Magistrado',
            icon: 'pi pi-fw pi-book',
            url: '/react-sinapses/movimento-magistrado'
        },
        {
            label: 'Login',
            icon: 'pi pi-fw pi-power-off',
            url: '/react-sinapses/login'
        },
    ];

    const start = "React Sinapses 2";

    return (
        <div className="card">
            <Menubar model={items} start={start}/> 
            <Routes>
                <Route path='/react-sinapses/movimento-magistrado' Component={MovimentoMagistrado} />
                <Route path='/react-sinapses/login' Component={LoginForm} />
                <Route path="*" component={() => <h1>Page not found</h1>} />
            </Routes>
        </div>
    )
}
