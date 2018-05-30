class Admin::MembersController < AdminController
  before_action :get_member, only: [:edit, :update, :destroy]
  
  def index
    @members = Member.all
  end

  def new
    @member = Member.new(:vocal_range => [])
  end
  
  def create
    @member = Member.new(member_params)
    if @member.save
      flash[:success] = "Member created successfully."
      redirect_to admin_members_path
    else
      render "new"
    end
  end

  def edit
  end
  
  def update
    if @member.update_attributes(member_params)
      flash[:success] = "Member updated successfully."
      redirect_to admin_members_path
    else
      render "edit"
    end
  end
  
  def destroy
    @member.destroy
    redirect_to admin_members_path
  end
  
  private
    def member_params
      params.require(:member).permit( :name,
                                      :email,
                                      :phone,
                                      :talents,
                                    { :vocal_range => [] } )
    end
    
    def get_member
      @member = Member.find params[:id]
    end
end
