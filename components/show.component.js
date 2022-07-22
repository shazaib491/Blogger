export let show = () => {
    table.innerHTML="";
    student.forEach((element) => {
        console.log(element);
        table.innerHTML += `
        <tr>
            <td>${element.title}</td>
            <td>${element.body}</td>
            <td>
            <button  class='btn btn-info' onclick="findIndex('${element.title}')" >edit</button>
                <button  class='btn btn-danger' onclick="removeElement('${element.title}')" >Delete</button>
            </td>
        </tr>
        `
    })

}