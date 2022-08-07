const formElement = document.querySelector("#form");
const title = document.querySelector("#title");
const body = document.querySelector("#body");
const titleErr = document.querySelector("#titleErr");
const bodyErr = document.querySelector("#bodyErr");
const tableBody = document.querySelector("#tableBody");

// declare empty array
let blogs = [];
let index = undefined;
let mode = "create";
let blogId;
// saving function
function saveBlog(event) {
    event.preventDefault(); //blocking to refresh
    // 
    console.log("Submitted!", event);

    console.log("Title Value is ==>", title.value)
    console.log("Body Value is ==>", body.value)
}



formElement.addEventListener('submit', async function (event) {
    event.preventDefault();
    console.log(event);
    console.log(event.target.title.value);
    console.log(event.target.body.value);

    let singleBlog = {
        title: event.target.title.value,
        body: event.target.body.value
    }
    event.target.reset();
    let convertBlogToJson = JSON.stringify(singleBlog);


    // cleat form value
    if (mode == "create") {
        const response = await fetch("http://localhost:3000/blogs", {
            method: "POST", headers: { 'Content-Type': 'application/json' }, body: convertBlogToJson
        })
        show();
    } else {
        const response = await fetch(`http://localhost:3000/blogs/${blogId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: convertBlogToJson
        })
        mode = "create";

        // blogs[index].title = singleBlog.title
        // blogs[index].body = singleBlog.body;
    }
});



const show = async () => {
    const response = await fetch("http://localhost:3000/blogs")
    tableBody.innerHTML = "";
    const data = await response.json();
    // console.log(data)
    data.forEach((element) => {
        tableBody.innerHTML += `<tr>
                    <td>${element.title}</td>
                    <td>${element.body}</td>
                    <td>
                    <button type='button' class='btn btn-info'  onclick='editBlogs("${element.id}")'>Edit</button>
                    <button type='button' class='btn btn-danger'  onclick='filterBlogs("${element.id}")'  >Delete</button>
                    </td>
                    </tr>`
    })
}

show();

// no data found 
tableBody.innerHTML = `
    <tr>
        <td class='text-center' colspan='3' >No Record Found</td>
    </tr>
`


// delete Blogs
const filterBlogs = async (blogId) => {
    const response = await fetch(`http://localhost:3000/blogs/${blogId}`, { method: 'DELETE' })
    show();
}




// edit

async function editBlogs(id) {
    const response = await fetch(`http://localhost:3000/blogs/${id}`)
    const data = await response.json();
        blogId = data.id;
        title.value = data.title
        body.value = data.body;
        mode = "edit";

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