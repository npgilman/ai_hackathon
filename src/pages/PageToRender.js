import LandingPage from './contentPages/LandingPage';
import FinAccPage from './contentPages/FinAccPage';
import Reports from './contentPages/Reports';

import { Routes, Route } from 'react-router-dom';

// page to render. should be variable content (ie switched out based on navbar/sidebar selections)

function PageToRender() {
    return (
        <div className='flex-fill'>
            <Routes>
                <Route path='/' exact element={<LandingPage />} />
                
                <Route path='/FinancialAccounting/' exact element={<FinAccPage />} />
                <Route path='/FinancialAccounting/Overview' exact element={<FinAccPage />} />
                
                <Route path='/Reports' exact element={<Reports />} />
            </Routes>
        </div>
    );
}

export default PageToRender;