function Ctrl($scope) {
	// constants
	$scope.date = new Date();
	
	// their company's info
    $scope.customerName = "Test Company",
    $scope.customerAddress = "123 Main, Ny, NY",
	
	// company info
	$scope.companyName = "Clayton Errington",
	$scope.companyAddress = "312 Frankford Ave, Lubbock, TX, 79416",

	// work details
	$scope.Work = "to do web stuff",
	$scope.Total = "$500",
	$scope.Photography = "Photography will be provided by me for an additional cost previously discussed per project.",
	$scope.PaymentSch = "",
	$scope.ScopeOfWork = ""
}