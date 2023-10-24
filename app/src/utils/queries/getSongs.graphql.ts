import { MemberDTO } from "./getMembers.graphql";

export type SongDTO = {
  title: string;
  googleDriveLink?: string;
  s1Collection?: { items: MemberDTO[] };
  s2Collection?: { items: MemberDTO[] };
  a1Collection?: { items: MemberDTO[] };
  a2Collection?: { items: MemberDTO[] };
};
