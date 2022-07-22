export const validateTitle = (event) => {
    if (event.target.value.length == 0 ) {
            title.innerHTML = "Title is Requied"
        }else{
            title.innerHTML = ""

        }
}

export  const validateBody = (event) => {
    console.log("skjd")
    if (event.target.value.length == 0 ) {
        body.innerHTML = "Body is Requied";
        }else{
            body.innerHTML = "";
        }
}