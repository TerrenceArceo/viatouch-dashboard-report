import Header from './components/Header'
import Dashboard from './components/Dashboard'
import MainContent from './components/MainContent'
import './style.css'

import {ReportContextProvider} from './context/reportContext'
import { Routes, Route } from 'react-router-dom'
import Machine from './dummyComponents/Machine'
import Location from './dummyComponents/Location'
import Logout from './dummyComponents/Logout'
import Management from './dummyComponents/Management'
import Products from './dummyComponents/Products'
import UserManagement from './dummyComponents/UserManagement'
import Media from './dummyComponents/Media'

function App() {

  return (
    <>
      <Header />

      <main>
        <ReportContextProvider>
          <Dashboard  />
        </ReportContextProvider>

        <Routes>
            <Route path="/" element={<ReportContextProvider><MainContent /></ReportContextProvider>} />
            <Route path="/machine" element={<Machine />} />
            <Route path="/location" element={<Location />} />
            <Route path="/management" element={<Management />} />
            <Route path="/products" element={<Products />} />
            <Route path="/usermanagement" element={<UserManagement />} />
            <Route path="/media" element={<Media />} />
            <Route path="/logout" element={<Logout />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
