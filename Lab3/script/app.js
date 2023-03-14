/* 
Name: Megh Patel
ID: 100802838
Date: 2/5/23
Discription: JS file which contains logic for website
*/


// anonymous fnction as a wraper to all other functions
(function ()

{

/**
 * The page rander the given HTML content to the Home page
 */
function displayHome()
{

    // changing navbar text to "Interest"
    let navTxt = document.getElementById("productnav");
    navTxt.innerHTML = '<i class="fa fa-globe"></i> Interest';

    // adding HR tab to navbar
    const navLinkItem = document.createElement("li");
    navLinkItem.classList.add("nav-item");
    const navLink = document.createElement("a");
    navLink.classList.add("nav-link");
    navLink.setAttribute("href", "human-resources.html")
    navLink.innerHTML = '<i class="fa fa-globe"></i> Human Resources';
    navLinkItem.appendChild(navLink);
    document.querySelectorAll("nav ul li")[3].after(navLinkItem)

    // creating and geting elements by id
    let userMessage = document.getElementById("homeTitle");
    let imageElement = document.getElementById("homeImage");
    let textElement = document.getElementById("homeText");
    let footer = document.createElement('footer')
    
    // footer HTML
    let fixedNav = `<nav class="navbar fixed-bottom navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Fixed bottom</a>
                    </div>
                    </nav>`;
    
    // adding footer
    footer.innerHTML = fixedNav;
    imageElement.after(footer);

    // adding home page comntent
    userMessage.textContent = "Welcome User!!!";
    imageElement.src = "https://images.unsplash.com/photo-1600577916048-804c9191e36c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=800";
    textElement.textContent = "This is my lab-1 for WEBD 4201-05";
}

/**
 * The page rander the given HTML content to the product page
 */
function displayProduct()

{
    // changing navbar text to "Interest"
    let navTxt = document.getElementById("productnav");
    navTxt.innerHTML = '<i class="fa fa-globe"></i> Interest';

    // adding HR tab to navbar
    const navLinkItem = document.createElement("li");
    navLinkItem.classList.add("nav-item");
    const navLink = document.createElement("a");
    navLink.classList.add("nav-link");
    navLink.setAttribute("href", "human-resources.html")
    navLink.innerHTML = '<i class="fa fa-globe"></i> Human Resources';
    navLinkItem.appendChild(navLink);
    document.querySelectorAll("nav ul li")[3].after(navLinkItem)

    // creating respective element to enject HTML 
    let DocumentBody = document.body;
    let detailParagraph = document.createElement("detailParagraph");

    // HTML content to add
    let detailParagraphParagraph = `<div class="card-group">
            <div class="card" >
                <img class="interest-img" src="./images/book2.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">Atomic Habbits</h5>
                <p class="card-text">"Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones" is a self-help book written by James Clear. The book focuses on the concept of habits and how they shape our lives, both positively and negatively. Clear provides a step-by-step guide on how to create and maintain good habits and how to break bad ones.Atomic Habits has received positive reviews and is considered a valuable resource for anyone looking to improve their habits and reach their goals.</p>
                </div>
            </div>
            <div class="card">
                <img class="interest-img" src="./images/WM.JPG" class="card-img-top" alt="..." >
                <div class="card-body">
                <h5 class="card-title">Warzone Mobile</h5>
                <p class="card-text">Call of Duty: Warzone Mobile is a free-to-play Battle Royale game where players compete against each other to be the last person or team standing. The mobile version offers similar gameplay to the other versions of the game, allowing players to enjoy the Warzone experience on their mobile devices.Can't wait to play!!</p>
                </div>
            </div>
            <div class="card"  >
                <img class="interest-img" src="./images/jack1.JPG" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">Jack Ryan</h5>
                <p class="card-text">It is an action political thriller based on the characters created by Tom Clancy and stars John Krasinski in the title role of Jack Ryan, a CIA analyst who uncovers a pattern in terrorist communication and is drawn into a dangerous field mission. The series was well received by audiences and has received multiple seasons.</p>
                </div>
            </div>
            </div>`
    
    // adding content to element to show on page
    detailParagraph.setAttribute("class", "container");
    detailParagraph.innerHTML = detailParagraphParagraph;
    DocumentBody.appendChild(detailParagraph);
    
}

/**
 * The page rander the given HTML content to the services page
 */
function DisplayServicesPage()
{

    // changing navbar text to "Interest"
    let navTxt = document.getElementById("productnav");
    navTxt.innerHTML = '<i class="fa fa-globe"></i> Interest';

    // adding HR tab to navbar
    const navLinkItem = document.createElement("li");
    navLinkItem.classList.add("nav-item");
    const navLink = document.createElement("a");
    navLink.classList.add("nav-link");
    navLink.setAttribute("href", "human-resources.html")
    navLink.innerHTML = '<i class="fa fa-globe"></i> Human Resources';
    navLinkItem.appendChild(navLink);
    document.querySelectorAll("nav ul li")[3].after(navLinkItem)
    
    // creating respective element to enject HTML 
    let DocumentBody = document.body;
    let detailParagraph = document.createElement("detailParagraph");

    // HTML content for services page
    let detailParagraphParagraph = `<div class="card-group">
            <div class="card" >
                <img src="https://2022.sommetnumerique.ca/fr/sponsors/download/logo/19" class="card-img-top" alt="..."  >
                <div class="card-body">
                <h5 class="card-title">Super Proff</h5>
                <p class="card-text">It's my super proff profile where i am providing tutorials to all people who find it hard to code and assist them to develop logic</p>
                <a href="https://www.superprof.ca/programming-geek-helping-you-learn-programming-doing-projects-and-solving-questions.html" >click me</a>
                </div>
            </div>
            <div class="card">
                <img src="./images/logo.png" class="card-img-top" >
                <div class="card-body">
                <h5 class="card-title">Ace Python</h5>
                <p class="card-text">It's my IG page where I helped 3,000+ people learn and build their skill sets by sharing content online. I am a content creator & python geek who loves to guide programmers with their journey. </p>
                <a href="https://www.instagram.com/_ace.python_/" >click me</a>
                </div>
            </div>
            <div class="card"  >
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/dc/Portfolio.hu_full_logo.png" class="card-img-top" alt="..." >
                <div class="card-body">
                <h5 class="card-title">Protfolio</h5>
                <p class="card-text">I have created my protfolio to display my knowledge in Data Analysis. I have developed some projects by using technologies like python and SQL. </p>
                <a href="https://meghpatel11.github.io/Megh.github.io/">click me</a>
                </div>
            </div>
            </div>`;

        // Injecting HTML to created element
        detailParagraph.setAttribute("class", "container");
        detailParagraph.innerHTML = detailParagraphParagraph;
        DocumentBody.appendChild(detailParagraph);
    }

/**
 * print the user entered data to console and redirect user to home in 3s.
 */ 
function timeRedirect(e)
{
    let contactEmail = document.getElementById('exampleInputEmail1').value;
    let userFirstName = document.getElementById('exampleInputFirstName').value;
    let userLastName = document.getElementById('exampleInputLastName').value;
    let contactPassword = document.getElementById('exampleInputPassword1').value;
    let shortMessage = document.getElementById('exampleInputShortMessage').value;
    
    console.log("Email: " + contactEmail); console.log("First Name: " + userFirstName);
    console.log("Last Name: " + userLastName); console.log("Password: " + contactPassword);
    console.log("Short Message: " + shortMessage); e.preventDefault();
    
    setTimeout(
        function ()
        {
            window.location.href = "index.html";
        }, 3000)
    
    }
    
// calling function on btn click    
let submitButton = document.getElementById('submit-button');
if (submitButton)
{
    submitButton.addEventListener('click', timeRedirect, false);
}

/**
 * Function to load whole website by calling all functions above.
 */
function Start()
    {
        //changing text to "interests"
        document.querySelectorAll("nav ul li a")[1].innerHTML = '<i class="fa fa-globe"></i>Interests';
        let mainContent = document.querySelector("main");
        console.log(mainContent);

        //footer
        let footer = document.createElement("footer");
        footer.innerHTML = `        
        <nav class="navbar fixed-bottom text-white navbar-dark bg-dark justify-content-center">
          <p class="my-2"><i class="far fa-copyright"></i> Copyright Ace Python, 2023.</p>
        </nav>
        `;

        // injecting footer for all pages
        if (document.getElementsByTagName('main') != null) {
            document.body.appendChild(footer);
            console.log(footer);
        }
    
        // logic to rander all pages
        switch (document.title) 
        {
            case "Home":
                displayHome();
            break;
            case "Product":
                displayProduct();
            break;
            case "Services":
                DisplayServicesPage();
            break;
            

        }        
    }

    window.addEventListener("load", Start);
})();

