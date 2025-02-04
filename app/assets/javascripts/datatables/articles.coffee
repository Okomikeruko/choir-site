$ ->
  $('#articles-datatable').dataTable
    processing: true
    serverSide: true
    ajax:
      url: $('#articles-datatable').data('source')
    pagingType: 'full_numbers'
    columns: [
      {data: "title"}
      {data: "date"}
      {data: "status"}
      {data: "categories", searchable: false, orderable: false}
      {data: "tags", searchable: false, orderable: false}
    ]