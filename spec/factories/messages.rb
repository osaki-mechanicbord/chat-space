FactoryBot.define do
    factory :message do
      content {Faker::Lorem.sentence}
      image {File.open("#{Rails.root}https://i.gyazo.com/32ed62dbf1970fc8899bb89689a391d3.png")}
      user
      group
    end
  end