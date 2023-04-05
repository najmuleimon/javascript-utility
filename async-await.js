const hasMeeting = true;

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

const addToCalendar = (meetingDetails) => {
  const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
  return Promise.resolve(calendar)
}

async function myMeeting(){
  try{
    const meetingDetails = await meeting;
    const calendar = await addToCalendar(meetingDetails);
    console.log(calendar);
  }
  catch{
    console.log('Something went wrong');
  }
}

myMeeting()
console.log('hello');