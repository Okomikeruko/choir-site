// Import jQuery and make it globally available
import jQuery from 'jquery';
$ = window.$ = window.jQuery = jQuery;

// Import Rails
import Rails from "@rails/ujs";
Rails.start();

// Import Bootstrap
import * as bootstrap from 'bootstrap';
window.bootstrap = bootstrap

// Import your DataTables configuration
import './datatables';

// Any other JavaScript imports
import './channels';
import './cable';
import {initializeDataTables} from "./datatables";

document.addEventListener('DOMContentLoaded', () => {

    // Re-initialize bootstrap components after Turbo navigation
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });

    // Trigger DataTable Initialization
    initializeDataTables();
});