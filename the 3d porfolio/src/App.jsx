import {Route, BrowserRouter as Router, Routes } from 'react-router-dom';

const App = () => {
  return (
    <main>
      <Router>
        Navbar
        <Routes>
          <Route path='/home' element={'Home'}/>
          <Route path='/about' element={'About'}/>
          <Route path='/project' element={'Project'}/>
        </Routes>
      </Router>
    </main>
  )
}

export default App