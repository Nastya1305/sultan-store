import { FC, useEffect, useState } from 'react';
import styles from './Ordering.module.scss';
import { ReactComponent as DoneIcon } from "assets/images/done.svg";
import Modal from 'shared/UI/Modal/Modal';
import classNames from 'classnames';

interface OrderingProps {
   onClose: () => void,
}

const Ordering: FC<OrderingProps> = ({ onClose }) => {

   useEffect(() => {
      document.body.classList.add('lock');
      return () => {
         document.body.classList.remove('lock');
      };
   }, []);

   return (
      <Modal>
         <div className={styles.modalContainer} style={{ top: window.pageYOffset + 'px' }}>
            <div className={styles.container}>
               <div className={styles.closeBtn} onClick={() => onClose()} />

               <div className={styles.icon}>
                  <DoneIcon stroke='white' />
               </div>
               <h1 className={classNames('title', styles.title)}>Спасибо за заказ</h1>
            </div>
         </div>
      </Modal>
   )
}

export default Ordering;





