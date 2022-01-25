import Header from './components/Header'
import Dashboard from './components/Dashboard'
import MainContent from './components/MainContent'
import './style.css'

function App() {
  return (
    <>
      <Header />

      <main>
        <Dashboard />
        <MainContent />
      </main>
    </>
  );
}

export default App;
