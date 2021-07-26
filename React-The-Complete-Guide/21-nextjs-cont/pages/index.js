import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://images.unsplash.com/photo-1582537754953-4a0cc1ea4f94?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    address: "Barcelona, Spain",
    description: "The most beautiful location on Earth.",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://images.unsplash.com/photo-1582537754953-4a0cc1ea4f94?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    address: "Barcelona, Spain",
    description: "The most beautiful location on Earth.",
  },
  {
    id: "m3",
    title: "A Third Meetup",
    image:
      "https://images.unsplash.com/photo-1582537754953-4a0cc1ea4f94?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    address: "Barcelona, Spain",
    description: "The most beautiful location on Earth.",
  },
];

function HomePage() {
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    // send an http request and fetch data
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);

  return <MeetupList meetups={loadedMeetups} />;
}

export default HomePage;
