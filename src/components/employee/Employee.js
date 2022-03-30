import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { putUser } from './employeeSlice';


import './employee.scss';

const Employee = ({id, name, address, company}) => {
   const users = useSelector(state => state.employees.employees);
   const dispatch = useDispatch(); 
   const aboutUserSelector = (id, users) => {
      const user = users.filter(employee=>{
         return employee.id===id;
      })[0];
      return user;
   };

   return (
         <div className="employee__item">
            <div className="employee__name">
               ФИО: 
               <span>{name}</span>
            </div>
            <div className="employee__city">
               город: 
               <span>{address.city}</span>
            </div>
            <div className="employee__company">
               компания: 
               <span>{company.name}</span>
            </div>
            <Link to='/profile' className='employee__link' onClick={() => dispatch(putUser(aboutUserSelector(id, users)))}> Подробнее </Link>
         </div>   
   );
};

export default Employee;
