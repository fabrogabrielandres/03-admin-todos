// Admin Dashboard https://tailwindcomponents.com/component/dashboard-12
import { Sidebar } from '@/components';
import { TopMenu } from '@/components/TopMenu/TopMenu';
import { CiBellOn, CiBookmarkCheck, CiChat1, CiLogout, CiMenuBurger, CiSearch } from 'react-icons/ci';

export default function DashboardLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {/* TODO: src/components <Sidebar /> */}

            <Sidebar />


            {/*TODO: Fin del <Sidebar /> */}


            {/* Main Layout content - Contenido principal del Layout */}
            <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] min-h-screen">
                {/* TODO: src/components <TopMenu /> */}
                <div>
                    <TopMenu />
                </div>
                <div className="px-6 pt-6">
                    {children}
                </div>
            </div>
        </>
    );
}