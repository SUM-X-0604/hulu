import requests from '../utils/Request';
import { useRouter } from 'next/router';

const Nav = () => {
    const router = useRouter()
    return (
        <nav className='relative'>
            <div className='flex px-10 text-md sm:text-xl md:text-2xl sm:px-20 whitespace-nowrap space-x-6 sm:space-x-12 overflow-x-scroll scrollbar-hide 3xl:max-w-[1240px] 3xl:m-auto'>
                {Object.entries(requests).map(([key, { title, url }]) => (
                    // eslint-disable-next-line react/jsx-key
                    <h2
                        key={key}
                        onClick={() => router.push(`/?genre=${key}`)}
                        className="cursor-pointer transition duration-120 hover:scale-110 hover:text-red-500 active:text-black">{title}</h2>
                ))}
            </div>
            <div className='absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12' />
        </nav>
    )
}

export default Nav
