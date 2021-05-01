console.log("main");

function cartAction(imageName){
    cartImage = document.getElementById("cartImageId");
    source = "../images/latest/" + imageName;
    alert(cartImage);
    cartImage.src = "../images/latest/p1.jpg";
}