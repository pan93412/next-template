import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { displayNameId } from "../LocalDB/consts";
import LocalDB from "../LocalDB";

const localDB = LocalDB.getInstance();

export default function Navbar() {
  const [user, setUser] = useState("a user");
  useEffect(() => {
    const v = localDB.get(displayNameId);
    if (v) setUser(v);
  });

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
      <div className="col-start-3 col-end-3 justify-self-end">
        Hi, {user}. <Link href="/setup">[Setup]</Link>
      </div>
    </div>
  );
}
