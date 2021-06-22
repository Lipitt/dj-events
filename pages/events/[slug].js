import { useRouter } from "next/router";
import Layout from "../../components/layout";

export default function EventPage() {
  const router = useRouter();
  console.log(router);
  return (
    <Layout>
      <h1>Mi evento</h1>
    </Layout>
  );
}
