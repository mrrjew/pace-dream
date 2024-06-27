import React, { FC } from "react";
import Textarea from "@/shared/Textarea";

export interface PageAddPartner10Props {}

const PageAddPartner10: FC<PageAddPartner10Props> = () => {
  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold">
          Let{"'"}s give a note for the roommate!
        </h2>
        <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
          Short titles work best. Have fun with it – you can always change it
          later.
        </span>
      </div>
      <div>
        <h3>Note</h3>
        <Textarea
          placeholder="You'll have a great time at this comfortable place to stay."
          rows={14}
        />
      </div>
    </>
  );
};

export default PageAddPartner10;
