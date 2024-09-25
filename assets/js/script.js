// alert()
let str = '';
let buttons = document.querySelectorAll("button");
// console.log(buttons)
Array.from(buttons).forEach((btn, i) => {
    btn.addEventListener("click", (val) => {
        // console.log(val.target)
        if (val.target.innerHTML == "=") {
            str = eval(str)
            document.querySelector("input").value = str

        }

        else if (val.target.innerHTML == "ac") {
            str = ""
            document.querySelector("input").value = str

        }
        else if (val.target.innerHTML == "de") {
            str = str.slice(0, -1)
            document.querySelector("input").value = str

        }

        else {
            str += val.target.innerHTML;
            console.log(str)
            document.querySelector("input").value = str
        }




    })
})