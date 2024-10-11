"use strict";
let sect = document.querySelector("section");
let nums = 6;
for (let i = 0; i < nums; i++) {
    let div = document.createElement("div");
    for (let j = 0; j < nums; j++) {
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = i + "" + j;
        div.appendChild(checkbox);
    }
    sect.appendChild(div);
}

const iDir = [-1, 0, 0, 1];
const jDir = [0, -1, 1, 0];

for (let i = 0; i < nums; i++) {
    for (let j = 0; j < nums; j++) {
        let root = document.getElementById(i + "" + j);
        root.addEventListener("click", function() {
            for (let k = 0; k < iDir.length; k++) {
                let iv = i + iDir[k];
                let jv = j + jDir[k];
                if(iv >= 0 && iv < nums && jv >= 0 && jv < nums) {
                    let elem = document.getElementById(iv + "" + jv);
                    elem.checked = !elem.checked;
                }
            }
        })
    }
}