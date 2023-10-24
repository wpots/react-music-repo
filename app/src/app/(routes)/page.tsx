import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import ContentService from "@/utils/ContentService.service";

import EventList from "../_components/Events/EventList";

export default async function Page() {
  const session = await getServerSession(authOptions);

  if (session) {
    let events;
    try {
      events = await ContentService.fetchContentCollection("event", undefined);
      return <>{events?.length > 0 && <EventList items={events} listType="card" />}</>;
    } catch (error) {
      console.log(error);
      throw new Error(JSON.stringify(error) || "Could not get Events");
    }
  }
}
