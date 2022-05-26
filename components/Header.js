import {
    HomeIcon,
    BadgeCheckIcon,
    CollectionIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
} from '@heroicons/react/outline'
import Image from "next/image"
import HeaderItems from "./HeaderItems";

function Header() {
    return (
        <header className="flex flex-col sm:flex-row m-5 items-center justify-between h-auto 2xl:max-w-[1240px] 2xl:m-auto ">
            <div className='flex flex-grow justify-evenly max-w-2xl'>
                <HeaderItems title="HOME" Icon={HomeIcon} />
                <HeaderItems title="TRENDING" Icon={LightningBoltIcon} />
                <HeaderItems title="VERIFIED" Icon={BadgeCheckIcon} />
                <HeaderItems title="COLLECTION" Icon={CollectionIcon} />
                <HeaderItems title="SEARCH" Icon={SearchIcon} />
                <HeaderItems title="ACCOUNT" Icon={UserIcon} />

            </div>

            <div>
                <Image src="https://links.papareact.com/ua6" alt="logo" width={200} height={100} className="cursor-pointer" />
            </div>
        </header>
    )
}

export default Header;