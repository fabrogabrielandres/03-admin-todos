import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoCalendarOutline, IoCheckboxOutline, IoListOutline, IoBriefcaseOutline, IoPlayForwardCircle, IoPerson } from 'react-icons/io5'
import { CiLogout } from 'react-icons/ci'
import { SideBarItem } from '@/components'
import { auth } from '@/app/api/auth/[...nextauth]/route'
import { LogoutButton } from './LogoutButton.tsx/LogoutButton'
import { useSession } from 'next-auth/react'

interface Props {
    title: string,
    path: string,
    icon: React.JSX.Element;
}

const sidebarItems: Array<Props> = [{
    path: "/dashboard",
    title: "Dashboard",
    icon: <IoCalendarOutline size={30} />
}, {

    path: "/dashboard/rest-todos",
    title: "Rest-Todos",
    icon: <IoCheckboxOutline size={30} />
}, {

    path: "/dashboard/server-todos",
    title: "Server-Todos",
    icon: <IoListOutline size={30} />
}
    , {

    path: "/dashboard/cookies",
    title: "cookies",
    icon: <IoBriefcaseOutline size={30} />
}
    , {
    path: "/dashboard/products",
    title: "products",
    icon: <IoPlayForwardCircle size={30} />
}, {
    path: "/dashboard/profile",
    title: "Profile",
    icon: <IoPerson size={30} />
}
]


export const Sidebar = async () => {

    const session = await auth()




    return (
        <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
            <div>
                {/* <h1>{status}</h1> */}
                <div className="-mx-6 px-6 py-4">
                    <Link href="/dashboard" title="home">
                        <Image src="https://tailus.io/sources/blocks/stats-cards/preview/images/logo.svg" width={100} height={100} className="w-32" alt="tailus logo" />
                    </Link>
                </div>

                <div className="mt-8 text-center">

                    <Image src={session?.user?.image ?? ""} alt="tailus logo" width={100} height={100} className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28" />

                    <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">{session?.user?.name ?? ""}</h5>
                    <span className="hidden text-gray-400 lg:block">Admin</span>
                </div>

                <ul className="space-y-2 tracking-wide mt-8">
                    {
                        sidebarItems.map(item =>
                            <SideBarItem key={item.path} {...item} />
                        )
                    }
                </ul>
            </div>

            <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
                <LogoutButton>

                </LogoutButton>
            </div>
        </aside>
    )
}
