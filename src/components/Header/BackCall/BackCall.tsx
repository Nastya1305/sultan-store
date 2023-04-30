import { FC } from 'react';
import './BackCall.scss'
import salesTeamImg from 'assets/images/Header/sales-team.png';

const BackCall: FC = () => {
   return (
      <div className='back-call'>
         <div className='back-call__text'>
            <div className='back-call__phone-number'>+7 (777) 490-00-91</div>
            <div className='back-call__secondary'>время работы: 9:00-20:00</div>
            <a href='#' className='back-call__link'>Заказать звонок</a>
         </div>
         <div className='back-call__img'>
            <img src={salesTeamImg} alt="Отдел продаж" />
         </div>
      </div>
   );
}

export default BackCall;