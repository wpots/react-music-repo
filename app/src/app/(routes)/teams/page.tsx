import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import ContentService from "@/utils/ContentService.service";
import TeamsList from "@/app/_components/Teams/TeamsList";

export default async function TeamsPage() {
  const session = await getServerSession(authOptions);

  if (session) {
    let teams;
    try {
      teams = await ContentService.fetchContentCollection("team", undefined);
    } catch (error) {
      console.log(error);
    }
    return teams?.length > 0 && <TeamsList items={teams} />;
  }
}
