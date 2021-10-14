const passField = document.querySelector("input[type='password']");
const okButton = findButton("ok");

let checkboxes = document.querySelectorAll("input[type='checkbox']");
checkboxes.forEach(item => {
    item.onchange = function () {
        if (checkInputs(checkboxes) && checkInputs(ranges)) {
            disableLaunch(true);
        }
    }
})


let ranges = document.querySelectorAll("input[type='range']");
ranges.forEach(item => {
    item.onchange = function () {
        if (checkInputs(checkboxes) && checkInputs(ranges)) {
            disableLaunch(true);
        }
    }
})

function checkPass() {
    //const pass = "TrustNo1";
    const pass = "1";
    //let passField = document.querySelector("input[type='password']");
    if (passField !== null) {
        return pass === passField.value;
    }
}

function searchInputs(inputType) {
    let sel = "input[type='" + inputType + "']";
    return document.querySelectorAll(sel);
}

function disableInputs(inputType, enable) {
    let inputTypes = searchInputs(inputType);

    for (const inputType of inputTypes) {
        inputType.disabled = !enable;
    }
}

function findButton(name) {
    let buttons = searchInputs("button");
    for (const button of buttons) {
        if (button.value === name) {
            return button
        }
    }
}

function disableLaunch(enable) {
    findButton("launch").disabled = !enable;
}


if (okButton !== undefined) {
    okButton.addEventListener('click', event => {
            if (checkPass()) {
                disableInputs("password", false);
                okButton.disabled = true;
                disableInputs("checkbox", checkPass());
                disableInputs("range", checkPass());
            }
        }
    )
}

function checkInputs(input) {
    let i = 0;
    if (input[i].type === "checkbox") {
        for (i; i < input.length; i++) {
            if (!input[i].checked) {
                return false;
            }
        }
    } else if (input[i].type === "range") {
        for (i; i < input.length; i++) {
            if (input[i].value < 100) {
                console.log(input[i].value);
                return false;
            }
        }
    }
    return true;
}

