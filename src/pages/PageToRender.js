import { Routes, Route } from 'react-router-dom';

import LandingPage from './contentPages/LandingPage';

// financial accounting
import FinancialAccounting from './contentPages/FinancialAccounting';
import GenerallyAcceptedAccountingPrinciples from './contentPages/GenerallyAcceptedAccountingPrinciples';
import FinancialStatements from './contentPages/FinancialStatements';

// managerial accounting
import ManagerialAccounting from './contentPages/ManagerialAccounting';
import CostAccounting from './contentPages/CostAccounting';
import Forecasting from './contentPages/Forecasting';
import CVPAnalysis from './contentPages/CVPAnalysis';

// auditing
import Auditing from './contentPages/Auditing';
import ExternalAuditing from './contentPages/ExternalAuditing';
import InternalAuditing from './contentPages/InternalAuditing'

// taxes
import TaxAccouting from './contentPages/TaxAccounting';
import TaxPlanning from './contentPages/TaxPlanning';
import TaxCompliance from './contentPages/TaxCompliance';
import IndividualTaxes from './contentPages/IndividualTaxes';

// others
import AccountingEthics from './contentPages/AccountingEthics';



// page to render. should be variable content (ie switched out based on navbar/sidebar selections)

function PageToRender() {
    return (
        <div className='flex-fill' style={{backgroundColor: "#D1D7E0"}}>
            <div style={{backgroundColor: "#1E1E1E", color: "#1E1E1E", padding: "0.5rem", textAlign:"right", fontSize: "30px"}}>
                <b style={{visibility: "hidden"}}>aiccountant</b>
            </div>
            <Routes>
                <Route path='/' exact element={<LandingPage />} />

                // financial accounting
                <Route path='/financial-accounting' exact element={<FinancialAccounting />} />
                <Route path='/financial-accounting/gaap' exact element={<GenerallyAcceptedAccountingPrinciples />} />
                <Route path='/financial-accounting/financial-statements' exact element={<FinancialStatements />} />
                
                
                <Route path='/managerial-accounting' exact element={<ManagerialAccounting />} />
                <Route path='/managerial-accounting/cost-accounting' exact element={<CostAccounting />} />
                <Route path='/managerial-accounting/forecasting' exact element={<Forecasting />} />
                <Route path='/managerial-accounting/cvp-analysis' exact element={<CVPAnalysis />} />
                
                <Route path='/auditing' exact element={<Auditing />} />
                <Route path='/auditing/external-auditing' exact element={<ExternalAuditing />} />
                <Route path='/auditing/internal-auditing' exact element={<InternalAuditing />} />
                
                <Route path='/tax-accounting' exact element={<TaxAccouting />} />
                <Route path='/tax-accounting/tax-planning' exact element={<TaxPlanning />} />
                <Route path='/tax-accounting/tax-compliance' exact element={<TaxCompliance />} />
                <Route path='/tax-accounting/individual-taxes' exact element={<IndividualTaxes />} />

                <Route path='/accounting-ethics' exact element={<AccountingEthics />} />

            </Routes>
        </div>
    );
}

export default PageToRender;