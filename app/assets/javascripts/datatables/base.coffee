document.addEventListener 'turbolinks:load', ->
  $('table[data-source]').each (_, element) ->
    $table = $(element)

    $table.dataTable
      processing: true
      serverSide: true
      ajax:
        url: $table.data('source')
      pagingType: 'full_numbers'
      columns: $table.data('columns')