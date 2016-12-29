document.addEventListener('DOMContentLoaded', function() {
  let pageMain = document.querySelector('.page-main');
  let toggleSidebar = document.querySelectorAll('.js-toggle-sidebar');

  for (let toggleSidebarItem of toggleSidebar) {
    toggleSidebarItem.addEventListener('click', (event) => {
      event.preventDefault();
      pageMain.classList.toggle('page-main--collapsed');
    }, false);
  }


});
