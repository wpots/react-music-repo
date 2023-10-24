import { Document } from "@contentful/rich-text-types";
export type IMember = {
  title: string;
  role: "admin" | "member";
  firstName: string;
};

export type IUser = {
  title: string;
};

export type ITeam = {
  name: string;
  email?: string;
  responsibilities: { json: Document };
  members: IMember[];
};
