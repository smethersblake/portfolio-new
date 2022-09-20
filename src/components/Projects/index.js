import { Card } from 'flowbite-react'
import Projects from '../assets/Projects'

function Work ()
{
    return (
        
        
        <div className='container mx-auto flex flex-wrap flex-row justify-around'>
        {Projects.map((project) =>
            <div className="col max-w-sm my-5 mx-1 border-4 border-black/75 rounded-xl shadow-lg shadow-black">
                <Card  style={{ height: '100%'}} href={project.url}
                    target="_blank"
                    horizontal={true}
                    imgSrc={project.img}>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {project.name}
                    </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                        {project.description}
                    </p>
                </Card>
            </div>
        )}
        </div>
    
    )
}
export default Work