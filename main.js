var images = [
    "https://upload.wikimedia.org/wikipedia/pt/0/0b/Marge_Simpson.png" ,
    "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png" ,
    "https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png" ,
    "https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png"
];

var names = ["Poornima Jangala","Satish Polu", "Pranav Polu", "Keerti Polu",];


var i = 0;

function update()

{
    i++;
    var numbers_of_family_in_array = 5 ;
    if(i >= numbers_of_family_in_array)
    {
        i = 0;
    }
 var updatedImage = images[i];
 var updatednames = names[i];
document.getElementById("family_member_image").src = updatedImage;
document.getElementById("family_member_name").innerHTML = updatednames;


}
