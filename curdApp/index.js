const formElement = document.querySelector("#form");
const title = document.querySelector("#title");
const body = document.querySelector("#body");
const titleErr = document.querySelector("#titleErr");
const bodyErr = document.querySelector("#bodyErr");
const tableBody = document.querySelector("#tableBody");
const search = document.querySelector("#search");
// declare empty array
let blogs = [];
let index = undefined;//0
let mode = "create";
// saving function


// insert
formElement.addEventListener('submit', function (event) {
    event.preventDefault();
    let singleBlog = {
        title: event.target.title.value,
        body: event.target.body.value
    }
    // cleat form value
    event.target.reset();
    if (mode == "create") {
        // push
        blogs.push(singleBlog);
    } else {
        // edit
        blogs[index].title = singleBlog.title;
        blogs[index].body = singleBlog.body;
        mode="create";
    }


    show();
});


// show
const show = () => {
    tableBody.innerHTML = "";
    blogs.forEach((element) => {
        tableBody.innerHTML += `<tr>
        <td>${element.title}</td>
        <td>${element.body}</td>
        <td>
        <button type='button' class='btn btn-primary' onclick='editBlog("${element.title}")'  >Edit</button>
        <button type='button' class='btn btn-danger'  onclick='filterBlogs("${element.title}")'  >Delete</button></td>
        </tr>`
    })
}

// no data found 
tableBody.innerHTML = `
    <tr>
        <td class='text-center' colspan='3' >No Record Found</td>
    </tr>
`



// edit Blog
// arrow function =>titleContent="sara khan"
const editBlog = (titleContent) => {
    index = blogs.findIndex(element => element.title == titleContent);
    // sara khan==sara khan=0
    console.log(index);
    title.value = blogs[index].title
    body.value = blogs[index].body
    mode = "edit"
}








// delete Blogs
const filterBlogs = (title) => {
    blogs = blogs.filter((element) => {
        return element.title != title
        // first !=third 
        // second !=third
        // third !=third
    })
    show();
}


// search function 
search.addEventListener("input",(event)=>{
    let newArr=blogs.filter(element=>element.title==event.target.value);
    if(newArr.length >0){
        renderElementBySearch(newArr);

    }else{
        show();
    }
})


// search.addEventListener("input", (event) => {
//     let newArr = blogs.filter(element => element.title == event.target.value)
//     console.log(newArr);
//     if (newArr.length > 0) {
//         renderElementBySearch(newArr);
//     } else {
//         show()
//     }

// })



const renderElementBySearch = (element) => {
    tableBody.innerHTML = "";
    element.forEach((element) => {
        tableBody.innerHTML += `<tr>
        <td>${element.title}</td>
        <td>${element.body}</td>
        <td><button type='button' class='btn btn-danger'  onclick='editBlogs("${element.title}")'  >Update</button>
        <button type='button' class='btn btn-danger'  onclick='filterBlogs("${element.title}")'  >Delete</button></td>
        </tr>`
    })
}



// title.addEventListener()

title.addEventListener('focus', function (event) {
    console.log();
    if (event.target.value == "") {
        titleErr.innerHTML = "Title is Required";
        titleErr.setAttribute("class", "text-danger");
    }
})




title.addEventListener("input", function (event) {
    // console.log(event.target.value);
    if (event.target.value.length > 5) {
        titleErr.setAttribute("class", "d-none");
    } else {
        // titleErr.innerHTML = "Title is Required"
        titleErr.removeAttribute("class", "d-none");
        titleErr.setAttribute("class", "text-danger");
    }
})


body.addEventListener('focus', function (event) {
    // console.log();
    if (event.target.value == "") {
        bodyErr.innerHTML = "Body is Required";
        bodyErr.setAttribute("class", "text-danger");
    }
})

body.addEventListener("input", function (event) {
    // console.log(event.target.value);
    if (event.target.value.length > 5) {
        bodyErr.setAttribute("class", "d-none");
    } else {
        // titleErr.innerHTML = "Title is Required"
        bodyErr.removeAttribute("class", "d-none");
        bodyErr.setAttribute("class", "text-danger");
    }
})




// create read update delete 
// search