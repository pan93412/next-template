import React from "react";
import Link from "next/link";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/dist/client/router";
// import SearchBar from "./SearchBar";

export default function Navbar() {
  const router = useRouter();

  return (
    <div className="px-8 py-4 grid grid-col-1 md:grid-col-3 content-center items-center">
      <div className="col-start-1 col-end-1">
        {router.pathname !== "/" && (
          <button
            type="button"
            className="w-min mr-3"
            onClick={() => router.back()}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
        )}
        <Link href="/">SCHWEB</Link>
      </div>
      <div className="col-start-1 md:col-start-2 col-end-2">
        {/* <SearchBar /> */}
      </div>
    </div>
  );
}
