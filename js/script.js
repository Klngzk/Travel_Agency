
var img ="./images/image.jpg"
var img1 ="./images/imageb.png"
$(document).on("click",'nav',()=>{
  if($(".volet3").css("display") == "none"){
    $(".volet3").show()
  }
})

/* Set the width of the sidebar to 250px (show it) */
function openNav(event) {
    $("#mySidepanel").slideToggle(1000)
    $(".openbtn").hide()
    $(".volet23").css("background-image","url("+img1+")")
    

  }
  
  /* Set the width of the sidebar to 0 (hide it) */
  function closeNav() {
    $("#mySidepanel").slideToggle(400)
    $(".openbtn").show()
    $(".volet23").css("background-image","url("+img+")")
    
  }

  function openNavf(event) {

    $("#mySidepanelf").toggle()
    $(".openbtnf").hide()
    window.scrollTo(0,document.body.scrollHeight);

    $(".volet4").css("opacity" ,"1")

  }
  
  /* Set the width of the sidebar to 0 (hide it) */
  function closeNavf() {
    $("#mySidepanelf").toggle()
    $(".openbtnf").show()

    $(".volet4").css("opacity" ,".4")

  
  }

$(document).on("click",".c",()=> { 
    $(".volet3").hide()
});

