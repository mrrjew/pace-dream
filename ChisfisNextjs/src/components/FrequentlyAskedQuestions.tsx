"use client";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const faq1 = [
  {
    question: "How does the Roommate Feature work?",
    answer:
      "The Roommate Feature is designed to make it easier for users to find roommates and split the cost of accommodations. Users can choose between two scenarios:\n\nPre-Booked Split: Where one user books and pays for a room and then finds another user to split the cost.\n\nWishlist Collaboration: Where a user expresses interest in a room but hasn't booked or paid yet, and then matches with another user to book the room together, splitting the cost equally.",
  },
  {
    question:
      "Can I use the Hourly Rental Service without creating an account?",
    answer:
      "Yes, our platform allows users to access and book hourly rentals for spaces and equipment without the need to log in. This feature is designed for convenience and quick access to flexible rental options.",
  },
  {
    question: "What types of spaces can I rent hourly?",
    answer:
      "Our Hourly Place Service offers a wide range of spaces for rent on an hourly basis, including restrooms, individual rooms, and parking spots, catering to a variety of needs and preferences.",
  },
  {
    question: "How do Last-Minute Deals work?",
    answer:
      "Our Last-Minute Deals provide users with access to discounted flight tickets and hotel rates available for last-minute bookings. This feature aims to help users save on travel costs and enjoy spontaneous trips with great deals.",
  },
];

const faq2 = [
  {
    question:
      "Is it necessary to log in to book hotels or access Last-Minute Deals?",
    answer:
      "No, users can book hotels and access Last-Minute Deals without logging in. Our goal is to offer convenience and quick access to these features for all users.",
  },
  {
    question: "How are payments and refunds handled in the Roommate Feature?",
    answer:
      "For the Roommate Feature, payments are processed securely through our platform. In the Pre-Booked Split scenario, the original booker receives credits equivalent to half the room's cost after the second user's payment is confirmed. In the Wishlist Collaboration, both users are required to pay their share to finalize the booking. Credits or refunds are issued only after the accommodation is utilized without any issues, ensuring fairness and satisfaction for both parties.",
  },
  {
    question:
      "What measures are in place to ensure security and fairness in roommate matching?",
    answer:
      "Our platform implements several security measures, including user verification and secure payment processing. For the Roommate Feature, users must log in, enhancing the trust and safety of the roommate matching process. We also offer support and mediation in case of disputes, ensuring a fair and satisfactory outcome for all parties involved.",
  },
  {
    question: "Can I cancel a roommate arrangement or hourly rental booking?",
    answer:
      "Yes, cancellations are possible but subject to specific terms and conditions, including cancellation fees and deadlines. We encourage users to review the cancellation policy carefully before making a booking to understand their rights and obligations.",
  },
];

const FrequentlyAskedQuestion = () => {
  return (
    <>
      <div className="hidden md:block">
        <p className="mb-8 text-5xl font-semibold text-center">
          Frequently asked questions
        </p>
        <div className="flex w-4/5 px-4 mx-auto -mb-10 ">
          <div className="w-1/2 p-2 mx-auto rounded-2xl">
            {faq1.map((item) => (
              <Disclosure key={item.question}>
                {({ open }) => (
                  <div className="flex flex-col items-center border border-r-0 border-l-0 border-b-[0.5px] py-2 ">
                    <Disclosure.Button className="flex items-center justify-between w-full h-20 px-4 py-4 text-lg font-medium text-left text-black rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                      <span className="w-11/12">{item.question}</span>
                      <ChevronUpIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-balck font-semibold mt-1 `}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel
                      className={`px-4 pb-2 pt-2 text-base font-medium text-gray-600 ${
                        open ? "block" : "hidden"
                      }`}
                    >
                      {item.answer}
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
            ))}
          </div>
          <div className="w-1/2 p-2 mx-auto rounded-2xl">
            {faq2.map((item) => (
              <Disclosure key={item.question}>
                {({ open }) => (
                  <div className="flex flex-col items-center py-2 border border-l-0 border-r-0">
                    <Disclosure.Button className="flex items-center justify-between w-full h-20 px-4 py-4 text-lg font-medium text-left text-black rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                      <span className="w-11/12">{item.question}</span>
                      <ChevronUpIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-balck font-semibold mt-1 `}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel
                      className={`px-4 pb-2 pt-2 text-base font-medium text-gray-600 ${
                        open ? "block" : "hidden"
                      }`}
                    >
                      {item.answer}
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FrequentlyAskedQuestion;
