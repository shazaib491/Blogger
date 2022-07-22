export const searchElem = (elemt) => {
    table.innerHTML = ""
    elemt.forEach((element) => {
        table.innerHTML = `
        <tr>
            <td>${element.title}</td>
            <td>${element.body}</td>
            <td>
            <button  class='btn btn btn-info' onclick="findIndex('${element.title}')" >edit</button>
            <button  class='btn btn-danger' onclick=removeElement('${element.title}') >Delete</button>
            </td>
        </tr>
        `
    })
}


export let search = (e) => {
    let newArray = student.filter(element => {
        if (element.title == e.target.value) {
            return element.title == e.target.value
        }
        if (element.body == e.target.value) {
            return element.body == e.target.value
        }
    })
    if (newArray.length > 0)
        searchElem(newArray)
    else
        show()
}