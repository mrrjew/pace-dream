"use client";
import Link from "next/link";
import { AccountSettingsCard } from "./AccountSeetingCard"
import { AccountSettingPageType } from "./AccountSettingMainContent"
import { useSession } from "@/hooks/useSession";
import { MusicNote, Payment, PrivacyTip, PrivacyTipOutlined, RoomPreferences, Security, Settings, SettingsApplications, SettingsOutlined, SimCard } from "@mui/icons-material";

export function AccountSettingSummary({onSelect,selected}:{
    onSelect:(item:AccountSettingPageType)=>void,
    selected:AccountSettingPageType
}){

    const settingItems : Array<{ title:AccountSettingPageType,description:string, icon:any}> = [
        {
            title: "Personal Information",
            description: "Provide personal details and how we can reach you",
            icon: <SimCard />
        },
        {
            title: "Login & Security",
            description: "Update your password and secure your account",
            icon: <Security />
        },
        {
            title: "Payment",
            description: "Review payments, coupons, and gift cards",
            icon: <Payment />
        },
        {
            title: "Global Preferences",
            description: "Set your default language, currency and timezone",
            icon: <SettingsOutlined />
        },
        {
            title: "Privacy & Sharing",
            description: "manage your personal data, connected services, and data sharing settings",
            icon: <PrivacyTipOutlined />
        }
    ];

    return (
        <div>
            
            <div className="grid gap-4 grid-cols-1 md:grid-cols-4">
                {
                    settingItems.map((item) => (
                            <AccountSettingsCard key={item.title} title={item.title} description={item.description} icon={item.icon} onClick={onSelect}/>
                    ))
                }
        </div>
        </div>
    )
}