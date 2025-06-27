// Import jQuery and make it globally available
import jQuery from 'jquery';
// Explicitly set globals before any other imports
if (typeof window !== 'undefined') {
  window.$ = jQuery;
  window.jQuery = jQuery;
}
if (typeof global !== 'undefined') {
  global.$ = jQuery;
  global.jQuery = jQuery;
}
$ = jQuery;

// Import Bootstrap
import * as bootstrap from 'bootstrap';
window.bootstrap = bootstrap;

import 'jquery-ui/ui/widgets/sortable';
import './datatables';
import './channels';
import './cable';
import './admin/songs';

document.addEventListener('DOMContentLoaded', async () => {

  await import('@nathanvda/cocoon');

  // Re-initialize bootstrap components after Turbo navigation
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  });

  initializeRepeatButtons();
});

function initializeRepeatButtons() {
  const repeatButtons = document.querySelectorAll('.btn-repeat');
  repeatButtons.forEach(button => {
    button.addEventListener('click', () => {
      const id = button.dataset.id;
      button.classList.toggle('active');

      const audioElement = document.getElementById(id);
      if (audioElement) {
        audioElement.setAttribute(
          'data-repeat',
          button.classList.contains('active') ? 'true' : 'false'
        );
      }
    });
  });
}

window.replay = function(audio) {
  // Check if the audio element has the repeat attribute set to "true"
  if (audio.getAttribute('data-repeat') === 'true') {
    audio.play();
  }
}