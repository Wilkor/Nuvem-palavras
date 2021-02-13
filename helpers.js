function guid4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

function uuidv4() {
  return (Math.random() + 1).toString(36).substring(7)
  
}


function createPostMessage(){

let eventCaller = window.name;

let trackingProperties = {
      id: uuidv4()
    }

 let message = {
      message: {
        action: `blipEvent:heightChange`,
        content:815,
        caller: eventCaller
      },
      trackingProperties
    }

  
  return message;

}

function createPayloadGetTickets(){

  payload = {
    "id": guid4(),
    "to": "postmaster@desk.msging.net",
    "method": "get",
    "uri": "/tickets/"
    }

  return payload;

}


function createPayloadGetThreads(randomElement){

  payload = {
    "id": guid4(),
    "to": "postmaster@desk.msging.net",
    "method": "get",
    "uri": "/tickets/"+randomElement+"/messages"
    }

    return payload;
}

function getBaseUrl(){

 const url = "https://http.msging.net/commands"
  return url;
}

function getRadomTicket(arrayTickets){
  const randomElement = arrayTickets[Math.floor(Math.random() * arrayTickets.length)];

   return randomElement;
}

function returnListOfTickets(tickets){

 let listOfIds = []

  tickets.resource.items.map(function(e){
         
    listOfIds.push(e.id)
  })

  return listOfIds;

}

function getKeyUrl(){
  
  let queryString = window.location.search;

  let keyBot = decodeURIComponent(queryString.split("key=")[1]);

  return keyBot;
}