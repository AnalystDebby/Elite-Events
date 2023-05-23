import Link from "next/link";
import React from "react";
import Image from "next/image";

const EventsCategoryPage = ({ data, pageName }) => {
  return (
    <div className="cat_events">
      <h1> Events in {pageName} </h1>

      <div className="content">
        {data.map((ev) => (
          <Link
            key={ev.id}
            href={`/events/${ev.city}/${ev.id}`}
            className="card"
            passHref
          >
            <Image width={300} height={300} alt={ev.title} src={ev.image} />
            <h2> {ev.title} </h2>
            <p> {ev.description} </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventsCategoryPage;

export async function getStaticPaths() {
  const fs = require("fs/promises");
  const path = require("path");
  const filePath = path.join(process.cwd(), "/data", "/data.json");

  let data = await fs.readFile(filePath);
  data = JSON.parse(data);
  const { events_categories } = data;

  const allPaths = events_categories.map((ev) => {
    return {
      params: {
        cat: ev.id.toString(),
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context?.params.cat;
  const fs = require("fs/promises");
  const path = require("path");
  const filePath = path.join(process.cwd(), "/data", "/data.json");

  let eventsData = await fs.readFile(filePath);
  eventsData = JSON.parse(eventsData);
  const { allEvents } = eventsData;

  const data = allEvents.filter((ev) => ev.city === id);

  return {
    props: {
      data,
      pageName: id,
    },
  };
}
