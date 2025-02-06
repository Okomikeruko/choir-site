document.addEventListener 'turbolinks:load', ->
  $('#categories-datatable').dataTable
    processing: true
    serverSide: true
    ajax:
      url: $('#articles-datatable').data('source')
    pagingType: 'full_numbers'
    columns: [
      {data: "name"}
      {data: "slug"}
      {data: "articles_count"}
      {data: "controls", searchable: false, orderable: false, className: 'text-right'}
    ]