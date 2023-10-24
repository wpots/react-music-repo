import { IEvent } from "@/domain/Event";
import { Typography } from "@mui/material";
export interface EventItemProps {
  item: IEvent;
}
export default function EventItem({ item }) {
  return (
    <>
      <Typography component="h2">{item.title}</Typography>
    </>
  );
}
