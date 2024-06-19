

import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";

const page = ({ main, curr_route }: any) => {
    return (
      <div>
        <p className="flex items-center gap-2 text-sm">
          <Link href="/acc-setting">{main}</Link>
          <FaChevronRight />
          {curr_route}
        </p>
      </div>
    );
  };
  export default page;
