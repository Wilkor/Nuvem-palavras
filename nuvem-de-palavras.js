

function start(){

  document.getElementById('atendimento').checked = true
const message = createPostMessage()

window.parent.postMessage(message ,'*')


  document.getElementById("go").click()
    
}


function downloadSVG(){

  document.getElementById("download-svg").click();
}

function startServices(){


  if(document.getElementById('atendimento').checked) {
   
    getTickets();

  }else if(document.getElementById('tags').checked) {

    getTagsOfTickets()
  }
  
}

function resetButtonStartService() {



  let hasNone =  document.getElementById("go").style.display

  if(hasNone == 'none'){

   
    document.getElementById("go").style.display = 'block'
  }
  
  }
