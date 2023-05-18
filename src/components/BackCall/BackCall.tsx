import { FC } from 'react';
import salesTeamImg from 'assets/images/Header/sales-team.png';
import styles from './BackCall.module.scss';
import classNames from 'classnames';

interface BackCallProps {
   className?: string,
   withImg: boolean,
   color: 'light' | 'dark'
   textAlign: 'right' | 'left'
}

const BackCall: FC<BackCallProps> = ({ withImg, textAlign, color, className }) => {
   return (
      <div className={classNames(styles.container, className)}>
         <div className={classNames(styles.text, styles[textAlign], styles[color])}>
            <div className={styles.phoneNumber}>+7 (777) 490-00-91</div>
            <div className={styles.secondary}>время работы: 9:00-20:00</div>
            <a href='#' className={styles.link}>Заказать звонок</a>
         </div>
         {
            withImg &&
            <div className={styles.img}>
               <img src={salesTeamImg} alt="Отдел продаж" />
            </div>
         }

      </div>
   );
}

export default BackCall;