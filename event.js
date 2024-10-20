// Event data
const events = [
    { title: "Tech Conference 2024", date: "November 5, 2024", description: "A conference on emerging technologies and innovations." },
    { title: "AI Workshop", date: "December 1, 2024", description: "A hands-on workshop on AI and machine learning." },
    { title: "Hackathon 2024", date: "January 15, 2025", description: "A 48-hour hackathon to solve real-world problems." },
    { title: "Web Development Bootcamp", date: "February 10, 2025", description: "An intensive bootcamp to learn full-stack web development." }
];

// Function to display events
function displayEvents() {
    const eventList = document.getElementById('event-list');

    // Check if there are any events
    if (events.length > 0) {
        events.forEach(event => {
            // Create a new div for each event
            const eventDiv = document.createElement('div');
            eventDiv.classList.add('event');

            // Create event title
            const eventTitle = document.createElement('h2');
            eventTitle.textContent = event.title;

            // Create event date
            const eventDate = document.createElement('p');
            eventDate.classList.add('date');
            eventDate.textContent = `Date: ${event.date}`;

            // Create event description
            const eventDescription = document.createElement('p');
            eventDescription.textContent = event.description;

            // Append title, date, and description to the event div
            eventDiv.appendChild(eventTitle);
            eventDiv.appendChild(eventDate);
            eventDiv.appendChild(eventDescription);

            // Append the event div to the event list
            eventList.appendChild(eventDiv);
        });
    } else {
        const noEventMessage = document.createElement('p');
        noEventMessage.textContent = "No upcoming events.";
        eventList.appendChild(noEventMessage);
    }
}

// Call the function to display events when the page loads
window.onload = displayEvents;
