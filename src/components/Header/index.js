const Header = () =>
{
    return (
        <header className="bg-white sticky top-0 z-50 w-screen border-grey-200 dark:bg-gray-900">
            <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
        <a href="/" class="flex items-center">
            {/* <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" /> */}
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Blake Smethers</span>
        </a>
        <div class="flex items-center">
            <a href="tel:5541251234" class="mr-6 text-sm font-medium text-gray-500 dark:text-white hover:underline">(612) 390-1528</a>
            <a href="/Contact" class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">Contact</a>
        </div>
    </div>
</nav>
<nav class="bg-gray-500 dark:bg-gray-700">
    <div class="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
        <div class="flex items-center">
            <ul class="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                <li>
                    <a href="/" class="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</a>
                </li>
                <li>
                    <a href="About" class="text-gray-900 dark:text-white hover:underline">About</a>
                </li>
                <li>
                    <a href="/Projects" class="text-gray-900 dark:text-white hover:underline">Projects</a>
                </li>
                {/* <li>
                    <a href="/Education" class="text-gray-900 dark:text-white hover:underline">Education</a>
                            </li> */}
                            <li>
                    <a href="/Work%20History" class="text-gray-900 dark:text-white hover:underline">Resume</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
        </header>
    )
}

export default Header
