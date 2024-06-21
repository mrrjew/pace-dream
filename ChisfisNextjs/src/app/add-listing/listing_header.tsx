'use client'

import NavbarMobile from "../(client-components)/(Header)/NavbarMobile"

export default function ListingHeader(){

    return (
        <div className="flex px-1 md:px-16 justify-between w-full items-center bg-gray-50 fixed top-0 h-20 border-b-2">
            <div className="flex">
                <div>

                </div>
            </div>
            <NavbarMobile />
        </div>
    )
}