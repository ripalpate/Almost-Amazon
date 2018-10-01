import {printToDom} from "../helpers/util.js"
const addToCartButton = document.getElementById('cart_button');

const book = {
    title:'Chicken Soup For the Soul: Think Positive by Jack Canfield',
    image:'./images/book1.jpeg',
    price:'$10.99'
}

const bookBuilder = ()=>{
    let domString = `<div class='book_container'>`;
        domString +=`<h3>${book.title}</h3>`;
        domString += `<img src="${book.image}" width="200px" height="250px">`;
        domString +=`<h4>Price: ${book.price}</h4>`;
        domString +=`</div>`;
    printToDom(domString, 'bookInfo');
}
bookBuilder();
