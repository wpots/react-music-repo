import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import ContentService from "@/utils/ContentService.service";
import getEventsQuery from "@/utils/queries/getEvents.graphql";
import { Typography } from "@mui/material";

export default async function Page(): Promise<any> {
  const session = await getServerSession(authOptions);

  if (session) {
    try {
    } catch (error) {}
  }
  const events = await ContentService.fetchContent(getEventsQuery, undefined, "mapEvents");

  return (
    <div className="grid grid-cols-2 text-white p-4">
      {session && events?.length > 0 && events.map((e, idx) => <h4 key={idx}>{e.title}</h4>)}
    </div>
  );
}
