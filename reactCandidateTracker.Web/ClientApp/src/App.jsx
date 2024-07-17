import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './Pages/Home';
import CandidateCountContextComponent from './Pages/CandidateCountContext';
import AddCandidate from './Pages/AddCandidate';
import Pending from './Pages/Pending';
import Confirmed from './Pages/Confirmed';
import Rejected from './Pages/Rejected';
import ViewDetails from './components/ViewDetails';
const App = () => {
    return (
        <CandidateCountContextComponent>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/AddCandidate' element={<AddCandidate />} />
                    <Route path='/Confirmed' element={<Confirmed />} />
                    <Route path='/Pending' element={<Pending />} />
                    <Route path='/Rejected' element={<Rejected />} />
                    <Route path='/ViewDetails/:id' element={<ViewDetails />} />
                </Routes>
            </Layout>
        </CandidateCountContextComponent>
    );
}

export default App;