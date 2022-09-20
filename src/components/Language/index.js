import Languages from "../assets/Languages"
function Language ()
{
    return (
            <div className="container mx-auto flex flex-wrap flex-row justify-around">
            {Languages.map((word) =>
                <div className="col max-w-sm my-5 mx-1 border-4 border-black/75 rounded-xl shadow-lg shadow-black bg-white">
                    <div className="flex justify-center w-40">
                    <h1>
                        {word}
                    </h1>
                    </div>
                </div>
            )}
            </div>
    )
}
export default Language