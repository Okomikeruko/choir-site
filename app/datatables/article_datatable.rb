class ArticleDatatable < AjaxDatatablesRails::ActiveRecord

  def view_columns
    # Declare strings in this format: ModelName.column_name
    # or in aliased_join_table.column_name format
    @view_columns ||= {
      title: { source: "Article.title", cond: :like },
      date: { source: "Article.created_at", cond: :date_range },
      status: { source: "Article.status" },
      categories: { source: "Category.name", cond: :like },
      tags: { source: "Tag.name", cond: :like }
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
        DT_RowId: record.id
      }
    end
  end

  def get_raw_records
    Article.all
  end

end
