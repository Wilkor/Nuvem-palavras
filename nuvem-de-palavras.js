

function guid4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

function uuidv4() {
  return (Math.random() + 1).toString(36).substring(7)
  
}


function myFunction(){

var eventCaller = window.name;
var trackingProperties = {
      id: uuidv4()
    }
 var mensagem = {
      message: {
        action: `blipEvent:heightChange`,
        content:815,
        caller: eventCaller
      },
      trackingProperties
    }

console.log(mensagem)
  
window.parent.postMessage(mensagem ,'*')


    
    setInterval(function(){
        
         document.getElementById("go").click()
        
    },60000)

   
}

 function getTickets(){

  var queryString = window.location.search;

  var keyBot = decodeURIComponent(queryString.split("key=")[1]);

    var urlApi =  "https://http.msging.net/commands";

    payload = {
                "id": guid4(),
                "to": "postmaster@desk.msging.net",
                "method": "get",
                "uri": "/tickets/"
                }

       $.ajax({
           type: "POST",
           dataType: 'json',
           url: urlApi,
           crossDomain: true,
           async: false,
           contentType: "application/json; charset=utf-8",
           beforeSend: function(xhr) {
               xhr.setRequestHeader('Authorization', keyBot);
           },
           error: function (jqXHR, textStatus, errorThrown) {
               console.log(textStatus);
               alert('Falha na consulta de valores específicos, erro:' + textStatus);
           },
           success: function (msg) {

           
            let ids = []

                msg.resource.items.map(function(e){
                       
                      ids.push(e.id)
                })


               showClouds(ids,keyBot)
               
               
           },
           data: JSON.stringify(payload)
       });

  }


  function showClouds(ids,keyBot){

    const randomElement = ids[Math.floor(Math.random() * ids.length)];

    
    var urlApi =  "https://http.msging.net/commands";

    payload = {
                "id": guid4(),
                "to": "postmaster@desk.msging.net",
                "method": "get",
                "uri": "/tickets/"+randomElement+"/messages"
                }

       $.ajax({
           type: "POST",
           dataType: 'json',
           url: urlApi,
           crossDomain: true,
           async: false,
           contentType: "application/json; charset=utf-8",
           beforeSend: function(xhr) {
               xhr.setRequestHeader('Authorization', keyBot);
           },
           error: function (jqXHR, textStatus, errorThrown) {
               console.log(textStatus);
               alert('Falha na consulta de valores específicos, erro:' + textStatus);
           },
           success: function (msg) {

            let textos =``;

            msg.resource.items.forEach(function(e){

               textos += e.content;
            })

            document.getElementById("text").innerHTML =   JSON.stringify(textos)
            document.getElementById('go').style.display ="none"
               
           },
           data: JSON.stringify(payload)
       });


  }

  function gerarSVG(){
    document.getElementById("download-svg").click()
  }
