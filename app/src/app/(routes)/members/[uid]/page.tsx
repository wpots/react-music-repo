import { Typography } from "@mui/material";
import { useRouter } from "next/router";

export default async function MemberProfilePage(): Promise<any> {
  const router = useRouter();
  const memberId = router.query.uid;

  return <Typography>{memberId}</Typography>;
}
