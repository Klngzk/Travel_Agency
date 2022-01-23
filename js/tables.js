$("#add_btn").on("click",(e)=>{
    $(".table").hide()
    $(".form").show()
    $("#btn-edit").hide()
    $("#btn-submit").show()
    $(".headelm").hide()
    

})

$("#btn-submit,#btn-edit").on("click",()=>{
   
    var name= $("#inputname")
    var num= $("#inputnum")
    var des= $("#inputdes")
    var email= $("#inputemail")
    var place= $("#inputplace")

if(name.val() == "" || num.val()== "" || email.val()== "" || des.val()== "" || place.val()== ""){
    return alert("veuillez remplir tous les champs ")
}

    $(".t-v").append(`<tr>
    <th class="name">${name.val()}</th>
    <td class="num">${num.val()}</td>
    <td class="des">${des.val()}</td>
    <td class="class">${place.val()}</td>
    <td> <button class="edit btn btn-success">Edit</button> 
        <button class="delete btn btn-danger">Delete</button>
        <button class="confirm btn btn-primary" style="display: none;">Confirm</button>
    </td>
  </tr>`)

  name.val("")
  num.val("")
  email.val("")
  des.val("")
  place.val("Pick..")

  $(".table").show()
  $(".form").hide()
  $(".headelm").show()




})
$(document).on("click",".edit",(event)=>{
    $("#add_btn").hide()
    $(".table").hide()
    $(".form").show()
    $(".headelm").hide()

    var iname= $("#inputname")
    var inum= $("#inputnum")
    var ides= $("#inputdes")
    var iemail= $("#inputemail")

    var name= $(event.target).closest("tr").find(".name")
    var num= $(event.target).closest("tr").find(".num")
    var email= $(event.target).closest("tr").find(".email")
    var des= $(event.target).closest("tr").find(".des")
    console.log(name)

    iname.val(name.text())
    inum.val(num.text())
    iemail.val(email.text())
    ides.val(des.text())

    $("#btn-submit").hide()
    $("#btn-edit").show()
    $(event.target).closest("tr").remove()
    // console.log($(event.target).closest("tr").find(".name"))
    // $(event.target).closest("tr").find(".fname").html(`<input class='mfirst' type="text" placeholder="First Name">`)
    // $(event.target).closest("tr").find(".lname").html(`<input class="mlast" type="text" placeholder="Last Name">`)
    // $(event.target).closest("tr").find(".email").html(`<input class='memail' type="text" placeholder="Email">`)


    // email.show()
    // fname.show()
    // lname.show()
    // $(event.target).parent().find(".confirm").show()

})
$(document).on("click",".delete",(event)=>{
    $(event.target).closest("tr").remove()
})

// function addTodo(){
//         var textval = $("#todo").val()
//         var textval = $("#todo").val()
//         var textval = $("#todo").val()
//         $("tbody").append(`<tr>
//         <th class='email'>${textval} <input class='memail' type="text" placeholder="Email" style="display:none;"></th>
//         <td class='fname'><input class='mfirst' type="text" placeholder="First Name"></td>
        
//         <td class='lname'><input class="mlast" type="text" placeholder="Last Name"></td>
//         <td> <button class="edit btn btn-success">Edit</button> 
//             <button class="delete btn btn-danger">Delete</button>
//             <button class="confirm btn btn-primary">Confirm</button></td>
//       </tr>`)

              
// }