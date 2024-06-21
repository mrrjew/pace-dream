const Notifications = () => {
  return (
    <div className="flex flex-col gap-10 max-w-[852px] min-w-96 ">
      <div className="flex flex-col gap-5">
        {/* Notification */}
        <p className="text-[28px] font-semibold mt-2">Notifications By Email</p>
        <div className="flex flex-col gap-4">
          {/* 1 */}
          <div className="border-2 flex justify-between items-center bg-[#FFFFFF] p-5 rounded-xl lg:gap-60 gap-4">
            <label htmlFor="payment-1">
              <div className="flex items-center gap-5 ">
                <div>
                  <p className="text-xl font-medium">Comments</p>
                  <p className="text-[#757575] lg:w-[500px]">
                    Get notified when someones posts a comment on a posting.
                  </p>
                </div>
              </div>
            </label>
            <input
              type="checkbox"
              name=""
              id="payment-1"
              className="h-8 w-8 rounded-lg"
            />
          </div>
          {/* 2 */}
          <div className="border-2 flex justify-between items-center bg-[#FFFFFF] p-5 rounded-xl lg:gap-60 gap-4">
            <label htmlFor="payment-1">
              <div className="flex items-center gap-5 ">
                <div>
                  <p className="text-xl font-medium">Candidates</p>
                  <p className="text-[#757575] lg:w-[500px]">
                    Get notified when a candidate applies for a job.
                  </p>
                </div>
              </div>
            </label>
            <input
              type="checkbox"
              name=""
              id="payment-1"
              className="h-8 w-8 rounded-lg"
            />
          </div>
          {/* 3 */}
          <div className="border-2 flex justify-between items-center bg-[#FFFFFF] p-5 rounded-xl lg:gap-60 gap-4">
            <label htmlFor="payment-1">
              <div className="flex items-center gap-5 ">
                <div>
                  <p className="text-xl font-medium">Offers</p>
                  <p className="text-[#757575] lg:w-[500px]">
                    Get notified when a candidate accepts or rejects an offer.
                  </p>
                </div>
              </div>
            </label>
            <input
              type="checkbox"
              name=""
              id="payment-1"
              className="h-8 w-8 rounded-lg"
            />
          </div>
        </div>
        {/* Notification */}
        <p className="text-[28px] font-semibold mt-2">Push Notifications</p>
        <div className="flex flex-col gap-4">
          {/* 1 */}
          <div className="border-2 flex justify-between items-center bg-[#FFFFFF] p-5 rounded-xl lg:gap-60 gap-4">
            <label htmlFor="payment-1">
              <div className="flex items-center gap-5 ">
                <div>
                  <p className="text-xl font-medium">Everything</p>
                  <p className="text-[#757575] lg:w-[500px]">
                    Send every changes as a push notification.
                  </p>
                </div>
              </div>
            </label>
            <input
              type="checkbox"
              name=""
              id="payment-1"
              className="h-8 w-8 rounded-lg"
            />
          </div>
          {/* 2 */}
          <div className="border-2 flex justify-between items-center bg-[#FFFFFF] p-5 rounded-xl lg:gap-60 gap-4">
            <label htmlFor="payment-1">
              <div className="flex items-center gap-5 ">
                <div>
                  <p className="text-xl font-medium">Same As Email</p>
                  <p className="text-[#757575] lg:w-[500px]">
                    Send Every changes as a push notification.{" "}
                  </p>
                </div>
              </div>
            </label>
            <input
              type="checkbox"
              name=""
              id="payment-1"
              className="h-8 w-8 rounded-lg"
            />
          </div>
          {/* 3 */}
          <div className="border-2 flex justify-between items-center bg-[#FFFFFF] p-5 rounded-xl lg:gap-60 gap-4">
            <label htmlFor="payment-1">
              <div className="flex items-center gap-5 ">
                <div>
                  <p className="text-xl font-medium">No Push Notifications</p>
                  <p className="text-[#757575] lg:w-[500px]">
                    Send Every changes as a push notification.{" "}
                  </p>
                </div>
              </div>
            </label>
            <input
              type="checkbox"
              name=""
              id="payment-1"
              className="h-8 w-8 rounded-lg"
            />
          </div>
        </div>
        <div className="flex lg:gap-[555px] gap-7">
          <button type="reset" className="w-44 px-5 py-3 border-2 rounded-xl">
            Cancel
          </button>
          <button
            type="submit"
            className="w-44 px-5 py-3 border rounded-xl bg-[#632DF8] text-white"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
