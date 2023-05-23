import Image from "next/image";
import Link from "next/link";
import React from "react";

export const HomePage = ({ data }) => {
  return (
    <div className="home_body">
      {data?.map((ev) => (
        <Link key={ev.id} href={`/events/${ev.id}`} className="card" passHref>
          <div className="image">
            <Image width={600} height={400} alt={ev.title} src={ev.image} />
          </div>
          <div className="content">
            <h2> {ev.title} </h2>
            <p> {ev.description} </p>
          </div>
        </Link>
      ))}
    </div>
  );
};
