// import resume from saved local location and import it
// import file from '../components/assets/img/buyblakesbricks.png'
import pdf from "../components/assets/pdf/Blake Resume.pdf"
function WorkHistory ()
{
    return (
        <div className='container min-w-full mx-auto flex flex-wrap flex-row justify-around'>
            <div className="flex p-5">
            <object className="max-h-full max-w-full rounded-xl border-2 border-black shadow-lg shadow-black" data={pdf} type="application/pdf" width="800" height="800">
                <p>Alternative text - include a link <a href="../components/assets/pdf/lego-twitter.pdf">to the PDF!</a></p>
        </object>
            {/* <a href={file} download>click</a> */}
            </div>
        </div>
    )
}
export default WorkHistory