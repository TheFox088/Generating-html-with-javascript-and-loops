const emojisList = document.querySelector("#emojis-list");
const emojis = {
catEmojis: ["😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "🐱"],
};


function renderEmojis(){
    let ulElement= document.getElementById("emojis-list");
    for (i = 0; i < emojis.catEmojis.length; i++){
        let newLiElement = document.createElement("li")
        newLiElement.innerText = emojis.catEmojis[i];
        newLiElement.addEventListener("click", () => {
        navigator.clipboard.writeText(newLiElement.innerText);
        alert(newLiElement.innerText + "is now on your clipboard " );
        console.log(newLiElement.innerText);
        });
        ulElement.appendChild(newLiElement)
    }
}
