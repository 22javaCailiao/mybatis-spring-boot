var app = angular.module('userApp', [ 'ngTable', 'toaster', 'ui.bootstrap' ]);
app.controller('userController', function($scope, $rootScope, $http,
		NgTableParams, toaster, $modal) {
	$scope.index = "index 页面";

	// 获取下拉列表信息
	$http.get("../json/data.json").success(function(data) {
		$rootScope.sexs = data[0].sexs;
		$rootScope.schools = data[1].schools;
		$rootScope.majors = data[2].majors;
	})

	$rootScope.queryUsers = function() {
		$http.get("/query").success(
				function(data) {
					toaster.pop('success', "查询用户成功");
					$scope.userTable = new NgTableParams({
					      // initial sort order
					      sorting: { id: "asc" } 
					    }, {
					      dataset: data
					    });
				}).error(function(data) {
			toaster.pop('warning', "查询用户失败");
		});
	}

	$scope.openAddUserModel = function() {
		var modalInstance = $modal.open({
			templateUrl : 'addUserInfo.html',
			controller : 'addUserModalCtrl',
			resolve : {
				userinfo : function() {
					// return user;
				}
			}
		})
	}

	$scope.openUpdateModel = function(user) {
		var modalInstance = $modal.open({
			templateUrl : 'editUserInfo.html',
			controller : 'updateUserModalCtrl',
			resolve : {
				userinfo : function() {
					return user;
				}
			}
		})
	}

	$scope.openUserDetailModel = function(user) {
		var modalInstance = $modal.open({
			templateUrl : 'userDetail.html',
			controller : 'ModalInstanceCtrl',
			size : 'sm',
			resolve : {
				userinfo : function() {
					return user;
				}
			}
		})
	}

	$scope.openDeleteModel = function(user) {
		var modalInstance = $modal.open({
			templateUrl : 'deleteUser.html',
			controller : 'deleteUserModalCtrl',
			size : 'sm',
			resolve : {
				userinfo : function() {
					return user;
				}
			}
		})
	}
});

app.controller('addUserModalCtrl', function($scope, $http, $rootScope,
		$modalInstance, toaster, userinfo) {
	$scope.user = userinfo;

	$scope.ok = function() {
		$http.post("/add", $scope.user).success(function(data) {
			if (data.STATE == "SUCCESSED") {
				toaster.pop('success', "添加用户成功");
				$rootScope.queryUsers();
			} else {
				toaster.pop('warning', "添加用户失败");
			}
		}).error(function(data) {
			toaster.pop('error', "添加用户失败");
		});
		$modalInstance.close(userinfo);
	};
	$scope.cancel = function() {
		$modalInstance.dismiss('cancel');
	}
});

app.controller('updateUserModalCtrl', function($scope, $http, $rootScope,
		$modalInstance, toaster, userinfo) {
	$scope.user = angular.copy(userinfo);

	$scope.ok = function() {
		$http.post("/update", $scope.user).success(function(data) {
			if (data.STATE == "SUCCESSED") {
				toaster.pop('success', "更新用户信息成功");
				$rootScope.queryUsers();
			} else {
				toaster.pop('warning', "更新用户信息失败");
			}
		}).error(function(data) {
			toaster.pop('error', "更新用户信息失败");
		});
		$modalInstance.close(userinfo);
	};
	$scope.cancel = function() {
		$modalInstance.dismiss('cancel');
	}
});

app.controller('deleteUserModalCtrl', function($scope, $http, $rootScope,
		$modalInstance, toaster, userinfo) {
	$scope.user = userinfo;

	$scope.ok = function() {
		$http.post("/delete", $scope.user).success(function(data) {
			if (data.STATE == "SUCCESSED") {
				toaster.pop('success', "删除用户成功");
				$rootScope.queryUsers();
			} else {
				toaster.pop('warning', "删除用户失败");
			}
		}).error(function(data) {
			toaster.pop('error', "删除用户失败");
		});
		$modalInstance.close(userinfo);
	};
	$scope.cancel = function() {
		$modalInstance.dismiss('cancel');
	}
});

app.controller('ModalInstanceCtrl', function($scope, $modalInstance, userinfo) {
	$scope.user = userinfo;

	$scope.ok = function() {
		$modalInstance.close(userinfo);
	};
	$scope.cancel = function() {
		$modalInstance.dismiss('cancel');
	}
});
