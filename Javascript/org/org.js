var response = [
    	 {
          "id":0,
          "name":"Adam Sandler",
          "title":"Software Engineer",
          "phone":"888-666-2222",
          "manager":null,
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
       }
    ]


var hierarchyData = response.map(function (emp){
  var hierarchy = [];
  var manages = emp.manages.map(function (id) {
    
    var reportee = response.find(function (obj) {
      return obj.id === id;
    });

    return {
      name: reportee.name
    };
  });
  return {
    name: emp.name,
    manages: manages
  }
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
  if (emp.manages && emp.manages.length) {
    renderOrg(emp.manages, $("<li></li>").appendTo(ul));
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
    renderOrg(hierarchyData, $('#container'));
});


console.log(hierarchyData);
