import Header from './components/Header'
import Dashboard from './components/Dashboard'
import MainContent from './components/MainContent'
import './style.css'
import {ReportContextProvider} from './context/reportContext'

function App() {
  return (
    <>
      <Header />

      <main>
        <Dashboard />
        <ReportContextProvider>
          <MainContent />
        </ReportContextProvider>
      </main>
    </>
  );
}

export default App;
