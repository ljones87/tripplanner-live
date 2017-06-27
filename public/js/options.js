
const $hotelChoices = $("#hotel-choices");
const $restaurantChoices = $("#restaurant-choices");
const $activityChoices = $("#activity-choices");

hotels.forEach(function(hotel) {
  $hotelChoices.append(`<option data-id=${hotel.id}>${hotel.name}</option>`);
});

restaurants.forEach(function(restaurant) {
  $restaurantChoices.append(`<option data-id=${restaurant.id}>${restaurant.name}</option>`);
});

activities.forEach(function(activity) {
  $activityChoices.append(`<option data-id=${activity.id}>${activity.name}</option>`);
});
