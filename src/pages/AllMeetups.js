import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";


function AllMeetups() {
    const[isLoading, setLoading] = useState(true);
    const[loadedMeetups, setLoadedMeetups] = useState([]);
    useEffect(() => {
        setLoading(true);
        fetch(
            'https://react-meetup-800b3-default-rtdb.firebaseio.com/meetups.json'
        ).then((response) => {
            return response.json();
        }).then(data => {
            const meetups = [];

            for(const key in data ) {
                const meetup = {
                    id: key,
                    ...data[key]
                };

                meetups.push(meetup);
            }


            setLoading(false);
            setLoadedMeetups(meetups);
        });
    }, []);

    if (isLoading) {
        return (
            <section>
                <p>Loading....</p>
            </section>
        )
    }

    return (
        <div>
            <h1>All Meetups</h1>
            <MeetupList meetups={loadedMeetups} />
        </div>
    )
}
export default AllMeetups;
