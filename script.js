const itemForm = document.getElementById('item-form');
const itemList = document.getElementById('item-list');
const itemInput = document.getElementById('item-input');
const clrBtn = document.getElementById('clear');
const findItem = document.getElementById('find');

function display(){
    const itemsFromLocalStorage = getItemsFromStorage();
    itemsFromLocalStorage.forEach((item)=>addItemToDom(item));
}
function onaddItemSubmit(e){
    e.preventDefault();
    const newItem = itemInput.value;
    console.log(newItem);
    ///validate Item input ///
    if(newItem === ''){
        alert("Please give a item");
        return;
    }
    //amanipulatingingarray = 
    if(getItemsFromStorage().includes(newItem)){
        alert("Item already present!")
        itemInput.value ='';
        return;
    }
    // for (i of items) {

    //     if(newItem.lowerCase === i.textContent.toLowerCase){
    //         alert("This item already exists")

    //     }
    
//}
        addItemToDom(newItem);
        addItemsToStorage(newItem);
        itemInput.value ='';
}

function addItemToDom(item){
    
    const items = itemList.querySelectorAll("li");
    
    const li = document.createElement("li");
        li.appendChild(document.createTextNode(item));
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
            amanipulatingingarray = getItemsFromStorage();
            console.log('-----------idhar bhai idhar');
            console.log(e.target.parentElement.parentElement.textContent);
            var del = e.target.parentElement.parentElement.textContent;
            console.log(del);
            e.target.parentElement.parentElement.remove();
            amanipulatingingarray.pop(del);
            console.log(amanipulatingingarray);
            localStorage.setItem("items", JSON.stringify(amanipulatingingarray));
           }
            
        }
    }
    console.log(findItem);

    function clearAll(){
        itemList.innerHTML= '';
        localStorage.removeItem("items");
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
        
    function addItemsToStorage(item){
        const itemsFromLocalStorage = getItemsFromStorage();
        itemsFromLocalStorage.push(item);
        localStorage.setItem('items',JSON.stringify(itemsFromLocalStorage));
        console.log(item);
        console.log(localStorage.getItem('items'));
        console.log('-------------------bhai dekh idhar---------------');
        
        //itemsFromLocalStorage = JSON.parse("items",getItemsFromStorage());
        console.log(itemsFromLocalStorage);
        
      

        }

    function getItemsFromStorage(){
        let itemsFromLocalStorage;
        if(localStorage.getItem('items')=== null){
            itemsFromLocalStorage=[];
        }
        else{
            itemsFromLocalStorage = JSON.parse(localStorage.getItem('items'));

            }
            return itemsFromLocalStorage;
            
    }

    function init(){
        itemForm.addEventListener("submit",onaddItemSubmit);
        itemList.addEventListener("click",removeItem);
        clrBtn.addEventListener("click",clearAll);
        findItem.addEventListener("input",fItm);
        document.addEventListener("DOMContentLoaded",display);
    }

    init();
