class AddAuthSubToPerson < ActiveRecord::Migration[5.2]
  def change
    add_column :people, :auth_sub, :text
  end
end
