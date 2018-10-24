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
$('document').ready(function () {
  const idToValMap = {};
  response.forEach(function (val) {
    idToValMap[val.id] = val;
  });
  var hierarchyData = convertData(response, idToValMap);
  hierarchyData = hierarchyData.filter(function (emp) {
    return emp.manager === null || emp.manager === undefined;
  });
  renderOrg(hierarchyData, $('#container'));
  console.log(hierarchyData);
});

function renderOrg (data, parent) {
  data.forEach(function (emp) {
    var ul = $('<ul></ul>'),
      li = $('<li></li>');
    li.html('<span>'+ emp.name + '</span>');
    ul.append(li);
    parent.append(ul);
    if (emp.hierarchy && emp.hierarchy.length) {
      let li = $('<li></li>');
      ul.append(li);
      renderOrg(emp.hierarchy, li);
    }
  });
}

function convertData (data, idToValMap) {
  if (!data.length) return;
  var hierarchyData;
  hierarchyData = data.map(function (emp) {
      if (emp.manages && emp.manages.length > 0) {
        var managesObjtsArray = emp.manages.map(function (id) {
          return idToValMap[id];
        });
        emp.hierarchy = convertData(managesObjtsArray, idToValMap);
      } else {
        emp.hierarchy = null;
      }
      return emp;
  });
  return hierarchyData;
}
