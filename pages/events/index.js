import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';

function AllEventsPage() {
  const events = getAllEvents();

  return (
    <div>
      <h1>All Events</h1>
      <EventList events={events} />
    </div>
  );
}

export default AllEventsPage;
