import { ISong } from "./Song";

export type IEvent = {
  title: string;
  date: Date | string;
  venue?: string;
  location?: { lon: string; lat: string };
  description?: string;
  repertoireList: ISong[];
};
