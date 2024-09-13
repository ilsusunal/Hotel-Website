import './App.css'
import Footer from './layout/Footer'
import Header from './layout/Header'
import PageContent from './layout/PageContent'

function App() {

  return (
    <>
    <main className='flex flex-col items-center'>
      <Header/>
      <PageContent/>
      <Footer/>
    </main>
    </>
  )
}

export default App
