
 function getTickets(){

  var keyBot = getKeyUrl()

  const payload = createPayloadGetTickets();

       $.ajax({
           type: "POST",
           dataType: 'json',
           url: getBaseUrl(),
           crossDomain: true,
           async: false,
           contentType: "application/json; charset=utf-8",
           beforeSend: function(xhr) {
               xhr.setRequestHeader('Authorization', keyBot);
           },
           error: function (jqXHR, textStatus, errorThrown) {
               console.log(textStatus);
    
           },
           success: function (result) {

            const listOfTickets = returnListOfTickets(result)

            showCloudsWords(listOfTickets, keyBot)
                
           },
           data: JSON.stringify(payload)
       });

  }


  function showCloudsWords(arrayTickets, keyBot){

    
      const randomElement = getRadomTicket(arrayTickets);
      const payload = createPayloadGetThreads(randomElement);

       $.ajax({
           type: "POST",
           dataType: 'json',
           url: getBaseUrl(),
           crossDomain: true,
           async: false,
           contentType: "application/json; charset=utf-8",
           beforeSend: function(xhr) {
               xhr.setRequestHeader('Authorization', keyBot);
           },
           error: function (jqXHR, textStatus, errorThrown) {
               console.log(textStatus);
           },
           success: function (msg) {

            let text =``;

            msg.resource.items.forEach(function(e){

               text += e.content;
            })

            document.getElementById("text").innerHTML =   JSON.stringify(text)
            document.getElementById('go').style.display ="none"
               
           },
           data: JSON.stringify(payload)
       });


  }