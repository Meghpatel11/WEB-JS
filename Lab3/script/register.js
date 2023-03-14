/* 
Name: Megh Patel
ID: 100802838
Date: 3/4/23
Discription: JS file for functions of Registration page
*/

// User class with required parameters 
class User
{
    constructor(firstName, lastName, username, email, password)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.password = password;
    }
}

// adding div to the form to display errors

jQuery('<div>', {
    id: 'ErrorMessage',
}).appendTo('#regForm');

// mail validate function

function validate_email(email)
    {
    let emailExp = new RegExp(/^[a-zA-Z0-9._-]{5,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/);
    return emailExp.test(email);
    }

// btn click event
let btnReg = $('#btnregister');
$(btnReg).click((e) =>

{ 
    e.preventDefault();
            
    // getting all elements 

    let fname = document.getElementById("firstName").value;
    let lname = document.getElementById("Lastname").value;
    let mail = document.getElementById("MailId").value;
    let pdw = document.getElementById("Password").value;
    let cpdw = document.getElementById("ConfirmPassword").value;
    let uname = lname + fname[0];

    // logic to display respective error messages 

        if (fname < 2 || lname < 2)
        {
            $('#ErrorMessage').text('The FirstName and LastName should be more than 2 characterlong');
        }

        else if(!validate_email(mail))
        {
            $('#ErrorMessage').text('The mail should be more than minimum of 8 character and with @');
        }

        else if (cpdw < 8 || pdw < 8)
        {
            $('#ErrorMessage').text('Password should have minimum length of 8 charactor');
        }

        else if (cpdw !== pdw )
        {
            $('#ErrorMessage').text('Password does not match. try again');
        }

        // creating new user
        let user_1 = new User(fname, lname, uname, mail, pdw);
        console.log(user_1);

        // clear the register form inputs 
    
        $(':input','#regForm')
        .not(':button, :submit, :reset, :hidden')
        .val('')
        .prop('checked', false)
        .prop('selected', false);
})