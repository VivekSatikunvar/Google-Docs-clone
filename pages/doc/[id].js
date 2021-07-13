import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'
import { useRouter } from 'next/dist/client/router'
import { db } from '../../firebase'
import { useDocumentOnce } from 'react-firebase-hooks/firestore'
import {getSession, signOut, useSession } from 'next-auth/client'
import Login from '../../components/Login'
import TextEditor from '../../components/TextEditor'

function Doc() {
    const [session] = useSession();
    if(!session) return <Login />; 
    
    const router = useRouter()
    const { id } = router.query;
    const [snapshot, loadingSnapshot] = useDocumentOnce(db.collection('userDocs').doc(session.user.email).collection('docs').doc(id))
    
    //redirect if user tries to access to a file URL they do not have access
   if(!loadingSnapshot && !snapshot?.data().fileName){
       router.replace('/');
   }

    

    return (
        <div>
            <header className="flex items-center justify-between p-3 pb-1">
                <span onClick={() => router.push('/')} className="flex items-center justify-between cursor-pointer">
                
                <Icon name='navigate_before' size='3xl' color='blue' />
                <Icon name='description' size='5xl' color='blue' />
                    
                </span>

                <div className='flex-grow px-2'>
                    <h2 className=''>{snapshot?.data()?.fileName}</h2>
                    <div className='flex items-center h-8 -ml-1 space-x-1 text-sm text-gray-600'>
                        <p className='option'>File</p>
                        <p className='option'>Edit</p>
                        <p className='option'>View</p>
                        <p className='option'>Insert</p>
                        <p className='option'>Format</p>
                        <p className='option'>Tools</p>
                    </div>
                </div>

            <Button
                color='lightBlue'
                buttonType='filled'
                size='regular'
                className='hidden h-10 md:inline-flex'
                rounded={false}
                block={false}
                iconOnly={false}
                ripple='light'
            >
                <Icon name='people' size='md' /> SHARE
            </Button>

            <img src={session.user.image} className='w-10 h-10 ml-2 rounded-full cursor-pointer' alt="" />

            </header>

            <TextEditor />

        </div>
    )
}

export default Doc

export async function getServerSideProps(context){
    const session = await getSession(context);

    return{
        props:{
            session,
        }
    }
}