# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

def arr_check_with_letter (arr, ltr)
    arr.select{|word| word.include?(ltr)}
end

p arr_check_with_letter(beverages_array, letter_o)
#["coffee", "soda water"]
p arr_check_with_letter(beverages_array, letter_t)
#["tea", "water", "soda water"]

# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Vermont'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Vermont', 'Washington'] 

def hash_into_one_array (hash)
    hash.values.flatten().sort
end

p hash_into_one_array us_states

# ["Arizona", "California", "Idaho", "Maine", "Nevada", "New Hampshire", "Oregon", "Vermont", "Washington"]

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.


class Bike 

    def initialize (model)
        @model = model
        @wheels = 2
        @current_speed = 0

    end

    def bike_info
        "The #{@model} has #{@wheels} wheels and is going #{@current_speed} mph"
    end

    def ride_faster(val)
        @current_speed += val
    end

    def brake(val)
        if(@current_speed >= 1)
            @current_speed -= val
        else
            @current_speed = 0
        end
        @current_speed < 0 ? @current_speed = 0 : @current_speed
    end
end
# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

my_bike = Bike.new('Ducati')

p my_bike.bike_info
"The Ducati has 2 wheels and is going 0"


# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

p my_bike.ride_faster(42)
# =>42
p my_bike.ride_faster(69)
# =>69
p my_bike.bike_info
# "The Ducati has 2 wheels and is going 111 mph"
p my_bike.brake(50)
# =>61
p my_bike.brake(63)
# =>0
p my_bike.bike_info
# "The Ducati has 2 wheels and is going 0 mph"


# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0
