class ArticleDatatable < AjaxDatatablesRails::ActiveRecord
  extend Forwardable

  def_delegators :@view, :render

  def initialize(params, opts = {})
    @view = opts[:view_context]
    super
  end

  def view_columns
    # Declare strings in this format: ModelName.column_name
    # or in aliased_join_table.column_name format
    @view_columns ||= {
      title: { source: "Article.title", cond: :like },
      date: { source: "Article.created_at", searchable: false },
      status: { source: "Article.status", searchable: false },
      categories: { source: "Category.name", searchable: false },
      tags: { source: "Tag.name", searchable: false },
      controls: { source: nil,
                  sortable: false,
                  searchable: false,
                  orderable: false }
    }
  end

  def data
    records.map do |record|
      {
        title: record.title,
        date: record.created_at.strftime('%m/%d/%Y'),
        status: record.status,
        categories: record.list_categories,
        tags: record.list_tags,
        controls: controls_html(record),
        DT_RowId: record.id
      }
    end
  end

  def get_raw_records
    Article.all.includes(:tags, :categories)
  end

  private

  def controls_html(record)
    render 'admin/shared/controls.html.haml', 
           edit_path: edit_resource_path(record),
           delete_path: resource_path(record),
           format: :html
  end

  def edit_resource_path(record)
    [:edit, :admin, record]
  end

  def resource_path(record)
    [:admin, record]
  end

end
