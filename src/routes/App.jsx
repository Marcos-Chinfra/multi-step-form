import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import useInitialState from '../Hooks/useInitialState'
import AppContext from '../context/AppContext';
import Information from '../containers/Information';
import Plans from '../containers/Plans';
import Complements from '../containers/Complements';
import Summary from '../containers/Summary';
import Success from '../containers/Success';
// import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';
import '../style/index.css'

const App = () => {
    const initialState = useInitialState();
    return (
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Layout >
                    <Routes>
                        <Route exact path='/' element={<Information />}/>
                        <Route exact path='/select-plan' element={<Plans />}/>
                        <Route exact path='/add-ons' element={<Complements />}/>
                        <Route exact path='/summary' element={<Summary />}/>
                        <Route exact path='/success' element={<Success />}/>
                        {/* <Route exact path='*' element={<NotFound />}/> */}
                    </Routes>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;