import rwords from "random-words";
import LocalDB from "../../LocalDB";
import { displayNameId } from "../../LocalDB/consts";

const localDB = LocalDB.getInstance();

export function getUsername(): string | null {
  return localDB.get(displayNameId);
}

export function generateUsername(): string {
  const username = rwords(3).join("-");

  localDB.set(displayNameId, username);
  return username;
}

export default function GetOrGenerateUsername(): string {
  return getUsername() || generateUsername();
}
