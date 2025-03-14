# frozen_string_literal: true

require 'test_helper'

module Admin
  # Test class for MembersController within the Admin namespace
  class MembersControllerTest < ActionDispatch::IntegrationTest
    def setup
      @member = members :lee
      sign_in users :admin
    end

    test 'should get index' do
      get admin_members_path

      assert_response :success
      assert_template 'admin/members/index'
    end

    test 'should get new' do
      get new_admin_member_path

      assert_response :success
      assert_template 'admin/members/new'
    end

    test 'should create new member' do
      assert_difference 'Member.count', 1 do
        post admin_members_path, params: {
          member: {
            name: 'Sid Unrau',
            email: 'sid-unrau@gmail.com',
            phone: '(801) 555-1235',
            vocal_range: ['Tenor'],
            talents: 'Piano, Conducting'
          }
        }

        assert_response :redirect
        assert_redirected_to admin_members_path
      end
    end

    test 'should get edit' do
      get edit_admin_member_path(@member)

      assert_response :success
      assert_template 'admin/members/edit'
    end

    test 'should edit existing member' do
      patch admin_member_path(@member), params: {
        member: {
          name: 'Heather Taylor',
          email: 'email@email.com',
          phone: '(427) 123-3456',
          vocal_range: ['Soprano'],
          talents: 'Piano'
        }
      }

      assert_response :redirect
      assert_redirected_to admin_members_path
      @member.reload

      assert_equal 'Heather Taylor', @member.name
      assert_equal 'email@email.com', @member.email
      assert_predicate @member, :soprano?
      assert_not @member.bass?
    end

    test 'delete should remove member record' do
      assert_difference 'Member.count', -1 do
        delete admin_member_path(@member)

        assert_response :redirect
        assert_redirected_to admin_members_path
      end
    end
  end
end
