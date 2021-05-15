import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function AnnouncementRootRedirector() {
  const router = useRouter();

  useEffect(() => {
    router.push("/announcement/school");
  });

  return null;
}
