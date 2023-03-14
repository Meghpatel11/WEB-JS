/* 
Name: Megh Patel
ID: 100802838
Date: 3/4/23
Discription: JS file for functions of login page
*/

$('#btnLogin').click(() =>
{
    let uname = document.getElementById("userName").value;
    
    //changing "register" text to "username"
    document.querySelectorAll("nav ul li a")[5].innerHTML = `<i class="fa fa-user"></i>${uname}`;
    let mainContent = document.querySelector("main");
    console.log(mainContent);

    //changing "login" text to "logout"
    document.querySelectorAll("nav ul li a")[6].innerHTML = '<i class="fa fa-globe"></i>Logout';
    let mainContent1 = document.querySelector("main");
    console.log(mainContent1);

  
    // clear the register form inputs 
    $(':input','#regForm')
    .not(':button, :submit, :reset, :hidden')
    .val('')
    .prop('checked', false)
    .prop('selected', false);
})






