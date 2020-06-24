# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
demo_user = User.create(first_name: "demo", last_name: "user", email: "demo@allhikes.com", password: "123qwe")
u1 = User.create(first_name: "John", last_name: "Muir", email: "john@muirwoods.com", password: "yosemite")
u2 = User.create(first_name: "Edward", last_name: "Abbey", email: "ed@abbey.com", password: "pqkwohfj")
u3 = User.create(first_name: "John James", last_name: "Audubon", email: "jj@audubonsociety.org", password: "birdsbirds")
u4 = User.create(first_name: "Rachel", last_name: "Carson", email: "rachel@carson.com", password: "safhu78h2rh")

Hike.destroy_all
h1 = Hike.create(name: "Mount Hoffman Trail", description: "Centrally located at an elevation of 10,850' Yosemite's Mount Hoffman provides one of the best overall views of the park. The short hiking distance make this a popular hike. The trail to May Lake is a short and pleasant climb. From May Lake the official trail disappears and becomes somewhat steeper and there are several use trails to the summit.", contact: "Yosemite Wilderness Center (209) 372-0740", lng: -119.49091, lat: 37.83276, difficulty: "difficult", usage: "heavy")
h2 = Hike.create(name: "Porcupine Creek Trail to Indian Ridge Natural Arch to North Dome", description: "Trail starts downhill from the Porcupine Creek Trailhead for the first 1.5 miles then forks to the left and climbs Indian Ridge.  At the top of the ridge is the 0.3 mile side trail to Indian Rock.  After the Indian Rock junction the trail follows Indian Ridge down to the summit of North Dome.", contact: "California Travel and Tourism Commision, P.O. Box 1499 , Sacramento, CA, 95812-1499, Phone: 800-862-2543", lng: -119.54523, lat: 37.80649, difficulty: "moderate", usage: "heavy")
h3 = Hike.create(name: "Gaylor Lakes Trail", description: "Gaylor Lakes hike offers some of the most spectacular high-country views off of Tioga Road. Climb steadily to a ridge with views of the high Sierra including Mt. Dana and Dana Meadows with its scattered ponds. At the ridge crest, the trail drops 200 feet to Middle Gaylor Lake.", contact: "California Travel and Tourism Commision, P.O. Box 1499 , Sacramento, CA, 95812-1499, Phone: 800-862-2543", lng: -119.25818, lat: 37.91008, difficulty: "difficult", usage: "moderate")
h4 = Hike.create(name: "Seaview and Big Springs Trails Loop", lng: -122.24968, lat: 37.9006, difficulty: "moderate", usage: "heavy")
h5 = Hike.create(name: "Meadows Canyon, Wildcat Gorge and Curran Trail Loop", description: "Please note that the parking lot for this trail is closed due to COVID 19.", lng: -122.2445, lat: 37.90515, difficulty: "moderate", usage: "heavy")