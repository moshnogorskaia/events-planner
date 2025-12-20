import { getEventById, getAllEvents } from '../../helpers/api-util';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';

function EventDetailPage(props) {
  const event = props.event;

  if (!event) {
    return <div>Event not found</div>;
  }

  const { title, date, location, image, imageAlt, description } = event;

  return (
    <>
      <EventSummary title={title} />
      <EventLogistics
        date={date}
        address={location}
        image={image}
        imageAlt={imageAlt}
      />
      <EventContent>
        <p>{description}</p>
      </EventContent>
    </>
  );
}

export async function getStaticProps(context) {
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);
  return {
    props: {
      event,
    },
  };
}

export async function getStaticPaths() {
  const events = await getAllEvents();
  const paths = events.map((event) => ({
    params: { eventId: event.id },
  }));
  return {
    paths,
    fallback: false,
  };
}

export default EventDetailPage;
