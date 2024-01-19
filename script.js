   function addComment() {
      var nameInput = document.getElementById('name');
      var commentInput = document.getElementById('comment');
      var commentList = document.getElementById('comment-list');
  
      var name = nameInput.value;
      var comment = commentInput.value;
  
      if (name && comment) {
          var listItem = document.createElement('li');
          listItem.innerHTML = '<strong>' + name + ':</strong> ' + comment;
          commentList.appendChild(listItem);
  
          // Reset the form
          nameInput.value = '';
          commentInput.value = '';
      } else {
          alert('Please enter both name and comment.');
      }
  }

  const openShopping = document.querySelector(".shopping"),
      closeShopping = document.querySelector(".closeShopping"),
      body = document.querySelector("body"),
      list= document.querySelector(".list"),
      listCard = document.querySelector(".listCard"),
      total = document.querySelector(".total"),
      quantity = document.querySelector(".quantity")


openShopping.addEventListener("click", () => {
    body.classList.add("active");
})

closeShopping.addEventListener("click", () => {
    body.classList.remove("active")
})

let products = [
    {
        "id": 1,
        "name": "#001 <br> Brightening Facial Wash",
        "image":"11.png",
        "price": 67900
    },
    {
        "id": 2,
        "name": "#002 <br> 7x Ceramide Barrier up Moistu",
        "image":"300.png",
        "price": 67900
    },
    {
        "id": 3,
        "name": "#003 <br> Brightly Ever After Essence Toner",
        "image":"1111.png",
        "price": 67900
    },
    {
        "id": 4,
        "name": "#004 <br> Brightly Ever After Serum",
        "image":"3000.png",
        "price": 67900
    },
    {
        "id": 5,
        "name": "#005 <br> Glowtening Serum",
        "image":"55.png",
        "price": 67900
    },
    {
        "id": 6,
        "name": "#006 <br> Scarlett Whitening Acne Care Facial Wash",
        "image":"111.png",
        "price": 67900
    },
    {
        "id":  7,
        "name": "#007 <br> C-Power Face Mist",
        "image":"111111.png",
        "price": 67900
    },
    {
        "id": 8,
        "name": "#008 <br> Loving Body Cream",
        "image":"5.png",
        "price": 67900
    },
    {
        "id": 9,
        "name": "#009 <br> Happy Body Lotion ",
        "image":"6.png",
        "price": 67900
    },
]


let listCards = [];

const initApp = () => {
    products.forEach((value, key) => {
        let newDiv = document.createElement("div");
        newDiv.classList.add("item");
        newDiv.innerHTML = `
            <img src = "img/${value.image}">
            <div class = "title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick = "addToCard(${key})">Add To Card</button>
        `;
        list.appendChild(newDiv)
    })
}

initApp()


const addToCard = key => {
    if(listCards[key] == null) {
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        // console.log(listCards);
        listCards[key].quantity = 1;
        // console.log(listCards[key].quantity);
    }

    reloadCard()
}

const reloadCard = () => {
    listCard.innerHTML = "";
    let count = 0;
    let totalPrice= 0;

    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price
        count = count + value.quantity;

        if(value != null) {
            let newDiv = document.createElement("li");
            newDiv.innerHTML = `
                <div><img src = "img/${value.image}"></div>
                <div class = "cardTitle">${value.name}</div>
                <div class = "cardPrice">${value.price.toLocaleString()}</div>

                <div>
                    <button style = "background-color:#560bad;" class = "cardButton" onclick = "changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class = "count">${value.quantity}</div>
                    <button style = "background-color:#560bad;" class = "cardButton" onclick = "changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>
            `
            listCard.appendChild(newDiv)
        }

        total.innerText = totalPrice.toLocaleString();
        quantity.innerText = count;
    })
}


const changeQuantity = (key, quantity) => {
    if(quantity == 0) {
        delete listCards[key]
    }
    else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price
    }
    reloadCard()
}

function search() {
    let filter = document.getElementById('find').value.toUpperCase();
    let item = document.querySelectorAll('.col-md-3');
    let l = document.getElementsByTagName('h5');
    for(var i = 0;i<=l.length;i++){
    let a=item[i].getElementsByTagName('h5')[0];
    let value=a.innerHTML || a.innerText || a.textContent;
    if(value.toUpperCase().indexOf(filter) > -1) {
    item[i].style.display="";
    }
    else
    {
    item[i].style.display="none";
    }
    }
    }