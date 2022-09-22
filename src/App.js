import React from 'react';
import { BrowserRouter as Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Navbar, Exchanges, Homepage, Cryptocurrencies, News, CryptoDetails } from "./components";
import './App.css';

const App = () => {
  return (
    <div className='app' >
        <div className='navbar' >
            <Navbar />

        </div>
        <div className='main' >
            <Layout>
                <div className='routes' >
                    <Routes>
                        <Route path="/">
                            <Homepage />
                        </Route>
                        <Route path="/exchanges">
                            <Exchanges />
                        </Route>
                        <Route path="/cryptocurrencies">
                            <Cryptocurrencies />
                        </Route>
                        <Route path="/crypto/:coinId">
                            <CryptoDetails />
                        </Route>
                        <Route path="/news">
                            <News />
                        </Route>
                        <Route path="*" >
                            <div>
                                <h2>404 Page not found, back to homepage?</h2>
                            </div>
                            
                        </Route>
                    </Routes>

                </div>

            </Layout>

        </div>
        <div className='footer' >
           

        </div>
    </div>
  )
}

export default App