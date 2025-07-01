document.addEventListener('DOMContentLoaded', function() {
  function updatePositions() {
    const panels = document.querySelectorAll('.instruments .panel');
    panels.forEach((panel, index) => {
      const positionInput = panel.querySelector("input[id$='_position']");
      if (positionInput) {
        positionInput.value = index;
      }
    });
  }

  // Initialize sortable if instruments container exists
  const instrumentsContainer = document.querySelector('.instruments');
  if (instrumentsContainer && typeof $ !== 'undefined') {
    $(instrumentsContainer)
      .sortable({
        handle: ".handle",
        placeholder: "ui-state-highlight sheet-music-highlight",
        update: function(event, ui) {
          updatePositions();
        }
      })
      .on('cocoon:after-insert cocoon:after-remove', function() {
        updatePositions();
      }
    );
  }
});