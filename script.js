// All images akta array te anlam
var allImages = ["images/1.jpeg", "images/2.jpg", "images/3.png"];

// Image ke find korlam
var imageFind = document.querySelector('img');

var count = 0;
// Button er jonno function create korlam
function prev(){
    count --;
    if(count < 0){
        count = allImages.length - 1;
        imageFind.src = allImages[count]
    } else{
        imageFind.src = allImages[count]
    }
};
function next(){
    count++;
    if(count>=allImages.length){
        count = 0;
        imageFind.src = allImages[count]
    } else{
        imageFind.src = allImages[count]
    }
};

