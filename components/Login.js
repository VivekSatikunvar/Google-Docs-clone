import Button from '@material-tailwind/react/Button';
import Image from 'next/image';
import { signIn } from 'next-auth/client';


function Login() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <img 
                src='https://i.ibb.co/mB8z8T6/Google-Docs.png'
                height='300'
                width='550'
                // objectFit='contain'
                style={{objectFit:'contain'}}
            />

            <Button
                className='mt-8 w-44'
                color='blue'
                buttonType='filled'
                ripple='light'
                onClick={signIn}
            >
                Login
            </Button>
        </div>
    )
}

export default Login
