const formElement = document.querySelector("#form");
const title = document.querySelector("#title");
const body = document.querySelector("#body");
const titleErr = document.querySelector("#titleErr");
const bodyErr = document.querySelector("#bodyErr");
const tableBody = document.querySelector("#tableBody");

// declare empty array
let blogs = [];

// saving function
function saveBlog(event) {
    event.preventDefault(); //blocking to refresh
    // 
    console.log("Submitted!", event);

    console.log("Title Value is ==>", title.value)
    console.log("Body Value is ==>", body.value)
}



formElement.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log(event);
    console.log(event.target.title.value);
    console.log(event.target.body.value);

    let singleBlog = {
        title: event.target.title.value,
        body: event.target.body.value
    }
    // cleat form value
    event.target.reset();
    blogs.push(singleBlog);
    show();
});



const show = () => {
    tableBody.innerHTML = "";
    blogs.forEach((element) => {
        tableBody.innerHTML += `<tr>
        <td>${element.title}</td>
        <td>${element.body}</td>
        <td><button type='button' class='btn btn-danger'  onclick='filterBlogs("${element.title}")'  >Delete</button></td>
        </tr>`
    })
}

// no data found 
tableBody.innerHTML = `
    <tr>
        <td class='text-center' colspan='3' >No Record Found</td>
    </tr>
`


// delete Blogs
const filterBlogs = (title) => {
    blogs = blogs.filter((element) => {
        debugger;
        return element.title != title
        // first !=third 
        // second !=third
        // third !=third
    })
    show();
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