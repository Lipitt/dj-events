import Link from "next/link";
import Layout from "@/components/layout";
import EventItem from "@/components/EventItem";
import { API_URL } from "@/config/index";

export default function HomePage({ events }) {
  return (
    <Layout>
      <h1>Proximos Eventos</h1>
      {events.length === 0 && <h3>No hay eventos para mostrar</h3>}

      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}
      {events.length > 0 && (
        <Link href="/events">
          <a className="btn-secondary">Ver todos los eventos</a>
        </Link>
      )}
    </Layout>
  );
}

// export async function getServerSideProps() {
//   const res = await fetch(`${API_URL}/api/events`);
//   const events = await res.json();

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  return {
    props: { events },
  };
}
