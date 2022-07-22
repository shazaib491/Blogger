import { save } from "./save.component.js";
import { search, searchElem } from "./search.component.js";
import { show } from "./show.component.js";
import { findIndex } from "./edit.component.js";
import { removeElement } from "./remove.component.js";
import { validateBody, validateTitle } from "./validate.component.js";
var table = document.querySelector("#displayRecord");


window.table = table;
let student = []
window.student = student;
let mode = "create";
window.mode = mode;
let index = undefined;
window.index = index;
show()

// globally gives access to get module
window.save = save
window.show = show
window.searchElem = searchElem
window.search = search
window.findIndex = findIndex
window.search = search
window.searchElem = searchElem
window.removeElement = removeElement
window.validateTitle = validateTitle
window.validateBody = validateBody
// globally gives access to get module



