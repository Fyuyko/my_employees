import { useSelector, useDispatch } from 'react-redux';

import { editFormToggle, inputValid } from './employeeProfileSlice';
import { editUser } from '../employee/employeeSlice';
import { sendUser } from '../employeeList/employeeListSlice';

import './employeeProfile.scss';

const EmployeeProfile = () => {
   const user = useSelector(state=>state.user.user);
   const editToggle = useSelector(state=>state.profile.editFormToggle);
   const stateInput = useSelector(state=>state.profile.inputValid);
   const dispatch = useDispatch();

   const handleValueChange = (e) => {
      const payload = {
         nameValue: e.target.name,
         newValue: e.target.value,
      };
      dispatch(editUser(payload));
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      const payload = {
         id: user.id,
         user,
      };
      dispatch(sendUser(payload));
      alert('Данные отправлены');
   };

   const blurHandler = (e) => {
      const payload = {
         nameValue: e.target.name,
         value: e.target.value,
      };
      dispatch(inputValid(payload));  
   };

   const onActiveEdit = editToggle === false; // включение редактирования
   const onActiveEditButton = editToggle === false || Object.values(stateInput).find(value => value===true);

   return (
      <div className='employee-profile'>
         <div className='employee-profile__header'>
            <h3>Профиль пользоваетля</h3>
            <button className='employee-profile__button' onClick={() => dispatch(editFormToggle())}>Редактировать</button>
         </div>
         <form className='employee-profile__form' id="aboutUser" onSubmit={(e)=>handleSubmit(e)}>
            <label htmlFor="name">Name</label><br/>
            <input className={`${user.name.length===0?'error':null}`} type="text" name="name" placeholder="Иван Иванов" onBlur={blurHandler} value={user.name} disabled={onActiveEdit} onChange={(e) => handleValueChange(e)}/><br/>

            <label htmlFor="user">User name</label><br/>
            <input className={`${user.username.length===0?'error':null}`} type="text" name="username" placeholder="Ivan" onBlur={blurHandler} value={user.username} disabled={onActiveEdit} onChange={(e) => handleValueChange(e)}/><br/>

            <label htmlFor="e-mail">E-mail</label><br/>
            <input className={`${user.email.length===0?'error':null}`} type="email" name="email" placeholder="example@mail.com" onBlur={blurHandler} value={user.email} disabled={onActiveEdit} onChange={(e) => handleValueChange(e)}/><br/>

            <label htmlFor="street">Street</label><br/>
            <input className={`${user.address.street.length===0?'error':null}`} type="text" name="address.street" placeholder="ул. Пример" onBlur={blurHandler} value={user.address.street} disabled={onActiveEdit} onChange={(e) => handleValueChange(e)}/><br/>

            <label htmlFor="city">City</label><br/>
            <input className={`${user.address.city.length===0?'error':null}`} type="text" name="address.city" placeholder="Москва" onBlur={blurHandler} value={user.address.city} disabled={onActiveEdit} onChange={(e) => handleValueChange(e)}/><br/>

            <label htmlFor="code">Zip code</label><br/>
            <input className={`${user.address.zipcode.length===0?'error':null}`} type="text" name="address.zipcode" placeholder="1234234" onBlur={blurHandler} value={user.address.zipcode} disabled={onActiveEdit} onChange={(e) => handleValueChange(e)}/><br/>

            <label htmlFor="phone">Phone</label><br/>
            <input className={`${user.phone.length===0?'error':null}`} type="text" name="phone" placeholder="89991112233" onBlur={blurHandler} value={user.phone} disabled={onActiveEdit} onChange={(e) => handleValueChange(e)}/><br/>

            <label htmlFor="website">Website</label><br/>
            <input className={`${user.website.length===0?'error':null}`} type="text" name="website" placeholder="www.example.com" onBlur={blurHandler} value={user.website} disabled={onActiveEdit} onChange={(e) => handleValueChange(e)}/><br/>

            <label htmlFor="comment">Comment</label><br/>
            <textarea name='comment'/>
         </form>
         <button type="submit" form='aboutUser' className='submit-button' disabled={onActiveEditButton}>Отправить</button>
      </div>
   );
};

export default EmployeeProfile;