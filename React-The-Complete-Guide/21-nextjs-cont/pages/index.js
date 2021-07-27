import Head from "next/head";

import { MongoClient } from "mongodb";

import MeetupList from "../components/meetups/MeetupList";
import { Fragment } from "react";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

// export async function getServerSideProps(context) {
//   const req = context.req; // Not unlike Express here.
//   const res = context.res;

//   // fetch data from an API/Database
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//     // no revalidate. This runs on every request.
//   };
// }

export async function getStaticProps() {
  // fetch data from an API/Database

  const client = await MongoClient.connect(
    "mongodb+srv://telestrial:........@cluster0.hvaoa.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollections = db.collection("meetups");

  const meetups = await meetupsCollections.find().toArray();

  client.close();

  return {
    // must return object
    props: {
      // must contain props key
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
