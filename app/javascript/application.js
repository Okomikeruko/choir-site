// Import jQuery and make it globally available
import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;

// Import Bootstrap
import * as bootstrap from 'bootstrap';

// Import your DataTables configuration
import './datatables';

// Any other JavaScript imports
import './channels';
import './cable';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Bootstrap tooltips and popovers if needed
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map((tooltipTriggerEl) => {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });

    // Your existing JavaScript initialization code
    console.log('Hello World from application.js');
});