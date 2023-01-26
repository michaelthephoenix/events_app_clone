import AllEvents from "../../src/components/events/events-page";

const EventsPage = ({data}) => {
  return <AllEvents data={data} />;
};

export default EventsPage;


export async function getStaticProps(c) {
  const { events_categories } = await import("/Users/This PC/Desktop/NextjsLab/NextjsClass/class101/events_app/data/data.json");

  return {
    props: {
      data: events_categories,
    },
  };
}
