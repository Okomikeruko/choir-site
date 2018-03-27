require 'test_helper'

class ArticlesControllerTest < ActionDispatch::IntegrationTest
  def setup
    @article = articles :one
  end
  
  test "should get index" do
    get news_index_path
    assert_response :success
    assert_template "articles/index"
  end

  test "should get show" do
    get news_path(@article)
    assert_response :success
    assert_template "articles/show"
  end

end
