from django.shortcuts import render
from .models import EyeTest
import string, random
# Create your views here.


word_list = [
    "Bag", "Book", "Pen", "Cup", "Chair", "Table", "Spoon", "Plate", "Glass", 
    "Door", "Sun", "Moon", "Rain", "Snow", "Tree", "Leaf", "Cloud", "Rock", 
    "Grass", "Hill", "Cat", "Dog", "Fish", "Bird", "Ant", "Bee", "Cow", "Duck", 
    "Frog", "Lion", "Red", "Blue", "Green", "Yellow", "Pink", "Black", "White", 
    "Gray", "Brown", "Purple", "Bread", "Rice", "Milk", "Water", "Egg", "Soup", 
    "Cake", "Apple", "Mango", "Corn", "Walk", "Run", "Jump", "Swim", "Dance", 
    "Sing", "Talk", "Look", "Eat", "Sleep", "Happy", "Sad", "Small", "Big", 
    "Hot", "Cold", "Wet", "Dry", "Good", "Bad", "One", "Two", "Three", "Four", 
    "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Park", "Home", "Shop", 
    "Room", "Street", "Beach", "School", "Lake", "Town", "Farm", "Box", "Light", 
    "Ball", "Clock", "Bed", "Fan", "Star", "Paper", "Phone"
]

def random_letter(word_list):
    return  random.choice(word_list)


def test_eye(request):
    letter_list=[]
    size=250
    
    for _ in range(5):
        letter = random_letter(word_list)
        letter_list.append({'letter':letter , 'size': size  })
        size -= 50

    return render (request,'eye_test/test_eye.html',{'letter_list': letter_list})

# def color_blindness(request):

        