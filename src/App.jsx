import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Footer from './layout/Footer'
import Header from './layout/Header'
import PageContent from './layout/PageContent'

function App() {

  return (
    <>
      <Router>
        <main className='flex flex-col items-center'>
          <Header />
          <PageContent />
          <Footer />
        </main>
      </Router>
    </>
  )
}

export default App
