//Tutorial: https://www.youtube.com/watch?v=R1S_NhKkvGA&t=386s
const textElement = document.getElementById('text');
const optionButtonsElement = document.getElementById('optionButtons');

let state = {}

function startGame() {
    state = {};
    showTextNode(1) //Show the first text when starting game
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex); //Current text nod that you want to show
    textElement.innerText = textNode.text; //Show text
    while (optionButtonsElement.firstChild) { //Remove options
        optionButtonsElement.removeChild(optionButtonsElement.firstChild);
    }

    textNode.options.forEach(option => { //Add options that are needed
        if (showOption(option)) { //Check if you can show the options (options shown based on state)
            const button = document.createElement('button'); //Creating button
            button.innerText = option.text; //Set text
            button.classList.add('btn'); //Make sure it's styled properly
            button.addEventListener('click', () => selectOption(option)); //Looks for mouse click event
            optionButtonsElement.appendChild(button);
        }
    })
}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state); //Show options
}

function selectOption(option) {
    const nextTextNodeId = option.nextText;
    if (nextTextNodeId <= 0) { //Restarting game
        return startGame();
    }
    state = Object.assign(state, option.setState); //Take state we have currently and add everything from option.setState to it and override anything that's already there
    showTextNode(nextTextNodeId);
}

//All text nodes
const textNodes = [{
        id: 1,
        text: 'You are walking on a trail in a forest. It starts to get dark and stormy and you find a large cabin.',
        options: [{
                text: 'Take shelter in the cabin',
                setState: { takingShelter: true },
                nextText: 2
            },
            {
                text: 'Keep walking up the trail',
                setState: { stillOnTrail: true },
                nextText: 9
            }
        ]
    },
    {
        id: 2, //REQUIRES: takingShelter
        text: 'You knock and hear no answer aside from an empty echo and the sound of rain. You try the handle and the door opens. You walk in. Tables and furniture covered by cloth. The place seems to be abandoned.',
        options: [{
                text: 'Explore',
                requiredState: (currentState) => currentState.takingShelter,
                setState: { takingShelter: false, exploreCabin: true },
                nextText: 3
            },
            {
                text: 'Stay where you are and wait',
                requiredState: (currentState) => currentState.takingShelter,
                nextText: 4
            }
        ]
    },
    {
        id: 3, //REQUIRES: exploreCabin
        text: 'You never knew such a place existed, no one in town talked about it. As you walked further into the building. A strange noise comes from above, you hesitate but remember that this is an old place, it must be an animal or something. You forget about it as your eyes fall on the grand staircase. "What a massive place," you think to yourself.',
        options: [{
                text: 'Head back',
                requiredState: (currentState) => currentState.exploreCabin,
                nextText: 5
            },
            {
                text: 'Go up the stairs',
                requiredState: (currentState) => currentState.exploreCabin,
                nextText: 6
            },
        ]
    },
    {
        id: 4,
        text: 'You decide to stay put and wait. Even with the storm outside, the stillness was almost unbearable. Each second felt like an hour. But, you are patient. The storm finally passes, and you start to walk back down the trail. Leaving the cabin behind as it watches you walk away.',
        options: [{
            text: 'The End',
            nextText: -1
        }]
    },
    {
        id: 5,
        text: 'You decide to head back out. Looking around, you start to panic a bit. You were too busy exploring and seem to have forgotten how to get back to the main doors. You calm yourself, and start to retrace your steps. A few minutes passed. An hour. Then two. You find yourself back at the same spot...',
        options: [{
            text: 'The End',
            nextText: -1
        }]
    },
    {
        id: 6,
        text: 'Getting to the top, you see that the stairs lead to a long hallway with multiple doors. The storm continues.',
        options: [{
            text: 'Go down the hallway',
            nextText: 7
        }]
    },
    {
        id: 7,
        text: 'Something draws you down the hallway. You walk slow, looking at each door that you pass.',
        options: [{
            text: '...',
            nextText: 8
        }]
    },
    {
        id: 8,
        text: 'Strange. You start to feel dizzy. With each door that passes, your vision gets more and more cloudy. It feels as if your mind is withdrawing from you. Slowing seeping out as you continue down the dark hall. Until there was nothing at all..',
        options: [{
            text: 'The End',
            nextText: -1
        }]
    },
    {
        id: 9, //REQUIRES: stillOnTrail
        text: 'You decide to keep walking up the trail. It gets darker, and now you are soaked. You hear howls in the distance.',
        options: [{
                text: 'Turn back',
                requiredState: (currentState) => currentState.stillOnTrail,
                setState: { stillOnTrail: false, turnBack: true },
                nextText: 10
            },
            {
                text: 'Keep going',
                requiredState: (currentState) => currentState.stillOnTrail,
                nextText: 11
            }
        ]
    },
    {
        id: 10, //REQUIRES: turnBack
        text: 'It is getting too dangerous to be outside. You decide to turn back and take shelter at the cabin you found. As you walk up to the cabin doors, you knock and hear no answer aside from an empty echo and the sound of rain. You try the handle and the door opens. You walk in. Tables and furniture covered by cloth. The place seems to be abandoned.',
        options: [{
                text: 'Find something to warm you up.',
                requiredState: (currentState) => currentState.turnBack,
                setState: { turnBack: false, somethingWarm: true },
                nextText: 12
            },
            {
                text: 'Stay where you are and wait',
                requiredState: (currentState) => currentState.turnBack,
                nextText: 13
            }
        ]
    },
    {
        id: 11,
        text: 'You are already soaked, you might as well keep going. As you keep walking the storm gets stronger, the night darker. You can not see very well in front of you. You slip...',
        options: [{
            text: 'The End',
            nextText: -1
        }]
    },
    {
        id: 12, //REQUIRES: somethingWarm
        text: 'Shivering you walk further into the building, leaving behind a trail of wet shoeprints and mud. You see the kitchen and find nothing in the cabinets. You keep walking, find nothing, then walk again, and nothing. You finally end up in an empty hallway. Eventually the rain stops.',
        options: [{
                text: 'Head back out',
                requiredState: (currentState) => currentState.somethingWarm,
                nextText: 14
            },
            {
                text: 'Stay a bit longer',
                requiredState: (currentState) => currentState.somethingWarm,
                nextText: 15
            }
        ]
    },
    {
        id: 13,
        text: 'You decide to stay put and wait. You are cold, but you know that the storm will pass eventually. The stillness in the cabin was almost unbearable. Each second felt like an hour. But, you are patient. The storm finally passes, and you start to walk back down the trail. Leaving the cabin behind as it watches you walk away.',
        options: [{
            text: 'The End',
            nextText: -1
        }]
    },
    {
        id: 14,
        text: 'You decide to head back out. Looking around, you start to panic a little. You were too busy in your search that you seem to have forgotten how to get back to the main doors. You look down and see your shoeprints. A sigh of relief. You start following your shoeprints and a few minutes later, you find yourself at the main doors. As you leave the cabin, you felt a pair of eyes watching you. You turn around and see a glimpse of a shadow pass the upper window. You were lucky.',
        options: [{
            text: 'The End',
            nextText: -1
        }]
    },
    {
        id: 15,
        text: 'Something about the cabin makes you want to stay. You start to wander a bit more. As you wandered it felt as if a pair of hands were guiding you. Strange. You start to get dizzy. With each room that you pass, your vision gets more and more cloudy. It feels as if your mind is withdrawing from you. Slowing seeping out as you continued wandering. Until there was nothing at all...',
        options: [{
            text: 'The End',
            nextText: -1
        }]
    }
]

startGame();