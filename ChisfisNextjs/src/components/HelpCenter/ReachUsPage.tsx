import Image from "next/image";
import suportImg1 from "@/images/partner/everyone.png";
import reactionImg from "@/images/reaction-help-center.png";
const ReachUsPage = () => {
  return (
    <div className="inline-flex flex-col items-start gap-[60px]">
      <div>
        <div>
          <p className="text-[34px]">Where you can reach us</p>
          <p className="text-base text-[#5F6D7E] mt-4">Updated 7 months ago</p>
        </div>
        <p className="mt-9 text-[#5f6d7e] ">
          This article details the different ways you can get in touch with us
          at PaceDream for support.
        </p>
      </div>
      <div className="p-5">
        <p className="text-2xl">In this article:</p>
        <ul className="mt-5 ml-5 text-[#5f6d7e] list-disc">
          <li>Helping your guest</li>
          <li>Exploring Agoda Partner Hub</li>
          <li>Sending us a message via YCS</li>
          <li>Sending us a message via YCS (Pilot version)</li>
          <li>Contacting us by phone</li>
          <li>Booking-related assistance</li>
          <li>Contact us</li>
          <li>Learn more</li>
        </ul>
      </div>
      <div>
        <p className="text-[34px]">Helping your guest</p>
        <p className="text-[#5f6d7e] mt-4">
          Note: The contact details provided in this article refer to the team
          dedicated to assisting partners, the Accommodation Service Team.
          Guests, however, should contact the Agoda Customer Service Team.
          Therefore, to avoid redirection and increased time between responses
          please do not provide guests with the contact information listed
          below.
        </p>
        <p className="text-[#5f6d7e] mt-7">
          If your guest needs to contact us, please ask them to visit our Help
          Center.
        </p>

        <ul className="mt-5 ml-5 text-[#5f6d7e] list-disc">
          <li>
            We can provide customer support in your guests’ preferred language.
          </li>
          <li>
            The Help Center is a self-serve knowledge base that provides
            information to guests who need to manage their bookings.
          </li>
          <li>
            If your guests have further questions, please advise them to contact
            our Agoda Customer Service Team through the Help Center.
          </li>
        </ul>
      </div>
      <div>
        <p className="text-[34px] lg:leading-none leading-10">
          Exploring PaceDream Partner hub
        </p>
        <p className="text-[#5f6d7e] mt-4">
          Agoda Partner Hub was created to provide extensive resources to our
          partners.
        </p>
        <ul className="mt-5 ml-5 text-[#5f6d7e] list-disc">
          <li>
            Search for the topic you are interested in using keywords here.
          </li>
        </ul>
        <Image
          src={suportImg1}
          alt="support"
          height={243}
          width={720}
          className="mt-5"
        />
        <ul className="mt-5 ml-5 text-[#5f6d7e] list-disc">
          <li>Browse Partner Help for guidance and tutorials by topic here.</li>
        </ul>
        <Image
          src={suportImg1}
          alt="support"
          height={243}
          width={720}
          className="mt-5"
        />
      </div>
      <div>
        <p className="text-[34px] lg:leading-none leading-10">
          Exploring PaceDream Partner hub
        </p>
        <p className="text-[#5f6d7e] mt-4">
          If you need assistance with YCS, payment, your property listing, or
          rate calculations, you can send us a message by following the steps
          below:
        </p>
        <ul className="mt-5 ml-5 text-[#5f6d7e] list-decimal">
          <li>Login to YCS.</li>
          <li>
            Click on the Need Help button located in the bottom right corner of
            the page
          </li>
          <li>
            Do you see the Partner support center button?
            <ul className="ml-2 list-disc">
              <li>
                Yes: Click the Partner support center button and go to step 4.
              </li>
              <li>
                No: Read more in the Sending us a message via YCS (Pilot
                version) section.
              </li>
            </ul>
          </li>
        </ul>
        <ul className="mt-5 ml-5 text-[#5f6d7e] list-decimal">
          <li>
            Choose the support category that best fits your inquiry:
            <ul className=" ml-2 list-disc">
              <li>
                A booking or reservation: For changes, cancellations, booking
                processes or specific bookings. For specific bookings, please
                include the Agoda Booking ID in your message.
              </li>
              <li>
                Payments: For payouts, payments by Agoda.com, virtual credit
                cards, taxes and fees, or your bank account details.
              </li>
              <li>
                Rooms and rates: For prices, availability, and other information
                in your Agoda property listing.
              </li>
              <li>
                Extranet account settings: For assistance with YCS admin access,
                passwords, and Channel Managers.
              </li>
              <li>
                Registration/Contract: For business details, adding or removing
                properties, and contract terms.
              </li>
            </ul>
          </li>
        </ul>
        <ul className="mt-5 ml-5 text-[#5f6d7e] list-decimal">
          <li>Tell us more about the issue and click Continue.</li>
          <li>Insert your name and contact information.</li>
          <li>Click Submit.</li>
          <li>
            Your request has been received! We will notify you once the issue
            has been resolved, or if we need additional information, via email.
          </li>
          <li>Refer to the step-by-step guide, with screenshots, here!</li>
          <li>Refer to the images below for the end-to-end journey!</li>
        </ul>
        <p className="text-[#5f6d7e] mt-4">
          If you need additional help, simply respond to the email with
          additional information and we will respond as soon as possible.
        </p>
      </div>
      <div>
        <p className="text-[34px] leading-[47px]">
          Sending us a message via YCS (Pilot version)
        </p>
        <p className="text-[#5f6d7e] mt-4">
          Note: only some properties have access to this tool during the pilot
          run.
        </p>
        <ul className="mt-5 ml-5 text-[#5f6d7e] list-decimal">
          <li>Open the Chat tool via the Need help?</li>
          <li>Choose the support category that best fits your inquiry.</li>
          <li>
            The chat will provide instructions and Partner Help articles related
            to your inquiry.
          </li>
          <li>
            If the provided instructions or Partner Help articles did not
            resolve your problem, or if you need urgent assistance, follow the
            instructions provided in the chat for additional ways to contact us.
          </li>
        </ul>
      </div>
      <div>
        <p className="text-[34px] leading-[47px]">Contacting us by phone</p>
        <p className="text-[#5f6d7e] mt-4">
          If you have an urgent question about your property or partnership with
          us, please feel free to call us directly. Follow these steps to find a
          dedicated phone number to call:
        </p>
        <ul className="mt-5 ml-5 text-[#5f6d7e] list-decimal">
          <li>Log into YCS.</li>
          <li>
            Click on the Need Help? button to find the phone number to call.
          </li>
        </ul>
        <p className="text-[#5f6d7e] mt-4">
          Alternatively, you may find your local support phone number here.
        </p>
      </div>
      <div>
        <p className="text-[34px] leading-[47px]">Booking-related assistance</p>
        <p className="text-[#5f6d7e] mt-4">
          For booking-related issues, such as amendments, cancellations, guest
          contacts, and refunds, please email pacedream.com and provide the
          Agoda Booking ID.
        </p>
      </div>
      <div>
        <p className="text-[34px] leading-[47px]">Contact us</p>
        <p className="text-[#5f6d7e] mt-4">
          Still looking for a solution? Contact us via the YCS Need Help Button
          or other methods.
        </p>
      </div>
      <div className="mb-8">
        <p className="text-[34px] leading-[47px]">Learn More</p>
        <p className="text-[#5f6d7e] mt-4">Where you can reach us</p>
        <Image
          src={reactionImg}
          height={155}
          width={416}
          alt="reactionImg"
          className="mt-4"
        />
      </div>
    </div>
  );
};

export default ReachUsPage;
