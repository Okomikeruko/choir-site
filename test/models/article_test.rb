require 'test_helper'

class ArticleTest < ActiveSupport::TestCase
  def setup
    @article = articles :one
  end
  
  test "should be valid" do
    assert @article.valid?
  end
  
  test "should have a title" do 
    @article.title = ""
    assert_not @article.valid?
  end
  
  test "title should not be too long" do 
    @article.title = "a" * 121
    assert_not @article.valid?
  end
  
  test "should have content" do 
    @article.content = ""
    assert_not @article.valid?
  end
  
  test "content should not be too long" do 
    @article.content = "a" * 5001
    assert_not @article.valid?
  end
  
  test "should have author" do 
    @article.author = nil
    assert_not @article.valid?
  end
end
