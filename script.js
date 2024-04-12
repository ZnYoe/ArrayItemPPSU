const items = [];

const itemsContainer = document.querySelector(".items-container");
const inputItem = document.querySelector(".input");
const buttons = document.querySelectorAll(".btn");
for(let button of buttons){
    button.addEventListener("click", () => {
        const inputValue = inputItem.value;
        if(button.id === "push"){
            if(inputItem.value === ""){
                return;
            };
            items.push(inputValue);
        }else if(button.id === "pop"){
            items.pop();
        }else if(button.id === "unshift"){
            if(inputItem.value === ""){
                return;
            };
            items.unshift(inputValue);
        }else if(button.id === "shift"){
            items.shift();
        }

        inputItem.value = "";
        itemsContainer.innerHTML = "";
        showItems();
    })
}

const showItems = () => {
    for(let i = 0; i < items.length; i++){
        const itemBox = document.createElement("div");
        itemBox.classList.add("item");
        itemBox.textContent = `${i+1} - ${items[i]}`;
        itemsContainer.append(itemBox);
    }
}


