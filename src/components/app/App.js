import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AppFilter from '../appFilter/AppFilter';
import EmployeeList from '../employeeList/EmployeeList';
import EmployeeProfile from '../employeeProfile/EmployeeProfile';
import Page404 from '../page404/Page404';



import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <AppFilter/>
        <Routes>
          <Route path='/' element={<EmployeeList/>}/>
          <Route path='/profile' element={<EmployeeProfile/>}/>  
          <Route path='*' element={<Page404/>}/>        
        </Routes>        
      </div>
    </Router>    
  );
}

export default App;
