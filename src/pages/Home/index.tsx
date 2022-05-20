import Map from '../../components/common/Map';

function Home() {
  return (
    <section className="flex h-full">
      {/* TODO: remove this empty div and create the component containing it's own logic */}
      <div className="w-2/6 h-screen max-w-sm bg-white" />
      <Map />
    </section>
  );
}

export default Home;
