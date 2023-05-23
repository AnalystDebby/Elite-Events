import Image from "next/image";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

const Page = ({ data }) => {
  const inputEmail = useRef();
  console.log(inputEmail);
  const router = useRouter;
  console.log(router);

  function onSubmit(e) {
    e.preventDefault();
    const emailValue = inputEmail.current.value;
  }
  return (
    <div className="event_single_page">
      <h1> {data.title} </h1>
      <Image src={data.image} width={1000} height={500} alt={data.title} />
      <p> {data.description} </p>
      <form className="email_registration" onSubmit={onSubmit}>
        <label> Get Registered for this event!</label>
        <input
          ref={inputEmail}
          type="email"
          id="email"
          placeholder="Please insert your email here"
        />
        <button type="submit"> Submit</button>
      </form>
      <p></p>
    </div>
  );
};

export default Page;

export async function getStaticPaths() {
  const fs = require("fs/promises");
  const path = require("path");
  const filePath = path.join(process.cwd(), "/data", "/data.json");

  let data = await fs.readFile(filePath);
  data = JSON.parse(data);
  const { allEvents } = data;

  const allPaths = allEvents.map((path) => {
    return {
      params: {
        cat: path.city,
        id: path.id,
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context?.params.id;
  const fs = require("fs/promises");
  const path = require("path");
  const filePath = path.join(process.cwd(), "/data", "/data.json");

  let eventsData = await fs.readFile(filePath);
  eventsData = JSON.parse(eventsData);
  const { allEvents } = eventsData;

  const eventData = allEvents.find((ev) => ev.id === id);

  return {
    props: {
      data: eventData,
    },
  };
}
