import './App.css';
import JobBoard from './components/job_board';
import {Routes, Route, Link} from 'react-router-dom';
import css from './components/styling.module.css';

function App() {
  return (
    <div className="App">
      <div className={css.header}>
        <h1>Emergen-Chef!</h1>
      </div>
      <Link to='/'>Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to='/jobs'>Jobs</Link>
      <Routes>
        <Route path='/jobs' element={<JobBoard/>}/>
      </Routes>
    </div>
  )
}

export default App;
