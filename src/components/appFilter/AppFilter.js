import { useDispatch, useSelector } from 'react-redux';

import { filtersNameChanged } from './appFilterSlice';

import './appFilter.scss';

const AppFilter = () => {
   const {activeFilter} = useSelector(state => state.filters);
   const dispatch = useDispatch();

   return (
      <div className='filter'>
         <div className='filter__header'>Сортировка</div>
         <button className='filter__button' onClick={() => dispatch(filtersNameChanged('city'))}>по городу</button>
         <button className='filter__button' onClick={() => dispatch(filtersNameChanged('company'))}>по компании</button>
      </div>
   );
};

export default AppFilter;