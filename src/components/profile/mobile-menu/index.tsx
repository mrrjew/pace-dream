/** @format */
"use client";
import React, { useState } from "react";
import { ProfileMenuItems } from "@/data/profile";
import MultipleMenu from "./MultipleMenu";
import SingleMenu from "./SinlgleMenu";

const MobileMenu = () => {
    const [activePosition, setActivePosition] = useState<number | undefined>();
    return (
        <ul>
            {ProfileMenuItems.map((item) =>
                item.child && item.child.length ? (
                    <MultipleMenu
                        key={Math.random()}
                        item={item}
                        activePosition={activePosition}
                        setActivePosition={setActivePosition}
                    />
                ) : (
                    <SingleMenu
                        key={Math.random()}
                        item={item}
                        activePosition={activePosition}
                        setActivePosition={setActivePosition}
                    />
                )
            )}
        </ul>
    );
};

export default MobileMenu;
