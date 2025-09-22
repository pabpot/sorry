import turtle 
from turtle import *




screen = turtle.Screen()
screen.bgcolor('black')
screen.title('my short angel')


player_one = turtle.Turtle()


player_one.hideturtle()

player_one.color('red')
player_one.fillcolor('red')
player_one.shape('triangle')
player_one.speed(1)

player_one.begin_fill()

player_one.left(140)
player_one.forward(180)
player_one.circle(-90, 200)
player_one.setheading(60)
player_one.circle(-90, 200)
player_one.forward(180)

player_one.end_fill()

























































