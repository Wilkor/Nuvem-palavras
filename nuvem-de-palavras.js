

function start(){

const message = createPostMessage()

window.parent.postMessage(message ,'*')

setInterval(function(){
    
      document.getElementById("go").click()
    
},60000);

}


function downloadSVG(){

  document.getElementById("download-svg").click();
}

function startServices(){

  getTickets();
  
}
