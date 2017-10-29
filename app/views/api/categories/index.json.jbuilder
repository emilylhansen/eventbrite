@categories.each do |category|
  json.set! category.id do
    json.partial! 'category', category: category
  end
end
