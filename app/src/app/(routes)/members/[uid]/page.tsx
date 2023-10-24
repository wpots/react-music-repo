import { Typography } from "@mui/material";

export default async function MemberProfilePage({ params }: any): Promise<any> {
  return <Typography>{params.uid}</Typography>;
}
