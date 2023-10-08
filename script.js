const itemForm = document.getElementById('item-form');
const itemList = document.getElementById('item-list');
const itemInput = document.getElementById('item-input');
const clrBtn = document.getElementById('clear');
const findItem = document.getElementById('find');

function addItem(e){
    e.preventDefault();
    const newItem = itemInput.value;
    const items = itemList.querySelectorAll("li");
    console.log(newItem);
    ///validate Item input ///
    if(newItem === ''){
        alert("Please give a item");
        return;
    }
    // for (i of items) {

    //     if(newItem.lowerCase === i.textContent.toLowerCase){
    //         alert("This item already exists")

    //     }
    
//}
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(newItem));
        console.log("success");
        console.log(li);
        const button = createButton('remove-item btn-link text-red');//remove-item btn-link text-red
        li.append(button);
        console.log(button);
        itemList.appendChild(li);
}

    function createButton(classes){
        const button = document.createElement("button");
        button.className = classes;
        const icon = createIcon('fa-solid fa-xmark');//fa-solid fa-plus
        button.append(icon);
        return button;

    }

    function createIcon(classes){
        const icon = document.createElement("i");
        icon.className = classes;
        return icon;
    }

    function removeItem(e){
        if(e.target.parentElement.classList.contains('remove-item')){
           if(confirm("Do you want to really remove the item?")){
            e.target.parentElement.parentElement.remove();
           }
            
        }
    }
    console.log(findItem);

    function clearAll(){
        itemList.innerHTML= '';
    }

    function fItm(e){
        const items = itemList.querySelectorAll("li")
        const fnd = e.target.value.toLowerCase();
        
        //console.log(fnd);

        for (i of items) {

            if(i.textContent.toLowerCase().indexOf(fnd) != -1){
        
            i.style.display = "flex";
            //console.log(i.textContent);
        }else{
            i.style.display = "none";
        }
    }

        }
        
    
itemForm.addEventListener("submit",addItem);
itemList.addEventListener("click",removeItem);
clrBtn.addEventListener("click",clearAll);
findItem.addEventListener("input",fItm);