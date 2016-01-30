//angular script

(function() {
	var app = angular.module('site', []);

	function SiteController() {
    		alert("Angular-js Loaded!");
    		this.product = jewelleries;
    		this.tab = 1;
    		this.alert = function() {
      			alert("hello");
    		}
		this.addReview = function(email){
			alert("email submitted! from " + email);
		}
		
 	 }
  var jewelleries = [{
    name: 'Gold Ring',
    price: 250,
    description: "18 Carat Gold.",
    soldOut: false
  }, {
    name: 'Silver Ring',
    price: 125,
    description: "18 carat silver",
    soldOut: false
  }, {
    name: 'Platinum Ring',
    price: 300,
    description: "100% Platinum",
    soldOut: true
  }];

  app.controller('SiteController', SiteController);


	function PanelController(){
		alert("PanelController");
		this.tab = 1;
		this.selectTab = function(selectTab){
			this.tab = selectTab;
		}
		this.isSelected = function(checkTab){
			this.tab = checkTab;
		}
}

	app.controller('PanelController', PanelController);

	app.directive('productTitle', function(){
		return {
			restrict: 'E',
			templateUrl: '../html/aboutme.html',
			controller: function(){
				alert("controller loaded!")
			},
			controllerAs: product
		};
});
})();
