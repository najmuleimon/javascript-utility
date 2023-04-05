const hasMeeting = false;

const meeting = new Promise((resolve, reject) => {
  if(!hasMeeting){
    const meetingDetails = {
      name: "Technical Meeting",
      location: "Google meet",
      time: "10.00 am"
    }
    resolve(meetingDetails);
  }
  else{
    reject(new Error("Meeting already scheduled"))
  }
})

// const addToCalendar = (meetingDetails) => {
//   return new Promise((resolve, reject) => {
//     const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
//     resolve(calendar)
//   })
// }

// similar code block for addToCalendar function
const addToCalendar = (meetingDetails) => {
  const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
  return Promise.resolve(calendar)
}

meeting
  .then(addToCalendar)
  .then(res => console.log(res))
  .catch(err => console.log(err.message));

  console.log('hello');