# frozen_string_literal: true

# Articles Datatable
class ArticlesDatatable < Effective::Datatable
  datatable do
    order :title, :asc
    col :title, label: 'Title'
    col :created_at, label: 'Date' do |article|
      article.created_at.strftime('%m/%d/%Y')
    end
    col :status
    col :list_categories, label: 'Categories'
    col :list_tags, label: 'Tags'

    actions_col btn_class: "btn-default",
                actions_partial: :dropleft,
                inline: false
  end

  collection do
    Article.unscoped.all
  end
end