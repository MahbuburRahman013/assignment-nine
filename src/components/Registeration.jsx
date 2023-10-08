import { useContext } from 'react';
import {Link} from 'react-router-dom';
import { ContextProvider } from './AuthProvider';
import { Toaster ,toast} from 'react-hot-toast';
import { updateProfile } from 'firebase/auth';
import auth from '../firebase-data/firebase.config';

const Registeration = () => {
const {createUser,googleUser} = useContext(ContextProvider);

const handleCreateUser = (e) =>{
         e.preventDefault();
         const email = e.target.email.value;
         const name = e.target.name.value;
         const password = e.target.password.value;
        createUser(email,password)
        .then(result=>{
            toast.success('Registration Successfully!')
            e.target.reset();
            updateProfile(auth.currentUser,{
                displayName:name,
            }).then().catch()
            console.log(result.user)
            
        })
        .catch(error=>{
            console.log(error)
            toast.error(error.message)
        })

}

const handleGoogle =()=>{
    googleUser()
    .then(result=>{
        toast.success('Registration Successfully!')
        console.log(result.user)
    })
    .catch(error=>{
        toast.error(error.message)
    })
}



    return (
        
            <div className="container mx-auto flex justify-center items-center">
            
            <div className="flex justify-center my-8 rounded items-center border border-gray-400">
            <div className="bg-[#445139] ">
                <div className='py-16'>
                <h1 className='text-4xl font-semibold text-gray-200 text-center py-10 uppercase'>Registration</h1>
                <img className=' mx-auto w-[80%]' src="https://i.ibb.co/zR4ZRYD/image-processing20210613-1005-1g7cwuk-removebg-preview.png" alt="" />
                </div>
            </div>
            

            <div className='text-[#445139] text-center px-14 w-[60%]'>
                <h1 className='text-3xl uppercase font-semibold pb-12'>Dream</h1>
                <h1 className='text-xl pb-6 font-semibold'>Welcome To Dream</h1>
            <form onSubmit={handleCreateUser}>
                <input className='block outline-none border-b border-gray-300 py-2 px-5 text-base rounded w-full' type="text" name="name" placeholder="Your Name"/>

                <input className='block outline-none border-b border-gray-300 py-2 px-5 text-base rounded mt-7 w-full' type="email" name="email" placeholder="Your Email"/>
                <input className='block outline-none border-b border-gray-300 py-2 px-5 text-base rounded mt-7 w-full'  type="password" name="password" placeholder="Password" />
                
                <input className='w-[50%] bg-[#526146] cursor-pointer text-gray-200  font-semibold py-2 px-5 rounded-full mt-5' type="submit" value="Register" />
            </form>
                  <div className='flex gap-x-2 items-center w-[80%] mt-6  mx-auto'>
                    <div className='border-b border-gray-300 flex-1'></div>
                    <p>Or</p>
                    <div className='border-b border-gray-300 flex-1'></div>
                  </div>

                  
                  <div onClick={handleGoogle} className='flex items-center cursor-pointer gap-1 justify-center mt-4'>
                  <img className='w-5' src="https://i.ibb.co/RTvc8JJ/google-icon-512x512-tqc9el3r-removebg-preview.png" alt="" /> 
                   <p className='font-semibold'>Sing in with Google</p>
                  </div>
                  

                  <p className='my-4'>Already have an account? <Link to='/login' className='font-semibold underline'>Sing up</Link></p>
            </div>
            </div>
            <Toaster></Toaster>
           
        </div>
       
    );
};

export default Registeration;