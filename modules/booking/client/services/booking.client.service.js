(function () {
    'use strict';
  
    angular
      .module('booking.services')
      .factory('BookingService', BookingService);
  
    ParkingService.$inject = ['$resource', '$log'];
  
    function ParkingService($resource, $log) {
      var Booking = $resource('/api/booking/:bookingId', {
        bookingId: '@_id'
      }, {
        update: {
          method: 'PUT'
        }
      });
  
      angular.extend(Spot.prototype, {
        createOrUpdate: function () {
          var booking = this;
          return createOrUpdate(booking);
        }
      });
  
      return Booking;
  
      function createOrUpdate(spot) {
        if (booking._id) {
          return booking.$update(onSuccess, onError);
        } else {
          return booking.$save(onSuccess, onError);
        }
  
        // Handle successful response
        function onSuccess(booking) {
          // Any required internal processing from inside the service, goes here.
        }
  
        // Handle error response
        function onError(errorResponse) {
          var error = errorResponse.data;
          // Handle error internally
          handleError(error);
        }
      }
  
      function handleError(error) {
        // Log error
        $log.error(error);
      }
    }
  }());
  