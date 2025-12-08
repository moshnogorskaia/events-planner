import EventItem from './event-item';

function EventList({ events }) {
  return (
    <ul>
      {events.map((event) => (
        <EventItem key={event.id} {...event} />
      ))}
    </ul>
  );
}

export default EventList;
