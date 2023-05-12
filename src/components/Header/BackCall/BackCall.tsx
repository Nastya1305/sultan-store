import { FC } from 'react';
import salesTeamImg from 'assets/images/Header/sales-team.png';
import styles from './BackCall.module.scss';
import classNames from 'classnames';

interface BackCallProps {
   className?: string
}

const BackCall: FC<BackCallProps> = ({ className }) => {
   return (
      <div className={classNames(styles.container, className)}>
         <div className={styles.text}>
            <div className={styles.phoneNumber}>+7 (777) 490-00-91</div>
            <div className={styles.secondary}>время работы: 9:00-20:00</div>
            <a href='#' className={styles.link}>Заказать звонок</a>
         </div>
         <div className={styles.img}>
            <img src={salesTeamImg} alt="Отдел продаж" />
         </div>
      </div>
   );
}

export default BackCall;