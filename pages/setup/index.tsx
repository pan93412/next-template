import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import BaseInput from "../../components/BaseElements/BaseInput";
import LocalDB from "../../components/LocalDB";
import BasePage from "../../components/Page/BasePage";

const db = LocalDB.getInstance();
const displayNameId = "setup.displayName";

export default function Setup() {
  const router = useRouter();
  const [displayName, setDisplayName] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const dbVal = db.get(displayNameId);
    if (dbVal && !loaded) setDisplayName(dbVal);
    setLoaded(true);
  });

  const onSubmit = async () => {
    if (displayName.length > 0) db.set(displayNameId, displayName);
    await router.push("/");
    return true;
  };

  return (
    <BasePage id="setup" title="設定">
      <div className="setup-part flex w-full h-full content-center items-start justify-center">
        <div className="setup-title-part pr-10">
          <p className="title text-3xl font-bold leading-relaxed">Welcome.</p>
          <p className="description text-xl leading-relaxed">
            Let’s set up your identification.
          </p>
        </div>
        <div className="setup-config-part">
          <form
            className="setup-config-form"
            onSubmit={async (event) => {
              event.preventDefault();
              await onSubmit();
            }}
          >
            <BaseInput
              id="display-name"
              label="Display Name"
              value={displayName}
              onChange={setDisplayName}
            />
            <button type="submit" className="mt-4">
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </form>
        </div>
      </div>
    </BasePage>
  );
}
