import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from 'react-hook-form';

type Props = {}

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};



const Contact = (props: Props) => {

    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:derekprieur123@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`
    };

    return (
        <div className=' h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className=' absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact</h3>
            <div className=' flex flex-col space-y-10 items-center'>
                <h4 className=' text-4xl font-semibold text-center'>I have got just what you need. <span className=' underline decoration-cyan-500/50'>Lets talk.</span></h4>
                <div className=' space-y-10 w-72'>
                    <div className=' flex items-center space-x-5 '>
                        <PhoneIcon className=' text-cyan-500 h-7 w-7 animate-pulse' />
                        <p className=' text-2xl'>(518) 926-8352</p>
                    </div>
                    <div className=' flex items-center space-x-5 '>
                        <EnvelopeIcon className=' text-cyan-500 h-7 w-7 animate-pulse' />
                        <p className=' text-2xl'>dprieur123@gmail.com</p>
                    </div>
                    <div className=' flex items-center space-x-5 '>
                        <MapPinIcon className=' text-cyan-500 h-7 w-7 animate-pulse' />
                        <p className=' text-2xl'>Pittsburgh, PA</p>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className=' flex flex-col space-y-2 w-fit mx-auto'>
                    <div className=' flex space-x-2'>
                        <input {...register('name')} placeholder='Name' className='contactInput focus:border-cyan-500/40 focus:text-cyan-500/40 hover:border-cyan-500/40' type="text" />
                        <input {...register('email')} placeholder='Email' className='contactInput focus:border-cyan-500/40 focus:text-cyan-500/40 hover:border-cyan-500/40' type="email" />
                    </div>
                    <input {...register('subject')} placeholder='Subject' className='contactInput focus:border-cyan-500/40 focus:text-cyan-500/40 hover:border-cyan-500/40' type="text" />
                    <textarea {...register('message')} placeholder='Message' className='contactInput focus:border-cyan-500/40 focus:text-cyan-500/40 hover:border-cyan-500/40'></textarea>
                    <button type='submit' className=' bg-cyan-500 py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact