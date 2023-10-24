import { IMember } from "./User";

export type ISong = {
  title: string;
  googleDriveLink?: string;
  s1: IMember[];
  s2: IMember[];
  a1: IMember[];
  a2: IMember[];
};
