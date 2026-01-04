import { getEventById, getFeaturedEvents } from '../../helpers/api-util';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import Head from 'next/head';
import Comments from '../../components/input/comments';

function EventDetailPage(props) {
  const event = props.event;

  if (!event) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }

  const { title, date, location, image, imageAlt, description } = event;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
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
      <Comments eventId={event.id} />
    </>
  );
}

export async function getStaticProps(context) {
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);
  return {
    props: {
      event,
      revalidate: 30,
    },
  };
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents();
  const paths = events.map((event) => ({
    params: { eventId: event.id },
  }));
  return {
    paths,
    fallback: 'blocking',
  };
}

export default EventDetailPage;
