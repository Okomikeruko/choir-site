// =====================================================
// 1. REQUIRED DEPENDENCIES
// =====================================================

// Import jQuery and DataTables
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import 'datatables.net-select';
import 'datatables.net-buttons';
import 'datatables.net-buttons-bs4';
import 'datatables.net-buttons/js/buttons.html5.js';

// =====================================================
// 2. UTILITY FUNCTIONS
// =====================================================
// Parse row attributes from server response
const parseRowAttributes = (data) => {
  if (!data.row_attributes) return null;
  return JSON.parse(data.row_attributes.replace(/&quot;/g, '"'));
}

// Apply attributes recursively to an element
const applyAttributes = (element, attributes) => {
  if (!attributes || typeof attributes !== 'object') return;

  Object.entries(attributes).forEach(([key, value]) => {
    // Skip null/undefined values
    if (value == null) return;

    // Handle special case for 'class' attribute
    if (key === 'class') {
      element.addClass(value);
      return;
    }

    // Recursively handle nested objects
    if (typeof value === 'object' && !Array.isArray(value)) {
      // Handle special namespaces
      switch(key) {
        case 'data':
          applyAttributes(element, Object.fromEntries(
              Object.entries(value).map(([k, v]) => [`data-${k}`, v])
          ));
          break;
        case 'aria':
          applyAttributes(element, Object.fromEntries(
              Object.entries(value).map(([k, v]) => [`aria-${k}`, v])
          ));
          break;
        default:
          // For other nested objects, use as namespace
          const namespace = `${key}-`;
          applyAttributes(element, Object.fromEntries(
              Object.entries(value).map(([k, v]) => [`${namespace}${k}`, v])
          ));
      }
      return;
    }

    // Handle attribute naming
    let attrKey = key;
    if (!key.startsWith('aria-') && !key.startsWith('data-')) {
      attrKey = `data-${key}`;
    }

    // Set attribute
    element.attr(attrKey, value);

    // Set jQuery data for data attributes
    if (key === 'data' || attrKey.startsWith('data-')) {
      const dataKey = key === 'data' ? value : key.replace('data-', '');
      element.data(dataKey, value);
    }
  });
};

// =====================================================
// 3. GLOBAL DATATABLE DEFAULTS
// =====================================================
$.extend( $.fn.dataTable.defaults, {
  dom: 'Bfrtlip',
  pagingType: 'full_numbers',
  processing: true,
  responsive: true
});

// =====================================================
// 4. INITIALIZATION FUNCTIONS
// =====================================================
// Initialize Datatables
export const initializeDataTables = () => {
  $('table[data-source]').each((_, element) => {
    const $table = $(element);

    $table.DataTable({
      ajax: {
        url: $table.data('source')
      },
      buttons: $table.data('buttons'),
      serverSide: true,
      columns: $table.data('columns'),
      order: $table.data('order'),
      select: {
        style: 'multi',
        selector: 'td.select-checkbox'
      },
      createdRow: (row, data, _dataIndex) => {
        const attrs = parseRowAttributes(data);
        if (attrs) {
          applyAttributes($(row), attrs);
        }
      }
    });
  });

  // Handle client-side tables
  $("table[id^=dttb-]").not('.dataTable').each((_, element) => {
    $(element).DataTable();
  });
};

// =====================================================
// 5. EVENT HANDLERS
// =====================================================
// Handle AJAX URL from data-source attribute
$(document).on('preInit.dt', function(e, settings) {
  const api = new $.fn.dataTable.Api(settings);
  const tableId = `#${api.table().node().id}`;
  const url = $(tableId).data('source');

  if (url) {
    return api.ajax.url(url);
  }
});

// Handle clickable rows
$(document).on('click', 'tr.clickable-row td:not(.select-checkbox)', function(e) {
  const href = $(this).parent().data('href');
  if (href) {
    window.location = href;
  }
});

// =====================================================
// 7. CUSTOM BUTTON EXTENSIONS
// =====================================================
$.fn.dataTable.ext.buttons.deleteMessages = {
  text: 'Delete',
  className: 'btn btn-sm btn-danger',
  action: function(e, dt, node, config) {
    var rows = dt.rows({ selected: true });
    if (rows.count() === 0) {
      alert("Please select at least one message");
      return;
    }

    if (!confirm("Are you sure you want to delete the selected messages?")) {
      return;
    }

    var ids = rows.data().map(function(row) {
      return row.DT_RowId;
    }).toArray();

    $.ajax({
      url: "/admin/messages/do_to_all",
      method: "POST",
      data: {
        all_messages: {
          msgs: ids,
        },
        commit: "Delete Messages",
        authenticity_token: $('meta[name="csrf-token"]').attr('content')
      },
      success: function() {
        dt.ajax.reload();
      },
      error: function(xhr, status, error) {
        alert("Error deleting messages: " + error);
      }
    });
  }
};

$.fn.dataTable.ext.buttons.markAsRead = {
  text: 'Mark as Read',
  className: 'btn btn-sm btn-primary',
  action: function(e, dt, node, config) {
    var rows = dt.rows({ selected: true });
    if (rows.count() === 0) {
      alert("Please select at least one message");
      return;
    }

    var ids = rows.data().map(function(row) {
      return row.DT_RowId;
    }).toArray();

    $.ajax({
      url: "/admin/messages/do_to_all",
      method: "POST",
      data: {
        all_messages: {
          msgs: ids,
        },
        commit: "Mark as Read",
        authenticity_token: $('meta[name="csrf-token"]').attr('content')
      },
      success: function() {
        dt.rows().deselect();
        dt.ajax.reload();
      },
      error: function(xhr, status, error) {
        alert("Error updating messages: " + error);
      }
    });
  }
};

$.fn.dataTable.ext.buttons.markAsUnread = {
  text: 'Mark as Unread',
  className: 'btn btn-sm btn-info',
  action: function(e, dt, node, config) {
    var rows = dt.rows({ selected: true });
    if (rows.count() === 0) {
      alert("Please select at least one message");
      return;
    }

    var ids = rows.data().map(function(row) {
      return row.DT_RowId;
    }).toArray();

    $.ajax({
      url: "/admin/messages/do_to_all",
      method: "POST",
      data: {
        all_messages: {
          msgs: ids,
        },
        commit: "Mark as Unread",
        authenticity_token: $('meta[name="csrf-token"]').attr('content')
      },
      success: function() {
        dt.rows().deselect();
        dt.ajax.reload();
      },
      error: function(xhr, status, error) {
        alert("Error updating messages: " + error);
      }
    });
  }
};

$.fn.dataTable.ext.buttons.selectAll = {
  text: '<span class="glyphicon glyphicon-check"></span>',
  titleAttr: "Select All",
  className: 'btn btn-sm btn-outline-secondary',
  action: function ( e, dt, node, config ) {
    dt.rows().select();
  }
};

$.fn.dataTable.ext.buttons.selectNone = {
  text: 'Select None',
  className: 'btn btn-sm btn-outline-secondary',
  action: function ( e, dt, node, config ) {
    dt.rows().deselect();
  }
};

// Initialize on page load - replacing Turbolinks with Turbo
document.addEventListener('turbo:load', initializeDataTables);

// Clean up before caching
document.addEventListener('turbo:before-cache', function() {
  const tables = $($.fn.dataTable.tables(true)).DataTable();
  if (tables) {
    tables.clear();
    tables.destroy();
  }
});

// Create a global reference for external access if needed
window.initializeDataTables = initializeDataTables;