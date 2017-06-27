const $hotelChoices = $("#hotel-choices");
const $restaurantChoices = $("#restaurant-choices");
const $activityChoices = $("#activity-choices");
const $optionsPanel = $("#options-panel");

hotels.forEach(function(hotel) {
  $hotelChoices.append(`<option data-id=${hotel.id} data-location=${hotel.place.location}>${hotel.name}</option>`)
});

restaurants.forEach(function(restaurant) {
  $restaurantChoices.append(`<option data-id=${restaurant.id} data-location=${restaurant.place.location}>${restaurant.name}</option>`);
});

activities.forEach(function(activity) {
  $activityChoices.append(`<option data-id=${activity.id} data-location=${activity.place.location}>${activity.name}</option>`);
});

// select add button
// find selected data
// construct itinerary item
// attach in DOM place
// update map

$optionsPanel.on('click', 'button[data-action]', function() {
		const $select = $(this).siblings('select');
		const type = $select.data('type');
		const id = $select.find(':selected').val();
		const coords = $select.find(':selected').data('location').split(",");
  	const $found = $("#itinerary").find('ul');

    const appenDiv = (x) => {
			x.append(`<div class="itinerary-item">
            <span class="title">${id}</span>
            <button data-action="rmvbtn" class="btn btn-xs btn-danger remove btn-circle">x</button>
            </div>`);
		}

		var dMarker = drawMarker(type, coords);


  	if (type === 'hotel'){
			 appenDiv($($found[0]))
  	} else if (type === 'restaurant'){
			 appenDiv($($found[1]))
  	} else if (type === 'activity'){
			 appenDiv($($found[2]))
  	}

 });

const $itinerary = $('#itinerary')


$itinerary.on('click', 'button[data-action="rmvbtn"]', function() {
  	const $itineraryItem = $(this).parent();
    $itineraryItem.remove()
});



//marker.setMap(null).
