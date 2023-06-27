let baseUrl = "https://travel-planner-api-production.up.railway.app"



function saveProfile() {
    const xhr = new XMLHttpRequest(); // create new XMLHttpRequest object
    xhr.open('POST', 'backend_code.php', true); // specify backend code file and request method
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // set request header
    xhr.onload = function () { // define function to run when data is returned
        if (this.status === 200) {
            console.log(this.responseText); // log response to console
        }
    }
    const name = document.querySelector('input[placeholder="name"]').value; // get name input value
    const password = document.querySelector('input[placeholder="password"]').value; // get password input value
    const email = document.querySelector('input[placeholder="enter email id"]').value; // get email input value
    const role = document.querySelector('input[placeholder="role"]').value; // get role input value
    const address = document.querySelector('input[placeholder="enter address line 1"]').value; // get address input value
    const gender = document.querySelector('input[placeholder="gender"]').value; // get gender input value
    const contact = document.querySelector('input[placeholder="contact"]').value; // get contact input value
    const website = document.querySelector('input[placeholder="wibsite"]').value; // get website input value
    const overview = document.querySelector('input[placeholder="overveiw"]').value; // get overview input value
    const country = document.querySelector('input[placeholder="country"]').value; // get country input value
    const city = document.querySelector('input[placeholder="city"]').value; // get city input value
    const active = document.querySelector('input[placeholder="active"]').value; // get active input value
    const data = `name=${name}&password=${password}&email=${email}&role=${role}&address=${address}&gender=${gender}&contact=${contact}&website=${website}&overview=${overview}&country=${country}&city=${city}&active=${active}`; // create data string

    xhr.send(data); // send request with data
}


async function getMe() {



    let response = await fetch(`${baseUrl}/api/v1/users/me`, {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("Token")}`
        }
    })
    const result = await response.json();

    let USerData = result.data.data
    console.log(USerData);
    for (const key in USerData) {

        $(`#${key}`).val(USerData[key])
    }
    $("#userName").html(USerData.name)
    $("#userEmail").html(USerData.email)
    if (USerData.image) {

        $("#userImage").attr("src", USerData.image)
    }

    // هتاخد الدتا من هنا هتعرضها جوه كل انبوت

}

if (localStorage.getItem("Token")) {
    getMe()
}

$("#updateProfile").click(async function () {
    var input = $("#profileData").find('input');
    console.log(input);
    let user = {}
    input.each(function () {
       
        user[$(this).attr('id')] = $(this).val()
    })
    
    let response = await fetch(`${baseUrl}/api/v1/users/updateMe`, {
        method: "PATCH",
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("Token")}`
        },
        body: JSON.stringify(user)
    })
    const result = await response.json();
    let USerData = result.data.user
    console.log(USerData);
    for (const key in USerData) {

        $(`#${key}`).val(USerData[key])
    }
    $("#userName").html(USerData.name)
    $("#userEmail").html(USerData.email)
    if (USerData.image) {

        $("#userImage").attr("src", USerData.image)
    }
})