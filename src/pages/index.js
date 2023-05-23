import { HomePage } from "@/src/components/home";

export default function Home({ data }) {
  return (
    <div>
      <HomePage data={data} />
    </div>
  );
}

export async function getStaticProps() {
  const fs = require("fs/promises");
  const path = require("path");
  const filePath = path.join(process.cwd(), "/data", "/data.json");

  let data = await fs.readFile(filePath);
  data = JSON.parse(data);
  const { events_categories } = data;

  return {
    props: {
      data: events_categories,
    },
  };
}
