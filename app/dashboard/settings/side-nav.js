'use client'

import { Camera, Settings, User2 } from "lucide-react";
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function SideNav() {
    const pathname = usePathname();
    console.log(pathname)
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/dashboard/setting" className={`px-2.5 py-2 flex items-center space-x-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 ${pathname == '/dashboard/settings'?'bg-yellow-100 dark:bg-orange-500' : '' }`}> <Settings className="w-4 h-4"/> <span>Ayarlar</span></Link>
                </li>
                <li>
                    <Link href="/dashboard/setting/avatar" className={`px-2.5 py-2 flex items-center space-x-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 ${pathname == '/dashboard/settings/avatar' ? 'bg-yellow-100 dark:bg-orange-500' : ''}`}> <Camera className="w-4 h-4" /> <span>Avatar</span></Link>
                </li>
                <li>
                    <Link href="/dashboard/setting/profile" className={`px-2.5 py-2 flex items-center space-x-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 ${pathname == '/dashboard/settings/profile' ? 'bg-yellow-100 dark:bg-orange-500' : ''}`}> <User2 className="w-4 h-4" /> <span>Profil</span></Link>
                </li>
        </ul>
        </nav>
    )
}