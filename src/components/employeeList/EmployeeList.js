import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { fetchEmployees } from './employeeListSlice';
import Employee from '../employee/Employee';
import Spinner from '../spinner/Spinner';

import './employeeList.scss';

const EmployeeList = () => {

   const dispatch = useDispatch();
   
   useEffect(() => {
      dispatch(fetchEmployees());
   }, []);
   
   const employeesLoadingStatus = useSelector(state => state.employees.employeesLoadingStatus);
   const filter = useSelector((state) => state.filters.activeFilter);
   const employees = useSelector((state) => state.employees.employees);
   

   const filteredEmployeesSelector = () => {
      if (filter === 'all') {
         return employees;
      } else if (filter === 'city') {
         return employees.slice().sort((addressA, addressB) => {
            var cityA = addressA.address.city || 0;
            var cityB = addressB.address.city || 0;
            return cityA.localeCompare(cityB)});
      } else if (filter === 'company') {
         return employees.slice().sort((companyA, companyB) => {
            var nameA = companyA.company.name || 0;
            var nameB = companyB.company.name || 0;
            return nameA.localeCompare(nameB)});
      }
   };   
   const filteredEmployees = useSelector(filteredEmployeesSelector);

   if (employeesLoadingStatus === "loading") {
      return <Spinner/>;
   } else if (employeesLoadingStatus === "error") {
      return <h5 className="text-center mt-5">Ошибка загрузки</h5>
   }

   const renderEmployeesList = (arr) => {
      return arr.map(({id, ...props}) => {
         return (
            <Employee key={id} id={id} {...props}/>
         )
      })
   }

   const elements = renderEmployeesList(filteredEmployees);
   const counter = elements.length;

   return (
      <div className="employee-list">
         <h3 className="employee-list__header">Список пользователей</h3>
               {elements}
         <div className='employee-list__counter'>Найдено {counter} пользователей</div>
      </div>
      
   )
};

export default EmployeeList;