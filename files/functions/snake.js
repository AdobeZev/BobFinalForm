/* Scripted by Adobe Zev */

/* Requires */

/* Discord Requires */

let Discord = require(`discord.js`);
let {Client, Intents} = require(`discord.js`);
let client = new Client({ws: {intents: Intents.all}});

/* Functions */

function SnakeTopFunction(Width)
{

	let BorderString = "";

	for (i = 0; i < Width; i++)
	{

		BorderString += "⬜ ";

	}

	return BorderString;

}

function SnakeSideFunction(Width, Height, SnakeVector, FoodItem)
{

	let BorderString = "";

	for (i = 0; i < Height; i++)
	{

		BorderString += "⬜ ";

		for(v = 0; v < Width - 2; v++)
		{

			let IsSnake = false;
			let IsFirst = false;

			for (b = 0; b < SnakeVector.length; b++)
			{

				if (SnakeVector[b].GetX == v && SnakeVector[b].GetY == i)
				{

					IsSnake = true;
					if (b == 0)
					{
						IsFirst = true;
					}

				}

			}

			if (IsSnake)
			{

				if (IsFirst)
				{

					BorderString += "🐍 ";
				
				}
				else
				{

					BorderString += "🟩 ";

				}

			}
			else
			{

				if (FoodItem.GetX == v && FoodItem.GetY == i)
				{

					BorderString += "🍎 ";

				}
				else
				{

					BorderString += "  ";

				}

			}

		}

		BorderString += "⬜\n";

	}

	return BorderString;

}

function SnakeMoveFunction(Direction, FullSnakeClassItem, Food)
{

	let NewX = 0;
	let NewY = 0;

	switch(Direction)
	{

		case 1:

			NewX = 1;

		break;

		case -1:

			NewX = -1;

		break;

		case 2:

			NewY = -1;

		break;

		case -2:

			NewY = 1;

		break;

	}

	let SnakeNewX = FullSnakeClassItem.GetSnakeVector[0].GetX + NewX;
	let SnakeNewY = FullSnakeClassItem.GetSnakeVector[0].Gety + NewY;

	FullSnakeClassItem.UpdateSnake(SnakeNewX, SnakeNewY, FullSnakeClassItem, Food);

}

function SnakeDirectionFunction(Direction, FullSnakeClassItem)
{

	if (Direction >= -2 || Direction <= 2)
	{

		switch(Direction)
		{

			case 1: /* Right */

				if (FullSnakeClassItem.GetSnakeDirection != -1)
				{

					FullSnakeClassItem.ChangeDirection(Direction);

				}

			break;

			case -1: /* Left */

				if (FullSnakeClassItem.GetSnakeDirection != 1)
				{

					FullSnakeClassItem.ChangeDirection(Direction);

				}

			break;

			case 2: /* Up */

				if (FullSnakeClassItem.GetSnakeDirection != -2)
				{

					FullSnakeClassItem.ChangeDirection(Direction);

				}

			break;

			case -2: /* Down */

				if (FullSnakeClassItem.GetSnakeDirection != 2)
				{

					FullSnakeClassItem.ChangeDirection(Direction);

				}

			break;


		}
	}

}

/* Classes */

class SnakeClass
{

	get GetX()
	{
		return this.X;
	}

	get GetY()
	{
		return this.Y;
	}

	constructor(X, Y)
	{
		this.X = X;
		this.Y = Y;
	}

}

class FullSnakeClass
{

	get GetSnakeVector()
	{

		return this.SnakeVector;

	}

	get GetSnakeDirection()
	{

		return this.SnakeDirection;

	}

	ChangeDirection(Direction)
	{

		if(Direction >= -2 || Direction <= 2)
		{

			this.SnakeDirection = Direction;

		}

	}

	UpdateSnake(NewX, NewY, FullSnakeClassItem, Food)
	{

		if (Food)
		{

			let NewSnakePos = new SnakeClass(NewX, NewY);

			FullSnakeClassItem.GetSnakeVector.push(NewSnakePos);

		}
		else
		{

			let NewSnakePos = new SnakeClass(NewX, NewY);

			FullSnakeClassItem.GetSnakeVector.push(NewSnakePos);
			FullSnakeClassItem.GetSnakeVector.pop();

		}

	}

	constructor(SnakeVector, SnakeDirection)
	{

		this.SnakeVector = SnakeVector;
		this.SnakeDirection = SnakeDirection;

	}

}

class FoodClass
{

	get GetX()
	{
		return this.X;
	}

	get GetY()
	{
		return this.Y;
	}

	constructor(X, Y)
	{

		this.X = X;
		this.Y = Y;

	}

}

/* Exports */

module.exports = 
{
	SnakeTop: function(Width)
	{

		return SnakeTopFunction(Width);

	},

	SnakeSide: function(Width, Height)
	{

		let SnakeHead = new SnakeClass(6,1);
		let SnakeBody = new SnakeClass(5,1);
		let SnakeList = [SnakeHead, SnakeBody];

		let FoodItem = new FoodClass(6,6);

		return SnakeSideFunction(Width, Height, SnakeList, FoodItem);

	}
};