"use client"
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

const faq = [
    {
        question: "How does the Roommate Feature work?",
        answer: "The Roommate Feature is designed to make it easier for users to find roommates and split the cost of accommodations. Users can choose between two scenarios:\n\nPre-Booked Split: Where one user books and pays for a room and then finds another user to split the cost.\n\nWishlist Collaboration: Where a user expresses interest in a room but hasn't booked or paid yet, and then matches with another user to book the room together, splitting the cost equally."
    },
    {
        question: "Can I use the Hourly Rental Service without creating an account?",
        answer: "Yes, our platform allows users to access and book hourly rentals for spaces and equipment without the need to log in. This feature is designed for convenience and quick access to flexible rental options."
    },
    {
        question: "What types of spaces can I rent hourly?",
        answer: "Our Hourly Place Service offers a wide range of spaces for rent on an hourly basis, including restrooms, individual rooms, and parking spots, catering to a variety of needs and preferences."
    },
    {
        question: "How do Last-Minute Deals work?",
        answer: "Our Last-Minute Deals provide users with access to discounted flight tickets and hotel rates available for last-minute bookings. This feature aims to help users save on travel costs and enjoy spontaneous trips with great deals."
    },
    {
        question: "Is it necessary to log in to book hotels or access Last-Minute Deals?",
        answer: "No, users can book hotels and access Last-Minute Deals without logging in. Our goal is to offer convenience and quick access to these features for all users."
    },
    {
        question: "How are payments and refunds handled in the Roommate Feature?",
        answer: "For the Roommate Feature, payments are processed securely through our platform. In the Pre-Booked Split scenario, the original booker receives credits equivalent to half the room's cost after the second user's payment is confirmed. In the Wishlist Collaboration, both users are required to pay their share to finalize the booking. Credits or refunds are issued only after the accommodation is utilized without any issues, ensuring fairness and satisfaction for both parties."
    },
    {
        question: "What measures are in place to ensure security and fairness in roommate matching?",
        answer: "Our platform implements several security measures, including user verification and secure payment processing. For the Roommate Feature, users must log in, enhancing the trust and safety of the roommate matching process. We also offer support and mediation in case of disputes, ensuring a fair and satisfactory outcome for all parties involved."
    },
    {
        question: "Can I cancel a roommate arrangement or hourly rental booking?",
        answer: "Yes, cancellations are possible but subject to specific terms and conditions, including cancellation fees and deadlines. We encourage users to review the cancellation policy carefully before making a booking to understand their rights and obligations."
    }
]


const FrequentlyAskedQuestionsMobile = () => {
    return (
        <div className="md:hidden block w-96  mx-2">
            <div className="w-full py-2">
                <p className='text-center mb-8 font-semibold text-4xl'>Frequently asked questions</p>
                <div className="mx-auto w-full max-w-md rounded-2xl p-2">
                    {faq.map((item) => (
                        <Disclosure key={item.question}>
                            {({ open }) => (
                                <div className=' border-2 border-r-0 border-l-0 border-b-[0.5px]'>
                                    <Disclosure.Button className="flex items-center h-20 w-full justify-between rounded-lg px-4 py-2 text-left text-base font-medium text-black  focus:outline-none focus-visible:ring ">
                                        <span className='w-11/12' >{item.question}</span>
                                        <ChevronUpIcon
                                            className={`${open ? 'rotate-180 transform' : ''
                                                } h-5 w-5 text-black`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="px-4 pb-2 pt-4 text-base text-gray-800">
                                        {item.answer}
                                    </Disclosure.Panel>
                                </div>
                            )}
                        </Disclosure>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default FrequentlyAskedQuestionsMobile