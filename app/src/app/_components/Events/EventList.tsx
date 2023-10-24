import { Typography } from "@mui/material";
import EventItem from "./EventItem";
import EventCard from "./EventCard";
import { IEvent } from "@/domain/Event";

export interface EventListProps {
  items: IEvent[];
  listType: string;
}

const components: Record<any, any> = {
  card: EventCard,
  item: EventItem,
};

export default function EventList({ items, listType }: EventListProps) {
  const ListTypeComponent = components[listType];
  return (
    <>
      <Typography component="h2" variant="h4" gutterBottom>
        Aankomende Repetities
      </Typography>
      <div className="masonry-grid">
        {items.map((i, idx) => (
          <ListTypeComponent item={i} key={idx} />
        ))}
      </div>
    </>
  );
}
