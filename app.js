function homePageClickHandler(){
    console.log("Detected click on 'navBarLogo'")
    window.location.replace("/");
}

function aboutPageClickHandler(){
    console.log("Detected click on 'navBarCU'")
    window.location.replace("/contact-us");
}

function servicesPageClickHandler(){
    console.log("Detected click on 'navBarS'")
    window.location.replace("/services");
}

console.log("i hate js get this stuff off the face of the earth")

var navBarLogo = document.getElementById("navBarLogo")
navBarLogo.addEventListener('click', homePageClickHandler)

var navBarAbout = document.getElementById("navBarCU")
navBarAbout.addEventListener('click', aboutPageClickHandler)

var navBarServices = document.getElementById("navBarS")
navBarServices.addEventListener('click', servicesPageClickHandler)



