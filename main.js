var family = ["My Family", "Father", "Mother", "Grandfather", "Grandmother"];
var images = ["family.jpeg", "man.jpeg", "woman.jpeg", "oldman.jpeg", "oldwoman.jpeg"];
var i = 0;
function update(){
    i++;
    var number_of_family_member_in_array = 5
    if(i > number_of_family_member_in_array){
        i = 0
    }
    var updatedImage = images[i];
    var updatedNames = family[i];
    document.getElementById("family_member_img").src = updatedImage ;
    document.getElementById("family_member_name").innerHTML = updatedNames ;
}