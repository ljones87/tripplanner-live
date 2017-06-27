
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

  	if(type === 'hotel'){
  		$($found[0]).append(`<div class="itinerary-item">
            <span class="title">${id}</span>
            <button class="btn btn-xs btn-danger remove btn-circle">x</button>
            </div>`);
  	} else if (type === 'restaurant'){

  	} else if (type === 'activity'){

  	}
 });

