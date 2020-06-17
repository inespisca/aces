Notice: right now the page doesn't look pretty because I've inserted features that are meant for different pages in the same page. I'm doing functionality first and looks second. Functionality is doing well, which means I'll now work in making this look a bit better. I hope you'll enjoy how it'll look in the end.

## Aces

A React only app based in an app shown in the Japanese anime *Future Card Buddyfight Ace*, where Buddyfight (a card game) players can select who to challenge next for a fight. Below is how the app looks like in the animation.

The Buddyfighter card list (Info listed: Name of the fighter, World used and a photo of the player):
![alt text](https://i.imgur.com/Eg55ThA.png "")

The Buddyfighter profile without clicking anywhere - it states the name of the fighter, their points in the competition and photo of the fighter):
![alt text](https://i.imgur.com/jAD3eau.png "")

The Buddyfighter profile after clicking to challenge adds a text saying "-Decision-" over the picture of the challenged fighter:
![alt text](https://i.imgur.com/JbktIj8.png "")


Despite being a project still in progress, you can see how it is going so far in [its deployment page](https://buddyaces.netlify.app/)

Technologies used:
* React
* CSS

Features:
* **Challenge button** - Works exactly like carts in market websites, however this time it counts the number of buddyfighters you challenge. It works! Feel free to play with the button as much as you'd like. After clicking to challenge a buddyfighter, said button will change and say to remove the challenge. The counter on top right will also change its number accordingly.
* **Fake login** - I've connected the dropdown where the person selects the character to login as to the fake API and the info selected in that dropdown will be carried out throughout the whole app through props.
* **Can't challenge yourself** - Name says it all. As the list of the characters to login and the list of the characters to challenge is exactly the same, if this wasn't implemented, we'd have a person picking to be Ranma and selecting to challenge Ranma, which wouldn't make much sense. That way, this feature hides the challenge button if you are logged in as that character and it returns a message saying that you can't challenge yourself. In the specific case of Yuga Mikado, which appears three times, the message will appear in all three Yuga Mikados instead of just one.
