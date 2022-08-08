const formelement = document.querySelector("#form");
const title = document.querySelector("#title");
const body = document.querySelector("#body");
const tableBody = document.querySelector("#tableBody");
const search = document.querySelector("#search");
let index = undefined;
let mode = "create";

// declare empty array
let blogs = [];

// saving function
// function saveBlog(event) {
//     event.preventDefault(); //blocking to refresh
//     // 


//     console.log("Title Value is ==>", title.value)
//     console.log("Body Value is ==>", body.value)
//     console.log("Submitted!", event);
// }


//insert
formelement.addEventListener('submit', function (event) {
    event.preventDefault();
    let singleBlog = {
        title: event.target.title.value,
        body: event.target.body.value
    }
    //clear form value
    event.target.reset();
    //blogs.push(singleBlog);

    if (mode == "create") {
        // push
        // blogs.push(singleBlog);
        fetch("http://localhost:3000/blogs",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(singleBlog)
            }).then(response => {
                console.log(response);
                show();
            }).catch(error => {
                console.log(error);
            })
    } else {
        // update
        blogs[index].title = singleBlog.title
        blogs[index].body = singleBlog.body;
        mode = "create";
    }
    show();
});


const show = () => {
    fetch("http://localhost:3000/blogs", { method: 'GET' }).then((response) => {
        tableBody.innerHTML = "";
        response.json().then(data => {
            data.forEach((element) => {
                tableBody.innerHTML += `<tr>
                <td>${element.title}</td>
                <td>${element.body}</td>
                <td><button type='button' class='btn btn-danger'  onclick='filterBlogs("${element.title}")' >Delete</button></td>
                <td><button type='button' class='btn btn-danger'  onclick='editBlogs("${element.title}")'  >Update</button>
                </tr>`
            })
        }).catch(error => {
            console.log(error);
        })
    }).catch(error => {
        console.log(error)
    })
}


show();
// no data found 
tableBody.innerHTML = `
    <tr>
        <td class='text-center' colspan='3' >No Record Found</td>
    </tr>`


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

//update

const editBlogs = (titlename => {
    debugger;
    console.log(title);
    index = blogs.findIndex(element => {
        return element.title == titlename;
    })

    console.log(title.value);
    title.value = blogs[index].title
    body.value = blogs[index].body;
    mode = "edit";
})


// search function 
search.addEventListener("input", (event) => {
    debugger;
    let newArr = blogs.filter(element => {
        return element.title == event.target.value;
    })
    console.log(newArr);
    if (newArr.length > 0) {
        renderElementBySearch(newArr);
    } else {
        show()
    }

})


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