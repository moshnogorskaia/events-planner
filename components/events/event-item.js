function EventItem({ event }) {
  return (
    <li>
      <img src={event.image} alt={event.title} />
      <h2>{event.title}</h2>
      <p>{event.description}</p>
    </li>
  );
}

export default EventItem;
