class ExpandedUserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :post_titles
end
