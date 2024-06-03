"use client"
import SectionSubscribe from "@/components/SectionSubscribe";
// import SubscriberFooter from "@/components/SubscriberFooter";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";


export default function GiftCardPage() {
    const [expanded, setExpanded] = useState<number | null>(null)

    const fags = [
        {
            question: "Are gift cards physical or digital?",
            answer: "Gift cards bought on PaceDream.com are digital only. However, physical gift cards are available at participating stores."
        },
        {
            question: "Where are gift cards available?",
            answer: "Gift cards bought on PaceDream.com are digital only. However, physical gift cards are available at participating stores."
        },
        {
            question: "Do gift cards expire?",
            answer: "Gift cards bought on PaceDream.com are digital only. However, physical gift cards are available at participating stores."
        },
        {
            question: "Can I send a gift card to someone who lives in a different country?",
            answer: "Gift cards bought on PaceDream.com are digital only. However, physical gift cards are available at participating stores."
        },
        {
            question: "How can I check my gift card balance?",
            answer: "Gift cards bought on PaceDream.com are digital only. However, physical gift cards are available at participating stores."
        },
        {
            question: "Which payment methods does PaceDream accept?",
            answer: "Gift cards bought on PaceDream.com are digital only. However, physical gift cards are available at participating stores."
        },
    ]

    function handleExpand(i: number) {
        if(expanded === i) {
            setExpanded(null)
        } else {
            setExpanded(i)
        }
    }

  return (
    <section className="bg-white min-h-screen flex justify-center p-4 flex-col -mb-2">
        <div className="py-24 container">
            <h1 className="text-2xl md:text-6xl text-center font-semibold grid grid-cols-1">
                <span>PaceDream</span>
                <span>gift cards</span>
            </h1>
         
        <div className="flex justify-center my-20">
            <Image 
                className="rounded-xl object-cover"
                src="https://i.postimg.cc/6QsJ4BFh/Screenshot-2024-05-31-at-20-23-44.png"
                width={600} 
                height={600} 
                alt="Gift Card" />
        </div>
       
        <p className="text-xl md:text-4xl font-medium text-center py-18">
            Easy to give. Easy to love. <br/>
            Never expires.
        </p>

        {/* Gift cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 mb-24">
            {
                Array(6).fill(0).map((_, i) => (
                    <Image 
                    key={i}
                    className="rounded-xl w-full"
                    src="https://images.unsplash.com/photo-1549116917-bccf55924737?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={300} 
                    height={200} 
                    alt="Gift Card" />
                ))
            }
        </div>

        <div 
            className="rounded-xl w-full h-96 bg-cover bg-center mt-24"
            style={{backgroundImage: "url('https://images.unsplash.com/photo-1549116917-bccf55924737?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}
        >
            <div className="flex justify-start items-center h-full bg-black bg-opacity-50 rounded-xl">
                <h2 className="text-white text-xl md:text-5xl font-normal text-left ps-1 md:ps-12">
                    A key to the world <br/> of PaceDream
                </h2>
            </div>

        </div>

        {/* corporate gif card */}
        <div className="flex justify-between flex-wrap py-18">
            <h2 className="text-xl md:text-4xl font-medium text-left py-12 flex-1">
                Corporate <br/>gift cards
            </h2>
            <p className="text-xl md:text-2xl font-normal text-left py-12">
                 Give your customers and employees <br/> the gift of travel. <br/>
                 <Link className="underline" href="#">Learn More</Link>
            </p>
        </div>
        <hr className="my-24"/>

        {/* faq */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
            <div className="col-span-1">
                <h2 className="text-2xl md:text-4xl font-medium">
                    Frequently <br/> asked questions
                </h2>
                <p className="text-xs">
                    For other questions, please visit our 
                    <Link className="underline ml-1 font-semibold" href="#">help center?</Link>
                </p>
            </div>

            {/* faqs expandable div */}
            <div className="col-span-1 grid grid-cols-1 gap-6">
               {
                 fags.map((faq, i) => (
                    <div key={i} className={`hover:ring-1 transition-all duration-700 shadow-md w-full md:w-[30em] rounded-md ring-0 p-4 mb-2 ${expanded===i ? 'ring-1 ring-primary-400 shadow-primary-400':''}`} >
                        <div 
                            onClick={() => handleExpand(i)}
                            className="flex cursor-pointer justify-between py-4 gap-2 items-center">
                            <h3
                                className="text-xs md:text-sm font-medium flex-1">
                               {faq.question}
                            </h3>
                            <button 
                                className={`text-xs md:text-xl font-medium text-primary-800 shadow-lg p-2 rounded-full ${expanded == i ? 'bg-primary-700 text-white':'bg-white'}`}>
                                {expanded === i ? <BiChevronDown/> : <BiChevronRight/>}
                            </button>
                        </div>
                        {/* expand with transition */}
                       <p className={`text-xs mr-0 md:mr-4 ${expanded !==i ? 'h-0 opacity-0 overflow-hidden':'h-fit opacity-90'}`}>
                            {faq.answer}
                       </p>
                    </div>
                 ))
               }
            
            </div>
        </div>
         </div>
        <SectionSubscribe   />
    </section>
  );
}