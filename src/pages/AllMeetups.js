import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
    {
        id: 'm1',
        title: 'First Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Nairobi_Montage_A.jpg/500px-Nairobi_Montage_A.jpg',
        address: 'MeetupStreet 1, 5545 Meetup City',
        description: 'Sed porttitor lectus nibh. Donec rutrum congue leo eget malesuada. Donec rutrum congue leo eget malesuada. Sed porttitor lectus nibh.\n' +
            '\n' +
            'Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec rutrum congue leo eget malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Sed porttitor lectus nibh.'
    },
    {
        id: 'm2',
        title: 'Second Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Mombasa_montage.png/500px-Mombasa_montage.png',
        address: 'MeetupStreet 2, 5545 Meetup City',
        description: 'Sed porttitor lectus nibh. Donec rutrum congue leo eget malesuada. Donec rutrum congue leo eget malesuada. Sed porttitor lectus nibh.\n' +
            '\n' +
            'Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec rutrum congue leo eget malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Sed porttitor lectus nibh.'
    },
    {
        id: 'm3',
        title: 'Third Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Skyline_of_Eldoret_Facing_West_from_Mups_Plaza.jpg/500px-Skyline_of_Eldoret_Facing_West_from_Mups_Plaza.jpg',
        address: 'MeetupStreet 3, 5545 Meetup City',
        description: 'Sed porttitor lectus nibh. Donec rutrum congue leo eget malesuada. Donec rutrum congue leo eget malesuada. Sed porttitor lectus nibh.\n' +
            '\n' +
            'Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec rutrum congue leo eget malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Sed porttitor lectus nibh.'
    },


];
function AllMeetups() {
    return (
        <div>
            <h1>All Meetups</h1>
            <MeetupList meetups={DUMMY_DATA} />
        </div>
    )
}
export default AllMeetups;
