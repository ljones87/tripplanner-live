
const $hotelChoices = $("#hotel-choices");
const $restaurantChoices = $("#restaurant-choices");
const $activityChoices = $("#activity-choices");
const $optionsPanel = $("#options-panel");

hotels.forEach(function(hotel) {
  $hotelChoices.append(`<option data-id=${hotel.id}>${hotel.name}</option>`)
});

restaurants.forEach(function(restaurant) {
  $restaurantChoices.append(`<option data-id=${restaurant.id}>${restaurant.name}</option>`);
});

activities.forEach(function(activity) {
  $activityChoices.append(`<option data-id=${activity.id}>${activity.name}</option>`);
});

// select add button
// find selected data
// construct itinerary item
// attach in DOM place
// update map

var selected = $("#hotel-choices").find(":selected")

$optionsPanel.on('click', 'button[data-action]', function() {
 	const $select = $(this).siblings('select');
  	const type = $select.data('type');
  	const id = $select.find(':selected').val();

  	const $found = $("#itinerary").find('ul');
		console.log($("#itinerary-item"))
    const appenDiv = (x) => {
			x.append(`<div class="itinerary-item">
            <span class="title">${id}</span>
            <button class="btn btn-xs btn-danger remove btn-circle">x</button>
            </div>`);
		}

  	if(type === 'hotel'){
			 appenDiv($($found[0]))
  	} else if (type === 'restaurant'){
			 appenDiv($($found[1]))
  	} else if (type === 'activity'){
			 appenDiv($($found[2]))
  	}
 });

