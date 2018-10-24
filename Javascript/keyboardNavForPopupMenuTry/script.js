var profileMenu = document.getElementById('profile-menu');
var profileMenuBadge = document.getElementById('profile-menu-badge');
var links = document.querySelectorAll('#profile-menu > li > a');

profileMenuBadge.addEventListener('click', function (e) {
  var className = profileMenu.className;
  if (className === 'hidden') {
    profileMenu.className = 'visible';
    document.body.addEventListener('keyup', addKeyBoardListener);
    document.body.addEventListener('keydown', handleEnter);
  } else {
    document.body.removeEventListener('keyup', addKeyBoardListener);
    profileMenu.className = 'hidden';
  }
});

document.body.addEventListener('click', function (e) {
  var target = e.target;
  if (!target.matches('#profile-menu-badge, #profile-menu *')) {
    removeHighLight();
    profileMenu.className = 'hidden';
  }
})

profileMenu.addEventListener('mouseover', function (e) {
  var target = e.target;
  links.forEach(function (elem) {
    if (target === elem) {
      target.classList.add('highlighted');
    } else {
      elem.classList.remove('highlighted');
    }
  });
});


function removeHighLight() {
  links.forEach(function (elem) {
    elem.classList.remove('highlighted');
  });
}

function addKeyBoardListener (e) {
  var key = e.which;
  if(key !== 38 && key !==40 ) {
    return;
  }
  var currentHighlighted = document.querySelector('#profile-menu > li > a.highlighted');
  if (!currentHighlighted) {
    links[0].classList.add('highlighted');
  } else {
    var parentNode = currentHighlighted.parentNode;
    if (key === 38) {
      //up key
      var targetNode = parentNode.previousElementSibling;
      if (targetNode) {
        var link = targetNode.querySelector('a');
        removeHighLight();
        link.classList.add('highlighted');
      }
    }else if (key === 40) {
      //downKey
      var targetNode = parentNode.nextElementSibling;
      if (targetNode) {
        var link = targetNode.querySelector('a');
        removeHighLight();
        link.classList.add('highlighted');
      }
    }
  }

}

function handleEnter (e) {
  if (e.which === 13) {
    if(profileMenu.className === 'hidden') {
      return;
    }
    var highlighted = document.querySelector('#profile-menu > li > a.highlighted');
    if (!highlighted) {
      return;
    }
    var path = highlighted.getAttribute('href');
    removeHighLight();
    profileMenu.className ='hidden';
    window.location.replace(path);
  }
}
