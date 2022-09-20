import Language from "../components/Language"

function Education ()
{
    return (
        <div className='container mx-auto flex flex-wrap flex-row justify-around'>
                <div className="col min-w-xl my-5 mx-1 flex justify-center">
                    <img className="flex max-h-20 mt-5" src="https://farmingtontigers.com/images/2021/8/3/1200px_Minnesota_Golden_Gophers_logo_svg.png" alt="U of M logo" />
                </div>
                <div className="row w-1/2 my-5 mx-auto flex-initial min-w-xl">
                    <div className="flex flex-wrap grid grid-rows-3 gap-3">
                <div className="flex justify-center border-4 border-black rounded-xl shadow-md shadow-black/75 bg-gradient-to-r from-[#FFCC33] to-[#7A0019]">
                    <span className="whitespace-pre-line m-5 text-xl font-bold subpixel-antialiased">Gruaduate from University of Minnesota Codding Bootcamp</span>
                    </div>
                        <div className="row-span-2 flex flex-wrap justify-center items-center">
                            <span className="flex xl:w-96 md:w-auto sm:w-auto text-sm font-semibold shrink">During my time in the codding bootcamp I learned how to use
                                multiple languages to create and implement fully functioning MERN
                                applications.</span>
                </div>
                    </div>
                </div>
            <div>
                <div className="flex justify-center">
                <h1>Languages</h1>
                </div>
                <div className="border-4 border-black rounded-2xl bg-white">
            <Language></Language>
                </div>
            </div>
        </div>
    )
}
export default Education