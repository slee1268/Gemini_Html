document.addEventListener('DOMContentLoaded', () => {
  const phoneLink = document.getElementById('phone-link');

  if (phoneLink) {
    phoneLink.addEventListener('click', (event) => {
      const confirmed = window.confirm('Do you want to proceed with calling 408-345-5335?');
      if (!confirmed) {
        event.preventDefault();
      }
    });
  }
});

