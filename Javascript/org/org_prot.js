var response = [
    	 {
          "id":0,
          "name":"Adam Sandler",
          "title":"Software Engineer",
          "phone":"888-666-2222",
          "manager":6,
          "manages":[2]
       },
       {
          "id":2,
          "name":"David Ye",
          "title":"Software Engineer",
          "phone":"666-555-1111",
          "manages":[1],
          "manager":0
       },
       {
          "id":1,
          "name":"Geoff Mentos",
          "title":"Software Engineer",
          "phone":"888-666-2222",
          "manages":[3,4],
          "manager":2
       },
       {
          "id":3,
          "name":"asdasd Mentos",
          "title":"Software Engineer",
          "phone":"888-666-2222",
          "manages":[5],
          "manager":1
       },
       {
          "id":4,
          "name":"vvxvx Mentos",
          "title":"Software Engineer",
          "phone":"888-666-2222",
          "manages":[],
          "manager":1
       },
       {
          "id":5,
          "name":"vvxvx asdasdasdas",
          "title":"Software Engineer",
          "phone":"888-666-2222",
          "manages":[],
          "manager":3
       },
       {
          "id":7,
          "name":"Monarch",
          "title":"Software Engineer",
          "phone":"888-666-2222",
          "manages": [8],
          "manager":null
       },
       {
          "id":6,
          "name":"Im Me",
          "title":"Software Engineer",
          "phone":"888-666-2222",
          "manages":[0],
          "manager":null
       },
       {
          "id":8,
          "name":"Servant",
          "title":"Software Engineer",
          "phone":"888-666-2222",
          "manages": [],
          "manager":7
       },

    ];




function setHierarchyData(idToValMap, mainIdToValMap) {
  if (idToValMap === null || idToValMap === undefined) {
    return;
  }

  for(var id in idToValMap) {
    if (!!idToValMap[id].hierarchy) {
        return;
    }
    if (idToValMap[id].manages && idToValMap[id].manages.length) {
      var temp = {};
      idToValMap[id].manages.forEach(function (id) {
        temp[id] = Object.assign(mainIdToValMap[id]);
        delete mainIdToValMap[id];
      });
      setHierarchyData(temp, mainIdToValMap);
      idToValMap[id].hierarchy = temp;
    }else {
      idToValMap[id].hierarchy = null;
    }
  }

};

$( document ).ready(function() {
  var mainIdToValMap = {};
  response.forEach(function (val) {
    mainIdToValMap[val.id] = val;
  });
  setHierarchyData(mainIdToValMap, mainIdToValMap);
  console.log(mainIdToValMap);
  renderOrg(mainIdToValMap, $('#container'));
});


function Employee(val) {
  this.data = val;
}

Employee.prototype.renderMenu = function (root) {
  var ul = $('<ul> </ul>');
  var li = $('<li> </li>');
  var emp = this.data;
  li.html("<span>"+emp.name+"</span>").appendTo(ul);
  ul.appendTo(root);
  if (!!emp.hierarchy) {
    renderOrg(emp.hierarchy, $("<li></li>").appendTo(ul));
  }
}


function renderOrg(empData, root) {
  $.each(empData, function (index, value) {
    if (!value.isVisited) {
      value.isVisited = true;
      var e = new Employee(value);
      e.renderMenu(root);
    }
  });
}

// console.log(hierarchyData);
