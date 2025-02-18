//= require datatables/jquery.dataTables

// optional change '//' --> '//=' to enable

// require datatables/extensions/AutoFill/dataTables.autoFill
//= require datatables/extensions/Buttons/dataTables.buttons
//= require datatables/extensions/Buttons/buttons.html5
// require datatables/extensions/Buttons/buttons.print
// require datatables/extensions/Buttons/buttons.colVis
// require datatables/extensions/Buttons/buttons.flash
// require datatables/extensions/ColReorder/dataTables.colReorder
// require datatables/extensions/FixedColumns/dataTables.fixedColumns
// require datatables/extensions/FixedHeader/dataTables.fixedHeader
// require datatables/extensions/KeyTable/dataTables.keyTable
// require datatables/extensions/Responsive/dataTables.responsive
// require datatables/extensions/RowGroup/dataTables.rowGroup
// require datatables/extensions/RowReorder/dataTables.rowReorder
// require datatables/extensions/Scroller/dataTables.scroller
//= require datatables/extensions/Select/dataTables.select

//= require datatables/dataTables.bootstrap4
// require datatables/extensions/AutoFill/autoFill.bootstrap4
//= require datatables/extensions/Buttons/buttons.bootstrap4
// require datatables/extensions/Responsive/responsive.bootstrap4


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

//Global DataTable defaults
$.extend( $.fn.dataTable.defaults, {
  dom: 'Bfrtip',
  pagingType: 'full_numbers',
  processing: true,
  responsive: true
});

// Handle AJAX URL from data-source attribute
$(document).on('preInit.dt', function(e, settings) {
  const api = new $.fn.dataTable.Api(settings);
  const tableId = `#${api.table().node().id}`;
  const url = $(tableId).data('source');

  if (url) {
    return api.ajax.url(url);
  }
});

// Initialize Datatables
const initializeDataTables = () => {
  $('table[data-source]').each((_, element) => {
    const $table = $(element);

    if ($.fn.DataTable.isDataTable($table)) {
      return;
    }

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

// Handle clickable rows
$(document).on('click', 'tr.clickable-row td:not(.select-checkbox)', function(e) {
  const href = $(this).parent().data('href');
  if (href) {
    window.location = href;
  }
});

// Turbolinks support
$(document).on('turbolinks:load', initializeDataTables);

// Clean up before caching
$(document).on('turbolinks:before-cache', function() {
  const tables = $($.fn.dataTable.tables(true)).DataTable();
  if (tables) {
    tables.clear();
    tables.destroy();
  }
});
