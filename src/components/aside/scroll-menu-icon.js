
(function () {
  'use strict';

  let section = document.querySelectorAll(".page-section");
  let sections = {};
  let i = 0;

  Array.prototype.forEach.call(section, function (e) {
      sections[e.id] = e.offsetTop;
  });

  window.onscroll = function () {
      const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
      console.log('scrollPosition', scrollPosition);
      for (i in sections) {
          if (sections[i] <= scrollPosition) {
              document.querySelector('.active').setAttribute('class', ' ');
              document.querySelector('a[href*=' + i + ']').parentElement.setAttribute('class', 'active');
          }
      }
      const sidebarSponsorSelected = document.getElementById("sidebar")
      const sponsorship = document.querySelector("a[href='#sponsor']")
      const sponsorshipSelected = sponsorship.parentElement.classList.contains('active')

      if(sponsorshipSelected){
          document.querySelector('.sidebar a:hover, .sidebar li.active a').style.color= '#e8b63b';
          sponsorship.style.color= '#E8B63B';
          sidebarSponsorSelected.style.background = "#181B46";         sponsorship.parentElement.style.background = "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMS44MSAxOS42OCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMzNDI3YTk7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5Bc3NldCAxNTwvdGl0bGU+PGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9IkxheWVyXzEtMiIgZGF0YS1uYW1lPSJMYXllciAxIj48cmVjdCBjbGFzcz0iY2xzLTEiIHdpZHRoPSIzLjk0IiBoZWlnaHQ9IjMuOTQiLz48cmVjdCBjbGFzcz0iY2xzLTEiIHg9IjMuOTQiIHk9IjMuOTQiIHdpZHRoPSIzLjk0IiBoZWlnaHQ9IjMuOTQiLz48cmVjdCBjbGFzcz0iY2xzLTEiIHg9IjcuODciIHk9IjcuODciIHdpZHRoPSIzLjk0IiBoZWlnaHQ9IjMuOTQiLz48cmVjdCBjbGFzcz0iY2xzLTEiIHg9IjMuOTQiIHk9IjExLjgxIiB3aWR0aD0iMy45NCIgaGVpZ2h0PSIzLjk0Ii8+PHJlY3QgY2xhc3M9ImNscy0xIiB5PSIxNS43NCIgd2lkdGg9IjMuOTQiIGhlaWdodD0iMy45NCIvPjwvZz48L2c+PC9zdmc+) no-repeat right";
          sponsorship.parentElement.style.backgroundPositionX = "0px";
      }else{
        sponsorship.style.color= '#e8b63b'
        sidebarSponsorSelected.style.background = "#3e1bce94";
        sponsorship.parentElement.style.background = '';
      }
  };
})();
