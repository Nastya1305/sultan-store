import { FC, useMemo, PropsWithChildren } from 'react';
import styles from './Modal.module.scss';
import classNames from 'classnames';
import { createPortal } from 'react-dom';


const Modal: FC<PropsWithChildren> = ({ children }) => {
   const containerElement = useMemo(() =>
      document.getElementById('modal-container') as Element, []);

   return createPortal(children, containerElement);
}

export default Modal;


