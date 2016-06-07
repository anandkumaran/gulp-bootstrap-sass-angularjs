(function(){
  var myApp = angular.module('myApp', ['angularTreeview']);
  myApp.controller('myController', function($scope){

    $scope.roleList2 = [
      { "roleName" : "User default expanded", "roleId" : "role1", "expanded" : true, "children" : [
        { "roleName" : "subUser1 non-openable folder", "roleId" : "role11" },
        { "roleName" : "subUser2", "roleId" : "role12", "expanded" : true, "children" : [
          { "roleName" : "subUser2-1", "roleId" : "role121", "expanded" : true, "children" : [
          { "roleName" : "subUser2.1-1 folder ico", "roleId" : "role1211" },
            { "roleName" : "subUser2-1-2 file ico", "roleId" : "role1212" , "fileicon" : true}
        ]}
        ]}
      ]},

      { "roleName" : "Admin default collapsed", "roleId" : "role2", "children" : [
        { "roleName" : "subAdmin1", "roleId" : "role11",  "children" : [] },
        { "roleName" : "subAdmin2", "roleId" : "role12", "children" : [
          { "roleName" : "subAdmin2-1", "roleId" : "role121", "children" : [
            { "roleName" : "subAdmin2-1-1", "roleId" : "role1211", "children" : [] },
            { "roleName" : "subAdmin2-1-2", "roleId" : "role1212", "children" : [] }
          ]}
        ]}
      ]}
    ];

    //roleList1 to treeview
    $scope.roleList = $scope.roleList2;
  });
  
})();

(function(angular) {
  'use strict';
  angular.module('angularTreeview', [])
  .directive('treeModel', ['$compile', function($compile) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        var treeId = attrs.treeId;
        var treeModel = attrs.treeModel;
        var nodeId = attrs.nodeId;
        var nodeLabel = attrs.nodeLabel;
        var nodeChildren = attrs.nodeChildren;
        var searchQuery = attrs.searchQuery;
        var template = '<ul>' + '<li data-ng-repeat="node in ' + treeModel + ' | filter:' + searchQuery + ' ">' + '<i class="collapsed" data-ng-class="{nopointer: !node.' + nodeChildren + '.length}"' + 'data-ng-show="!node.expanded && !node.fileicon" data-ng-click="' + treeId + '.selectNodeHead(node)"></i>' + '<i class="expanded" data-ng-show="node.expanded && !node.fileicon" data-ng-click="' + treeId + '.selectNodeHead(node)"></i>' + '<i class="normal" data-ng-show="node.fileicon"></i> ' + '<span title="{{node.' + nodeLabel + '}}" data-ng-class="node.selected" data-ng-click="' + treeId + '.selectNodeLabel(node)">{{node.' + nodeLabel + '}}</span>' + '<div data-ng-show="node.expanded" data-tree-id="' + treeId + '" data-tree-model="node.' + nodeChildren + '" data-node-id=' + nodeId + ' data-node-label=' + nodeLabel + ' data-node-children=' + nodeChildren + ' data-search-query=' + searchQuery + '></div>' + '</li>' + '</ul>';
        if (treeId && treeModel) {
          if (attrs.angularTreeview) {
            scope[treeId] = scope[treeId] || {};
            scope[treeId].selectNodeHead = scope[treeId].selectNodeHead || function(selectedNode) {
              if (selectedNode[nodeChildren] !== undefined) {
                selectedNode.expanded = !selectedNode.expanded;
              }
            };
            scope[treeId].selectNodeLabel = scope[treeId].selectNodeLabel || function(selectedNode) {
              if (scope[treeId].currentNode && scope[treeId].currentNode.selected) {
                scope[treeId].currentNode.selected = undefined;
              }
              selectedNode.selected = 'selected';
              scope[treeId].currentNode = selectedNode;
            };
          }
          element.html('').append($compile(template)(scope));
        }
      }
    };
  }]);
})(angular);