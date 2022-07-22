export const findIndex = (title) => {
    index = student.findIndex(element => element.title == title)
    document.getElementsByName("title")[0].value = `${student[index].title}`;
    document.getElementsByName("body")[0].value = `${student[index].body}`;
    mode = "update";
}
