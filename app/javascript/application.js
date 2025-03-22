// Import jQuery and make it globally available
import jQuery from 'jquery';
$ = window.$ = window.jQuery = jQuery;

// Import Bootstrap
import * as bootstrap from 'bootstrap';
window.bootstrap = bootstrap

// Import your DataTables configuration
import './datatables';

// Any other JavaScript imports
import './channels';
import './cable';

document.addEventListener('DOMContentLoaded', () => {
// Re-initialize bootstrap components after Turbo navigation
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  });

  const repeatButtons = document.querySelectorAll('.btn-repeat');
  if (repeatButtons && repeatButtons.length > 0) {
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
});

window.replay = function(audio) {
  // Check if the audio element has the repeat attribute set to "true"
  if (audio.getAttribute('data-repeat') === 'true') {
    audio.play();
  }
}