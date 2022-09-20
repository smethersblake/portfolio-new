import HeadShot from '../components/assets/img/Head_Shot.jpg'
function Home ()
{
    return (
        <div className='container mx-auto flex flex-wrap flex-row'>
            <div className='flex grid grid-cols-5 gap-10 h-full'>
                <div className="flex-1 p-3 grid justify-items-center">
                    <img className="m-2 rounded-full" src={HeadShot} width="100" alt='Head_Shot'></img>
                </div>
                <div className="col-span-3 mx-3 grid justify-items-center height-fit">
                    <img className="m-5 border-4 border-black/75 h-96 rounded-xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVojbD5kk786ksahcduXGv9zP0gluoK4iYkw&usqp=CAU" alt="computer_picture"></img>
                </div>
                <div className="flex-1 justify-items-center">
                    <span>I am an active Full Stack MERN Developer with a high knowledge of the backend.</span>
                </div>
            </div>
            <div className='h-m-screen'>
                <div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}
export default Home
