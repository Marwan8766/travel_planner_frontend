
$(document).ready(function () {
    let baseUrl = "https://travel-planner-api-production.up.railway.app";
    let TripList = []
    getAllTrip()
    async function getAllTrip() {

        let response = await fetch(`${baseUrl}/api/v1/tripPrograms`, {
            method: "GET"
        })
        const result = await response.json();
        console.log(result);
        TripList = result.data.data.slice(0, 12)
        console.log(TripList);
        DisplayData()


        AddEvent()
    }

    function DisplayData() {
        let temp = "";
        TripList.forEach((el) => {
            console.log(el);
            temp += `      <div  Packagetype="tripPrograms" id="${el._id}" class="col-lg-4  packageitem col-md-6 mb-4">
            <div class="package-item bg-white h-100 mb-2">
                <img class="w-100" src="${el.image ? el.image : 'img/package-2.jpg'}" alt="">
                <div class="p-4">
                    <div class="d-flex justify-content-between mb-3">
                        <small class="m-0"><i
                                class="fa fa-map-marker-alt text-primary mr-2"></i>${el.startLocations.address ? el.startLocations.address : 'Cairo'}</small>
                        <small class="m-0"><i class="fa fa-calendar-alt text-primary mr-2"></i>3 days</small>
                        <small class="m-0"><i class="fa fa-user text-primary mr-2"></i>2 Person</small>
                    </div>
                    <a class="h5 text-decoration-none" href="review.html">${el.name}</a>
                    <p>${el.description?.split(" ").slice(0, 10).join(" ")}</p>
                    <div class="border-top mt-4 pt-4">
                        <div class="d-flex justify-content-between">
                            <h6 class="m-0"><i class="fa fa-star text-primary mr-2"></i>${el.ratingsAverage}
                            </h6>
                            <h5 class="m-0">$${el.price}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>`

        })
        document.getElementById("tripBody").innerHTML = temp
    }
})

function AddEvent(){
    $(".packageitem").click(function () {

        console.log($(this).attr("id"));
        console.log($(this).attr("Packagetype"));
        localStorage.setItem("pakId",$(this).attr("id"))
        localStorage.setItem("Packagetype",$(this).attr("Packagetype"))
    })
}

$(document).ready(function () {
    let baseUrl = "https://travel-planner-api-production.up.railway.app";
    let TourList = []
    getAllTour()
    async function getAllTour() {

        let response = await fetch(`${baseUrl}/api/v1/tours`, {
            method: "GET"
        })
        const result = await response.json();
        console.log(result);
        TourList = result.data.data.slice(0, 12)
        console.log(TourList);
        DisplayData()
        
        AddEvent()
    }

    function DisplayData() {
        let temp = "";
        TourList.forEach((el) => {
            console.log(el);
            temp += `      <div Packagetype="tours" id="${el._id}" class="col-lg-4 packageitem col-md-6 mb-4">
            <div class="package-item bg-white h-100 mb-2">
                <img class="w-100" src="${el.image ? el.image : 'img/package-2.jpg'}" alt="">
                <div class="p-4">
                    <div class="d-flex justify-content-between mb-3">
                        <small class="m-0"><i
                                class="fa fa-map-marker-alt text-primary mr-2"></i>>${el.startLocations.address ? el.startLocations.address : 'Cairo'}</small>
                        <small class="m-0"><i class="fa fa-calendar-alt text-primary mr-2"></i>3 days</small>
                        <small class="m-0"><i class="fa fa-user text-primary mr-2"></i>2 Person</small>
                    </div>
                    <a class="h5 text-decoration-none" href="review.html">${el.name}</a>
                    <p>${el.description?.split(" ").slice(0, 10).join(" ")}</p>
                    <div class="border-top mt-4 pt-4">
                        <div class="d-flex justify-content-between">
                            <h6 class="m-0"><i class="fa fa-star text-primary mr-2"></i>${el.ratingsAverage}
                            </h6>
                            <h5 class="m-0">$${el.price}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>`

        })
        document.getElementById("tourBody").innerHTML = temp
    }
})

