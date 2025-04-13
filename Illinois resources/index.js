<script>
document.addEventListener('DOMContentLoaded', function () {
  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      let targetId = this.getAttribute('href');
      let targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Dropdown functionality for mobile/desktop
  const dropdowns = document.getElementsByClassName("dropdown");
  for (let i = 0; i < dropdowns.length; i++) {
    const button = dropdowns[i].getElementsByClassName("dropbtn")[0];
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const dropdownContent = this.nextElementSibling;
      dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
    });
  }

  // Close dropdown if clicked outside
  window.addEventListener('click', function (event) {
    if (!event.target.matches('.dropbtn')) {
      const dropdowns = document.getElementsByClassName("dropdown-content");
      for (let i = 0; i < dropdowns.length; i++) {
        dropdowns[i].style.display = "none";
      }
    }
  });

  // Open external links in new tabs
  document.querySelectorAll('a[href^="http"]').forEach(link => {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
  });

  // Scroll-to-top button
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopBtn.style.display = 'block';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  };

  if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Perform site-wide search (assuming input ID is #siteSearch)
  const searchInput = document.getElementById('siteSearch');
  const searchResults = document.getElementById('searchResults');
  if (searchInput && searchResults) {
    searchInput.addEventListener('keyup', function () {
      const query = this.value.toLowerCase();
      const items = document.querySelectorAll('.resource-section li');
      let matches = [];

      items.forEach(item => {
        if (item.textContent.toLowerCase().includes(query)) {
          matches.push(`<li>${item.innerHTML}</li>`);
        }
      });

      if (matches.length > 0) {
        searchResults.innerHTML = `<ul>${matches.join('')}</ul>`;
      } else {
        searchResults.innerHTML = `<p>No results found.</p>`;
      }
    });
  }

  // Optional: Enhance strong links with alert (can be removed)
  document.querySelectorAll('strong a').forEach(item => {
    item.addEventListener('click', function (event) {
      // Remove this block if you don’t want the alert
      // event.preventDefault();
      // alert("Link clicked: " + this.href);
    });
  });
});
</script>
