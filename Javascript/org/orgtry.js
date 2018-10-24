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

    const idMap = {};



    $('document').ready(function () {
      response.forEach(function (emp) {
        idMap[emp.id] = emp;
      });
      var orgHierarchy = convertData(response);

      orgHierarchy = orgHierarchy.filter(function (emp) {
        return  emp.manager == null;
      });
      var container = document.getElementById('container');
      console.log(orgHierarchy);
      printOrg(orgHierarchy, $('#container'));
    });

    function convertData(res) {
      var temp = res.map(function (emp) {
        if (emp.manages && emp.manages.length > 0) {
          var tempMap = emp.manages.map(function (id) {
            return idMap[id];
          });
          emp.hierachy = convertData(tempMap);
        } else {
          emp.hierachy = [];
        }
        return emp;
      });
      return temp;
    }

    function printOrg(orgHierarchy, parent) {
      orgHierarchy.forEach(function (emp) {
        var ul = $('<ul></ul>');
        var li = $('<li></li>');
        li.html('<span>'+ emp.name + '</span>');
        ul.append(li);
        parent.append(ul);
        if (emp.hierachy && emp.hierachy.length) {
          let li = $('<li></li>');
          ul.append(li);
          printOrg(emp.hierachy, li);
        }
      });
    }


    function renderOrg (data, parent) {
      data.forEach(function (emp) {
        var ul = $('<ul></ul>'),
          li = $('<li></li>');
        li.html('<span>'+ emp.name + '</span>');
        ul.append(li);
        parent.append(ul);
        if (emp.hierachy && emp.hierachy.length) {
          let li = $('<li></li>');
          ul.append(li);
          renderOrg(emp.hierachy, li);
        }
      });
    }
