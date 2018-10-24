const profileMenuBadge = document.getElementById("profile-menu-badge");
const profileMenu = document.getElementById("profile-menu");

profileMenuBadge.addEventListener('click', function (e) {
  e.preventDefault();
  if(profileMenu.className === 'hidden') {
    profileMenu.className = 'visible';

    document.addEventListener('keydown', keydownHandle);
    document.addEventListener('keyup', enterHandle);
  } else {
    profileMenu.className = 'hidden';
    removeHighLight();
    document.removeEventListener('keydown', keydownHandle);
  }
});

profileMenu.addEventListener('mouseover', function (e){
  var menuItem = e.target;
  if (!menuItem.classList.contains('menu-item')) {
    return;
  }
  profileMenu.querySelectorAll('.menu-item').forEach(item => {
    if (item === menuItem) {
      item.classList.add('highlighted');
    } else {
      item.classList.remove('highlighted');
    }
  });
});

profileMenu.addEventListener('mouseout', removeHighLight);

document.body.addEventListener('click', function (e) {
  var item = e.target;
  if(!item.matches('#profile-menu-badge, #profile-menu *')) {
    profileMenu.className = 'hidden';
    removeHighLight();
    document.removeEventListener('keydown', keydownHandle);
  }
});


/////////
function enterHandle(e) {
  if (e.which == 13) {
    highlighted = document.querySelector('#profile-menu > li > a.highlighted');
    if(highlighted) {
      var href = highlighted.getAttribute('href');
      profileMenu.className = 'hidden';
      removeHighLight();
      document.removeEventListener('keydown', keydownHandle);
      document.removeEventListener('keyup', enterHandle);
      window.location.replace(href);

    }
  }
}
///
function removeHighLight(e){
  if(e) e.preventDefault();
  var hg = document.querySelector('#profile-menu > li > a.highlighted');
  if (hg) hg.classList.remove('highlighted');
}

function keydownHandle(e){
  if(e) e.preventDefault();
  var highlighted = document.querySelector('#profile-menu > li > a.highlighted');
  if (!highlighted) {
    document.querySelector('#profile-menu > li:first-of-type > a').classList.add('highlighted');
    return;
  }
  if(e.which === 38) {
    //up key
    var pervItem = highlighted.parentNode.previousElementSibling;
    if(pervItem) {
      highlighted.classList.remove('highlighted');
      pervItem.querySelector('a').classList.add('highlighted');
    }
  } else if (e.which == 40) {
    //down key
    var nextItem = highlighted.parentNode.nextElementSibling;
    if(nextItem) {
      highlighted.classList.remove('highlighted');
      nextItem.querySelector('a').classList.add('highlighted');
    }
  }
}
