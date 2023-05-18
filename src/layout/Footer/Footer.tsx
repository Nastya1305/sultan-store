
import { FC } from 'react';
import styles from './Footer.module.scss';
import classNames from 'classnames';
import Navigation, { NavigationVariant } from 'components/Navigation/Navigation';
import { ReactComponent as Logo } from 'assets/images/Header/logo.svg';
import Button from 'components/UI/Button/Button';
import Input from 'components/UI/Input/Input';
import Contact from 'components/Contact/Contact';
import BackCall from 'components/BackCall/BackCall';
import { ReactComponent as VisaIcon } from 'assets/images/Footer/Visa.svg';
import { ReactComponent as MasterCardIcon } from 'assets/images/Footer/MasterCard.svg';
import { ReactComponent as TelegramIcon } from 'assets/images/Footer/telegram.svg';
import { ReactComponent as WhatsAppIcon } from 'assets/images/Footer/whatsapp.svg';

const Footer: FC = () => {

   return (
      <>
         <div className={styles.container}>
            <div className={classNames('container', styles.columns)}>
               <div className={styles.firstColumn}>
                  <div className={styles.aboutUs}>
                     <Logo className={styles.logo} />
                     <Button className={styles.priceListBtn}>
                        <span>Прайс-лист</span>
                        <img src={require('assets/images/Header/download-icon.svg').default} alt='иконка' />
                     </Button>
                     <p className={styles.text}>Компания «Султан» — снабжаем розничные магазины товарами
                        "под ключ" в Кокчетаве и Акмолинской области</p>
                  </div>
                  <div className={styles.subscription}>
                     <p className={styles.title}>Подпишись на скидки и акции</p>
                     <Input placeholder='Введите ваш E-mail' btnIcon={require('assets/images/white-arrow.svg').default} onInput={() => { }} />
                  </div>
               </div>

               <Navigation
                  variant={NavigationVariant.verticalLinkList}
                  color='light'
                  title='Меню сайта:'
                  items={['О компании', 'Доставка и оплата', 'Возврат', 'Контакты']}
               />

               <Navigation
                  variant={NavigationVariant.verticalLinkList}
                  color='light'
                  title='Категории:'
                  items={['Бытовая химия', 'Косметика и гигиена', 'Товары для дома', 'Товары для детей и мам', 'Посуда']}
               />

               <div className={styles.contacts}>
                  <div className={styles.title}>Контакты:</div>
                  <div className={styles.addresses}>
                     <BackCall color='light' textAlign='left' withImg={false} />
                     <Contact info='opt.sultan@mail.ru' secondary='На связи в любое время' color='light' />
                  </div>

                  <div className={styles.messengers}>
                     <div className={styles.paymentSystems}>
                        <VisaIcon />
                        <MasterCardIcon />
                     </div>
                     <div className={styles.title}>Связь в мессенджерах:</div>
                     <div className={styles.links}>
                        <a className={classNames(styles.whatsAppBtn, styles.btn)} href="#" target='_blank'>
                           <WhatsAppIcon />
                        </a>
                        <a className={classNames(styles.telegramBtn, styles.btn)} href="#" target='_blank'>
                           <TelegramIcon />
                        </a>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </>

   )
}

export default Footer;





