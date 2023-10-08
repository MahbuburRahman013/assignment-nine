import { CiFacebook } from 'react-icons/ci';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { TfiWorld } from 'react-icons/tfi';

const Footer = () => {
    return (
        <div className="bg-[#445139] lg:h-[50vh] pt-10 text-gray-200">
            <div className="container mx-auto pt-10 pb-24  border-t border-b border-gray-500 grid md:grid-cols-2 grid-cols-1 gap-y-10 lg:gap-y-0 lg:grid-cols-4 px-5 lg:px-0">
                      <div className='text-4xl'>
                      DREAMS
                      </div>
                      <div>
                        <h1 className='text-2xl'>TIME</h1>
                        <p className='py-2'>Mon - Fri: 8:00am-7:00pm</p>
                        <p>Closed on weekend</p>
                      </div>
                      <div>
                        <h1 className='text-2xl'>PHONE AND EMAIL</h1>
                        <p className='py-2'>Support@gmail.com</p>
                        <p>+1 212-683-9756</p>
                      </div>
                      <div className='flex items-center gap-7 text-3xl'>
                        <CiFacebook></CiFacebook>
                        <AiOutlineInstagram></AiOutlineInstagram>
                        <AiOutlineTwitter className='text-gray-200'></AiOutlineTwitter>
                        <TfiWorld></TfiWorld>
                      </div>
            </div>

            <div className="container px-4 lg:px-0 pt-5 mx-auto flex justify-between items-center">
                <h1>Copyright ©2020 All rights reserved | This template is made with♡ by Our Terms</h1>
                <p>Terms and Use Privacy Policy</p>
            </div>
        </div>
    );
};

export default Footer;