import Work from "../components/Projects"
function ProjectsPage ()
{
    return (
        <div className='container mx-auto flex flex-wrap flex-row justify-around'>
            <div className='flex flex-wrap justify-center'>
                <div className="m-2 p-3 border-2 border-black/50 rounded-2xl bg-cyan-400 shadow-md shadow-black">
                <h1 className="text-2xl font-semibold">These are some of the recent Projects I have worked on</h1>
            </div>
                </div>
            <Work></Work>
        </div>
    )
}
export default ProjectsPage