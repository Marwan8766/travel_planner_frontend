let baseUrl = "https://travel-planner-api-production.up.railway.app"

let Longitude = 0;
let Latitude = 0;
let tripId = 0;
let locations = []
$(document).ready(function () {

	let TripList = []
	getAllTrip()
	async function getAllTrip() {

		let response = await fetch(`${baseUrl}/api/v1/tripPrograms`, {
			method: "GET"
		})
		const result = await response.json();
		console.log(result);
		TripList = result.data.data
		console.log(TripList);
		DisplayData()
	}

	function DisplayData() {
		let temp = "";
		TripList.forEach((el) => {
			console.log(el);
			temp += `<tr id="${el._id}">
			<td name="name">${el.name}</td>
            <td name="price">${el.price}</td>
			<td name="summary">${el.summary.split(" ").slice(0,10).join(" ")}</td>
			<td name="description">${el.description.split(" ").slice(0,10).join(" ")}</td>
            <td name="image">
			<img class="w-100" src="${el.image}"/></td>
            <td name="startLocations">${el.startLocations.address != undefined ? el.startLocations.address : 'Address'}</td>
            <td name="locations"><ol>${el.locations.map((location) => {
				return `<li>${location.address}</li>`
			})
				}
			</ol></td>
			<td>
			

			<button class="btn btn-sm btn-success" onClick="addID('${el._id}')" data-toggle="modal" data-target="#Availability">availability</button>
			
			</td>
            <td name="tour">
			<ol>${el.tour.map((tours) => {
					return `<li>${tours.name}</li>`
				})
				}
			</ol></td>

			<td>
				<a class="add" title="Add" data-toggle="tooltip"><i class="material-icons">&#xE03B;</i></a>
				<a class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
				<a class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
			</td>
		</tr >
			`
		})
		document.getElementById("tableBody").innerHTML = temp
	}


	$('[data-toggle="tooltip"]').tooltip();
	var actions = $("table td:last-child").html();
	// Append table with add row form on add new button click
	let flag = false;
	$(".add-new").click(function () {
		flag = true;
		$(this).attr("disabled", "disabled");
		var index = $("table tbody tr:last-child").index();
		var row = '<tr>' +
			'<td data="name"><input type="text" class="form-control" name="name" id="name"></td>' +
			'<td data="price"><input type="number" class="form-control" name="price" id="price"></td>' +
			'<td data="summary"><input type="text" class="form-control" name="summary" id="summary"></td>' +
			'<td data="description"><input type="text" class="form-control" name="description" id="description"></td>' +
			'<td data="image" class="custom-file"><input type="file" id="image" name="image" accept="image/*" class="custom-file-input" ><label class="custom-file-label" for="image"></label></td>' +
			// '<td data="CreatedAt"><input type="text" class="form-control" name="CreatedAt" id="CreatedAt"></td>' +
			// '<td data="ratingsAverage"><input type="text" class="form-control" name="ratingsAverage" id="ratingsAverage"></td>' +
			// '<td data="ratingsQuantity"><input type="text" class="form-control" name="ratingsQuantity" id="ratingsQuantity"></td>' +
			`<td data="startLocations">
			<input type="text" value="test" hidden  class="form-control" name="startLocations" id="startLocations">
			<button type="button" class="btn btn-sm btn-primary" data-toggle="modal" data-target="#StartLocations">
					Select Start Location
				</button></td>` +
			`<td data="locations">
			<input type="text" value="test" hidden  class="form-control" name="locations" id="locations">
			<button type="button" class="btn btn-sm btn-primary" data-toggle="modal" data-target="#Locations">
					Select  Location
				</button></td>` +
			`<td data="availability">
			<button class="btn btn-sm  btn-primary" disabled  id="AvailabilityBtn" data-toggle="modal" data-target="#Availability">availability</button>
			</td>` +
			'<td data="tour"><input type="text" class="form-control" name="tour" id="tour"></td>' +
			// '<td data="company"><input type="text" class="form-control" name="company" id="company"></td>' +
			'<td>' + actions + '</td>' +


			'</tr>';
		$("table").prepend(row);
		$("table tbody tr").eq(index + 1).find(".add, .edit").toggle();
		$('[data-toggle="tooltip"]').tooltip();
	});


	// Add row on add button click
	$(document).on("click", ".add", function () {
		var empty = false;
		var input = $(this).parents("tr").find('input');
		input.each(function () {
			if (!$(this).val()) {
				$(this).addClass("error");
				empty = true;
			} else {
				$(this).removeClass("error");
			}
		});
		$(this).parents("tr").find(".error").first().focus();
		if (!empty) {
			let obj = {};
			let objAvaliable = {};
			let BodyData = new FormData()
			input.each(function () {
				$(this).parent("td").html($(this).val());
				obj[$(this).attr('name')] = $(this).val()



				if ($(this).attr('name') == 'startLocations') {

					let objs = {
						type: "point",
						coordinates: [Latitude, Longitude],
						address: $("#search-input").val(),
						description: $("#descriptionInput").val()
					}
					obj[$(this).attr('name')] = objs
					BodyData.append($(this).attr('name'), JSON.stringify(objs))
				} else if ($(this).attr('name') == 'locations') {
					let objs = [
						{
							type: "Point",
							coordinates: [123.456, 78.901],
							address: "456 Main Street",
							description: "A scenic view of the mountains",
							day: 1
						},
						{
							type: "Point",
							coordinates: [123.456, 78.901],
							address: "789 Main Street",
							description: "A beautiful waterfall",
							day: 2
						}
					]
					obj[$(this).attr('name')] = locations
					BodyData.append($(this).attr('name'), JSON.stringify(objs))
				}
				else if ($(this).attr('name') == 'tour') {
					obj[$(this).attr('name')] = ['645045bdb181ce5ba4725617,64555b90413d2d001b9f7277']
					BodyData.append("tour", ['645045bdb181ce5ba4725617,64555b90413d2d001b9f7277'])
				}
				else if ($(this).attr('name') == 'availableSeats' || $(this).attr('name') == 'startDate' || $(this).attr('name') == 'endDate') {
					objAvaliable[$(this).attr('name')] = $(this).val()
				}
				else {
					BodyData.append($(this).attr('name'), $(this).val())
				}

			});


			console.log(obj);
			console.log(objAvaliable);
			if (flag == true) {
				addTour(BodyData, objAvaliable)
			} else {
				console.log($(this).parents("tr"));
				EditTour(obj, $(this).parents("tr").attr('id'))
			}

			$(this).parents("tr").find(".add, .edit").toggle();
			$(".add-new").removeAttr("disabled");
		}
	});
	// Edit row on edit button click
	$(document).on("click", ".edit", function () {
		flag = false
		$(this).parents("tr").find("td:not(:last-child)").each(function () {
			console.log($(this));
			$(this).html('<input type="text" class="form-control" name="' + $(this).attr('name') + '" value="' + $(this).text() + '">');
		});
		$(this).parents("tr").find(".add, .edit").toggle();
		$(".add-new").attr("disabled", "disabled");
	});
	// Delete row on delete button click
	$(document).on("click", ".delete", function () {
		$(this).parents("tr").remove();
		$(".add-new").removeAttr("disabled");
		DeletTour($(this).parents("tr").attr('id'))

	});
	async function addTour(data, objAvaliable) {
		try {
			const response = await fetch(`${baseUrl}/api/v1/tripPrograms`, {
				method: "POST",
				headers: {
					'Authorization': `Bearer ${localStorage.getItem("Token")}`
				},
				body: data,
			})
			const result = await response.json();
			console.log("Success:", result);
			if (result.status == 'success') {
				tripId = result.data.data._id

				$("#AvailabilityBtn").removeAttr("disabled")

			}
		} catch (error) {
			console.error("Error:", error);
		}
	}
	async function addAvaliable(objAvaliable, id) {

		console.log(JSON.stringify(objAvaliable));
		try {
			const response = await fetch(`${baseUrl}/api/v1/availability/${id}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					'Authorization': `Bearer ${localStorage.getItem("Token")}`
				},
				body: JSON.stringify(objAvaliable),
			})
			const result = await response.json();
			console.log("Success:", result);
			if (result.status == 'success') {


				getAllTrip()
			}
		} catch (error) {
			console.error("Error:", error);
		}
	}
	async function EditTour(data, id) {
		try {
			const response = await fetch(`${baseUrl}/api/v1/tripPrograms/${id}`, {
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
					'Authorization': `Bearer ${localStorage.getItem("Token")}`
				},

				body: JSON.stringify(data),
			})
			const result = await response.json();
			console.log("Success:", result);
			if (result.status == 'success') {
				getAllTrip()
			}
		} catch (error) {
			console.error("Error:", error);
		}
	}
	async function DeletTour(id) {
		try {
			const response = await fetch(`${baseUrl}/api/v1/tripPrograms/${id}`, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
					'Authorization': `Bearer ${localStorage.getItem("Token")}`
				},
			})

			if (response.ok) {
				getAllTrip()
			}
		} catch (error) {
			console.error("Error:", error);
		}
	}

	$('#image').on('change', function () {
		//get the file name
		var fileName = $(this).val();
		//replace the "Choose a file" label
		$(this).next('.custom-file-label').html(fileName);
	})


	$("#Addavailability").on("click", function () {

		let objAvaliable = {
			startDate: $("#startDate").val(),
			endDate: $("#endDates").val(),
			availableSeats: $("#availableSeats").val(),
		}


		addAvaliable(objAvaliable, tripId)
	})
});




let map;
let marker;

function displayMap() {
	if (!map) {
		map = L.map("map").setView([0, 0], 13);

		L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
			attribution:
				'&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
			maxZoom: 19,
		}).addTo(map);

		map.on("click", function (e) {
			const lat = e.latlng.lat.toFixed(6);
			const lng = e.latlng.lng.toFixed(6);

			console.log(`Latitude: ${lat}, Longitude: ${lng}`);
			displayMarker(e.latlng);
		});
	}
}

function displayMarker(location) {
	if (marker) {
		map.removeLayer(marker);
	}
	marker = L.marker(location).addTo(map);
}

function searchLocation() {
	const searchInput = document.getElementById("search-input").value;
	const searchUrl = `https://nominatim.openstreetmap.org/search/${encodeURIComponent(
		searchInput
	)}?format=json`;

	fetch(searchUrl)
		.then((response) => response.json())
		.then((data) => {
			if (data.length > 0) {
				const lat = data[0].lat;
				const lon = data[0].lon;
				Latitude = lat;
				Longitude = lon
				const location = L.latLng(lat, lon);
				displayMarker(location);
				console.log(`Latitude: ${lat}, Longitude: ${lon}`);
				map.panTo(location);
			} else {
				alert("Location not found");
			}
		})
		.catch((error) => {
			console.log(error);
			alert("Error searching location");
		});
}
function addID(id) {
	tripId = id
}
document
	.getElementById("search-button")
	.addEventListener("click", searchLocation);

displayMap();


let map2;
let markers2 = [];

function displayMap2() {
	if (!map2) {
		map2 = L.map("map2").setView([0, 0], 13);

		L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
			attribution:
				'&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
			maxZoom: 19,
		}).addTo(map2);

		map2.on("click", function (e) {
			const lat = e.latlng.lat.toFixed(6);
			const lng = e.latlng.lng.toFixed(6);
			if (document.getElementById("search-input2").value) {
				let object = {
					type: "Point",
					coordinates: [lat, lng],
					address: document.getElementById("search-input2").value,
					description: $("#descriptionInput2").val(),
					day: 1
				}
				locations.push(object)
			}
			else {
				alert("Enter Location Name")
			}
			console.log(`Latitude: ${lat}, Longitude: ${lng}`);
			displayMarker2(e.latlng);
		});
	}
}

function displayMarker2(location) {
	const newMarker = L.marker(location).addTo(map2);
	markers2.push(newMarker);

	newMarker.on("click", function (e) {
		const index = markers2.indexOf(newMarker);
		if (index !== -1) {
			map2.removeLayer(newMarker);
			markers2.splice(index, 1);
			locations.splice(index, 1)
		}
		console.log(locations);
	});
}

function searchLocation2() {
	const searchInput = document.getElementById("search-input2").value;
	const searchUrl = `https://nominatim.openstreetmap.org/search/${encodeURIComponent(
		searchInput
	)}?format=json`;

	fetch(searchUrl)
		.then((response) => response.json())
		.then((data) => {
			if (data.length > 0) {
				const lat = data[0].lat;
				const lon = data[0].lon;
				const location = L.latLng(lat, lon);

				let object = {
					type: "Point",
					coordinates: [lat, lon],
					address: searchInput,
					description: $("#descriptionInput2").val(),
					day: 1
				}
				locations.push(object)
				console.log(locations);
				displayMarker2(location);
				console.log(`Latitude: ${lat}, Longitude: ${lon}`);
				map2.panTo(location);
			} else {
				alert("Location not found");
			}
		})
		.catch((error) => {
			console.log(error);
			alert("Error searching location");
		});
}
function displayMarker2(location) {
	const newMarker = L.marker(location).addTo(map2);
	markers2.push(newMarker);

	newMarker.location = location; // add a custom property to store the location

	newMarker.on("click", function (e) {
		const index = markers2.indexOf(newMarker);
		if (index !== -1) {
			map2.removeLayer(newMarker);
			markers2.splice(index, 1);
			locations.splice(index, 1);
			console.log(locations);
			console.log(`Removed marker at Latitude: ${newMarker.location.lat}, Longitude: ${newMarker.location.lng}`);
		}
	});
}

document
	.getElementById("search-button2")
	.addEventListener("click", searchLocation2);

displayMap2();