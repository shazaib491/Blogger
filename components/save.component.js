export let save = (event) => {
    if (event.target.title.value == '' || event.target.body.value == '') {
        return;
    }
    event.preventDefault();
    let singleStudent = {
        title: event.target.title.value,
        body: event.target.body.value
    }
    if (mode == "create")
        student.push(singleStudent);
    else {
        student[index].title = singleStudent.title;
        student[index].body = singleStudent.body;
        mode = "create";
    }
    show()
    event.target.reset();
}