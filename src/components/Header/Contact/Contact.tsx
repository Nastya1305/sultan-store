import { FC } from 'react'
import './Contact.scss';

interface ContactProps {
   img: string,
   info: string,
   secondary: string,
}

const Contact: FC<ContactProps> = ({ img, info, secondary }) => {
   return (
      <div className='contact'>
         <div className='contact__img'>
            <img src={img} alt='иконка' />
         </div>
         <div className='contact__text'>
            <div className='contact__info'>
               {info}
            </div>
            <div className='contact__secondary'>
               {secondary}
            </div>
         </div>
      </div>
   );
}

export default Contact;