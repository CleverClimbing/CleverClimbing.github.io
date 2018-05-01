window.onload = () => {
    let menuOptions = $('.menu-option');
    let linkCorrespondents = {
      "Problems": $('.problem-scroll-wrapper'),
      "Statistics": $('.statistics-scroll-wrapper'),
      "Profile": $('.profile-scroll-wrapper')
    }

    $('.statistics-scroll-wrapper').hide();
    $('.profile-scroll-wrapper').hide();

    menuOptions.on('click', (e) => {
      let self = $(e.target);
      let currentActive = $('.active-link');

      setActive(currentActive,self);

      let linkCorrespondent = linkCorrespondents[self.text().trim()];
      let oldLinkcorrespondent = linkCorrespondents[currentActive.text().trim()];

      oldLinkcorrespondent.hide();
      linkCorrespondent.show();
    });
}

function setActive(oldLink,newLink) {
  if(newLink[0] == oldLink[0]) return;
  newLink.addClass('active-link');
  oldLink.removeClass('active-link');
}
