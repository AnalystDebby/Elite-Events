import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function EventsPage({ data }) {
  return (
    <div className="events_page">
      {data?.map((ev) => (
        <Link key={ev.id} href={`/events/${ev.id}`} className="card" passHref>
          <Image src={ev.image} alt={ev.title} width={500} height={500} />{" "}
          <h2>{ev.title} </h2>
        </Link>
      ))}
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

// .events_page {
//   display: flex;
//   flex-direction: row;
//   gap: 20px;

//   .card {

//     position: relative;

//     h2 {
//       position: absolute;
//       width: 100%;
//       top: 50%;
//       text-align: center;
//       font-size: 38px;
//       color: white;
//       text-transform: uppercase;
//       text-shadow: 1px 1px 20px black;
