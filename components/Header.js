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
        <header className="">

            <div>
                <HeaderItems title="HOME" Icon={HomeIcon} />
            </div>

            <div>
                <Image src="https://links.papareact.com/ua6" alt="logo" width={200} height={100} />
            </div>
        </header>
    )
}

export default Header;