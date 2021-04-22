//common side navbar call

$(document).ready(function () {
  $(".sidenav").sidenav();
});



//Footer and Navbar

let header = $(`
<nav class="black">
<div class="nav-wrapper">
    <a href="#!" class="brand-logo"><img src="assets/images/web_image.png" ></a>
    <!--hamburger icon -->
    <a href="#" data-target="mobile-demo" class="white-text sidenav-trigger"><i
            class="material-icons">menu</i></a>
    <ul class="right hide-on-med-and-down">
        <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
        <li class="nav-item"><a class="nav-link" href="skills.html">Skills</a></li>
        <li class="nav-item"><a class="nav-link" href="certificates.html">Certificates</a></li>
        <li class="nav-item"><a class="nav-link" href="projects.html">projects</a></li>
        <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>

        <!--TOGGLE FOR LIGHT/DARK MODE-->
        <li>
        <label for="switch" class="theme-switch">
        <input class="toggle-checkbox" type="checkbox" id="switch" name="theme" />
          <div class='toggle-slot'>
          <div class='sun-icon-wrapper'>
          <div class="iconify sun-icon" data-icon="feather-sun" data-inline="false"> </div>
          </div>
          <div class='toggle-button'></div>
          <div class='moon-icon-wrapper'>
          <div class="iconify moon-icon" data-icon="feather-moon" data-inline="false"> </div>
          </div>
          </div>
          </label>
        </li>
    </ul>
</div>
</nav>
<!--Side Nav Bar -->
<ul class="sidenav" id="mobile-demo">
<li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
<li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
<li class="nav-item"><a class="nav-link" href="skills.html">Skills</a></li>
<li class="nav-item"><a class="nav-link" href="certificates.html">Certificates</a></li>
<li class="nav-item"><a class="nav-link" href="projects.html">projects</a></li>
<li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>

<!--TOGGLE FOR LIGHT/DARK MODE-->
        <li>
        <label for="switch" class="theme-switch">
        <input class="toggle-checkbox" type="checkbox" id="switch" name="theme" />
          <div class='toggle-slot side-toggle'>
          <div class='sun-icon-wrapper'>
          <div class="iconify sun-icon" data-icon="feather-sun" data-inline="false"> </div>
          </div>
          <div class='toggle-button'></div>
          <div class='moon-icon-wrapper'>
          <div class="iconify moon-icon" data-icon="feather-moon" data-inline="false"> </div>
          </div>
          </div>
          </label>
        </li>
</ul>`);

let bodyElement = $(`body`);
// insert before body
bodyElement.prepend(header);

/*JavaScript for toggle for light/dark mode*/

var checkbox = document.querySelector('input[name=theme]');
if (checkbox) {
  checkbox.addEventListener('change', function () {
    if (this.checked) {
      trans()
      document.documentElement.setAttribute('data-theme', 'dark')
    }
    else {
      trans()
      document.documentElement.setAttribute('data-theme', 'light')
    }
  });

  let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
      document.documentElement.classList.remove('transition')
    }, 1000)
  }

}
