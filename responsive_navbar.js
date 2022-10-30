const responsive_navbar = () => {
    var x = document.getElementById("navbar");
    if(x.className === "navbar-menu"){
        x.className += " responsive";
    }else{
        x.className = "navbar-menu";
    }
}