import HeadShot from '../components/assets/img/Head_Shot.jpg'
import Brand from '../components/Brand'
import Badge from '../components/assets/img/full-stack-web-development-certificate-coding-boot-camp.png'
function About ()
{
    return (
        <div className='container mx-auto flex flex-wrap flex-col'>
            <div className='flex justify-center p-3 my-3'>
                <h1>About Page</h1>
            </div>
            <div className='grid grid-cols-4'>
                <div className='flex flex-col justify-between'>
                    <div className='flex justify-center p-3'>
                        <img src={HeadShot} width="200" alt='Head_Shot' className='rounded-full'></img>
                    </div>
                    <div className='flex justify-center place-content-end'>
                        <img src={Badge} width='150' alt='Badge'></img>
                    </div>
                </div>
                    <div className='col-end-5 col-span-2 p-3'>
                    <div className='border-2 border-black rounded-xl p-3'>
                        <Brand/>
                        </div>
                    </div>
            </div>
            
        </div>
    )
}
export default About