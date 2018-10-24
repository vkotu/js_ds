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
       {
          "id":9,
          "name":"Im alone",
          "title":"Software Engineer",
          "phone":"888-666-2222",
          "manages": [],
          "manager":null
       },

    ];

var idToValMap = {};

response.forEach(function (val) {
  idToValMap[val.id] = val;
})

function getHierarchyData(data) {
  if (!data) {
    return;
  }

  var hierarchyData = data.map(function (emp) {
    if (emp.manages && emp.manages.length > 0) {
      var managesArray = emp.manages.map(function (id) {
        return idToValMap[id];
      });
      emp.hierarchy = getHierarchyData(managesArray);
    } else {
      emp.hierarchy = [];
    }
    return emp;
  });
  return hierarchyData;

};

function Employee(val) {
  this.data = val;
}

Employee.prototype.renderMenu = function (root) {
  var ul = $('<ul> </ul>');
  var li = $('<li> </li>');
  var emp = this.data;
  li.html("<span>"+emp.name+"</span>").appendTo(ul);
  ul.appendTo(root);
  if (emp.hierarchy && emp.hierarchy.length) {
    renderOrg(emp.hierarchy, $("<li></li>").appendTo(ul));
  }
}


function renderOrg(empData, root) {
  $.each(empData, function (index, value) {
    var e = new Employee(value);
    e.renderMenu(root);
  });
}

$( document ).ready(function() {
    console.log( "ready!" );
    var hierarchyData = getHierarchyData(response);
    hierarchyData = hierarchyData.filter(function (val) {
      return val.manager === null || val.manager === undefined;
    });
    console.log(hierarchyData);
    renderOrg(hierarchyData, $('#container'));
});


// console.log(hierarchyData);
