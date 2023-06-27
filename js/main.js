(function ($) {
    let baseUrl = "https://travel-planner-api-production.up.railway.app";
    "use strict";
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'MMMM D, YYYY HH:mm:ss'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });

  
    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

 

    let nameInput = document.getElementById("name")
    let emailInput = document.getElementById("email")
    let passwordInput = document.getElementById("password")
    let passwordConfirmInput = document.getElementById("passwordConfirm")
    $("#signup").click(async function (e) {
        e.preventDefault()
        var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
        if (regularExpression.test(passwordInput.value)) {
            if (passwordInput.value != passwordConfirmInput.value) {
                $("#alertMessage").removeClass("d-none")
            } else {
                $("#alertMessage").addClass("d-none")
            }
            $("#alertpassword").addClass("d-none")
        }
        else {
            $("#alertpassword").removeClass("d-none")
        }


        if (nameInput.value == "") {
            $("#alertname").removeClass("d-none")
        } else {
            $("#alertname").addClass("d-none")
        }
        if (emailInput.value == "") {
            $("#alertemail").removeClass("d-none")
        } else {
            $("#alertemail").addClass("d-none")
        }


        // Login



        // waiting backend Api
        if (regularExpression.test(passwordInput.value) && nameInput.value != "" && emailInput.value != "") {

            let user = {
                name: nameInput.value,
                email: emailInput.value,
                password: passwordInput.value,
                passwordConfirm: passwordConfirmInput.value,
            }

            const response = await fetch(`${baseUrl}/api/v1/users/signup`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            })
            const result = await response.json();
            console.log("Success:", result);
            if (result.status == 'fail') {
                $("#messageApiFail").html(result.message)
                $("#messageApiFail").removeClass("d-none")
            } else {
                $("#messageApiFail").addClass("d-none")
            }


        }
    })
    $("#login").click(async function (e) {
        e.preventDefault()
        var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
        if (regularExpression.test(passwordInput.value)) {

            $("#alertpassword").addClass("d-none")
        }
        else {
            $("#alertpassword").removeClass("d-none")
        }

        if (emailInput.value == "") {
            $("#alertemail").removeClass("d-none")
        } else {
            $("#alertemail").addClass("d-none")
        }


        // Login



        // waiting backend Api
        if (regularExpression.test(passwordInput.value) && emailInput.value != "") {

            let user = {

                email: emailInput.value,
                password: passwordInput.value,
            }
                
            const response = await fetch(`${baseUrl}/api/v1/users/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            })
            const result = await response.json();
            console.log("Success:", result);
            if (result.status == 'fail') {
                $("#messageApiFail").html(result.message)
                $("#messageApiFail").removeClass("d-none")
            } else {
                localStorage.setItem("Token",result.token)

                        window.location.href="profile.html"
                $("#messageApiFail").addClass("d-none")
            }
            
        }
    })


    if(localStorage.getItem('Token')){
        $("#login").addClass("d-none")
        $("#logout").removeClass("d-none")
    }else{
        $("#login").removeClass("d-none")
        $("#logout").addClass("d-none")
    }

})(jQuery);


function logout(){
    localStorage.removeItem("Token")
    window.location.href = 'login.html'
}

