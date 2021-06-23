import Layout from "@/components/layout";
import { API_URL } from "@/config/index";
export default function HomePage() {
  return (
    <Layout>
      <h1>Proximos Eventos</h1>
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
