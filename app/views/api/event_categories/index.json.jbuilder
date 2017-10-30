@eventCategories.each do |eventCategory|
  json.set! eventCategory.id do
    json.partial! 'event_category', eventCategory: eventCategory
  end
end
