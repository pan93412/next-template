import React from "react";
import Image from "next/image";

export default function Navbar() {
  // const router = useRouter();

  return (
    <div className="p-8 grid grid-col-1 md:grid-col-3 content-center items-center">
      <div className="col-start-1 col-end-1">
        {/* {router.pathname !== "/" && (
          <button
            type="button"
            className="w-min mr-3"
            onClick={() => router.back()}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
        )} */}
        <Image src="/icon.svg" width="36em" height="36em" />
      </div>
      <div className="col-start-1 md:col-start-2 col-end-2" />
    </div>
  );
}
