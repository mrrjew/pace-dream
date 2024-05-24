import { SETTINGS_NAV } from "@/data/navigation"
import Link from "next/link"


const page = () => {
    return (
        <div className="w-max flex flex-col justify-center py-8 px-2 pt-8 bg-slate-50/90 rounded-md">
            <div className="w-max flex flex-col gap-2 space-y-2 px-4 py-10">
                {SETTINGS_NAV.map((nav) => {
                    return(
                        <Link href={`${nav.href}`} className="hover:bg-slate-80  p-2 rounded-md rounded-md">
                            {nav.icon}
                            {nav.name}
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default page