import {book} from "../components/store.js";

const getBookDetails = () => {
    // let newprice= `<h3>${book.title}</h3>`;
    let newprice =`<br><img src="${book.image}" width="100px" height="100px">`;
        newprice += `<br><h4>Price: ${book.price}</h4>`;
 
    return newprice;
 }
 
 export {getBookDetails};