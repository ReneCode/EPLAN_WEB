
app = angular.module('eplanApp');

//
// ProcessService
//
eplanApp.service("ProcessService", function() {
	var self = this;
  return {
  	parseGermanDateTime: function(dateString) {
  		// 28.03.2016 18:
  		var dt = new Date();
  		var aDateTime = dateString.split(' ');
  		if (aDateTime.length > 0) {
  			var aDate = aDateTime[0].split('.');
  			if (aDate.length >= 3) {
  				dt.setDate(aDate[0]);
  				dt.setMonth(aDate[1]-1);
  				dt.setFullYear(aDate[2]);
  			}
  		}
  		if (aDateTime.length > 1) {
  			var aTime = aDateTime[1].split(':');
  			if (aTime.length >= 2) {
  				dt.setHours(aTime[0]);
  				dt.setMinutes(aTime[1]);
  			}  		
  		}
  		return dt;
		}
	}; // return
});
