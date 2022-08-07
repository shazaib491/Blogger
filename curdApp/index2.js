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



formElement.addEventListener('submit', function (event) {
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
        fetch("http://localhost:3000/blogs", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: convertBlogToJson
        }).then((response) => {
            console.log(response);
            show();
        }).catch(error => {
            console.log(error);
        })
    } else {
        console.log(blogId);
        fetch(`http://localhost:3000/blogs/${blogId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: convertBlogToJson
        }).then(response => {
            console.log(response)
            show();

        }).catch(error => {
            console.log(error);
        })

        mode = "create";

        // blogs[index].title = singleBlog.title
        // blogs[index].body = singleBlog.body;
    }
});



const show = () => {
    // fetch("http://localhost:3000/blogs", { method: "GET" }).then((response) => {
        fetch("http://localhost:3000/blogs").then((response) => {
        console.log(response);
        tableBody.innerHTML = "";
        response.json().then((data) => {
            console.log(data);
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
        }).catch(error => {
            console.log(error);
        })
    }).catch(error => {
        console.log(error);
    })

    // tableBody.innerHTML = "";
    // blogs.forEach((element) => {
    //     tableBody.innerHTML += `<tr>
    //     <td>${element.title}</td>
    //     <td>${element.body}</td>
    //     <td>
    //     <button type='button' class='btn btn-danger'  onclick='editBlogs("${element.title}")'>Edit</button>
    //     <button type='button' class='btn btn-danger'  onclick='filterBlogs("${element.title}")'  >Delete</button>
    //     </td>
    //     </tr>`
    // })
}

show();

// no data found 
tableBody.innerHTML = `
    <tr>
        <td class='text-center' colspan='3' >No Record Found</td>
    </tr>
`


// delete Blogs
const filterBlogs = (blogId) => {
    console.log(blogId)
    // blogs = blogs.filter((element) => {
    //     debugger;
    //     return element.id != blogId
    //     // first !=third 
    //     // second !=third
    //     // third !=third
    // })

    // fetch("http://localhost:3000/blogs/"+blogId)
    fetch(`http://localhost:3000/blogs/${blogId}`, { method: 'DELETE' })
        .then(response => {
            console.log(response)
            show();

        }).catch(error => {
            console.log(error);
        })
}




// edit

function editBlogs(id) {
    // index = blogs.findIndex(element => element.title == titler);
    // console.log(index)
    fetch(`http://localhost:3000/blogs/${id}`)
        .then(response => {
            console.log(response)
            response.json().then(data => {
                blogId = data.id;
                title.value = data.title
                body.value = data.body;
            })

        }).catch(error => {
            console.log(error);
        })

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