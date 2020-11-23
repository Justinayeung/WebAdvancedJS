let data = {
    "works": [{
        "title": "Amaranthus",
        "programs": "Mobile game made with Unity and Maya",
        "summary": "In a dying world, a god resides weakened and unable to save it. Explore a world, who's air is poisoned by its fauna, and restore Amaranthus to the once beautiful state it knew. Amaranthus is a short and calming mobile game where you can experience the setting of the world."
    }, {
        "title": "Mystic Pond",
        "programs": "Digitally painted using Photoshop",
        "summary": "Serene but mysterious."
    }, {
        "title": "Island of Hop Flowers",
        "programs": "Models made in Maya, world made in Unity",
        "summary": "A worldbuilding project"
    }, {
        "title": "A Face That Isn't yours",
        "programs": "Unity program called ink - text based game",
        "summary": "It's present day New York City, everything seems normal, but as mysterious deaths begin to occur it brings chaos into the world, leaving people confused and unsure at what to believe in."
    }, {
        "title": "Paradox",
        "programs": "Game made with Unity, Maya, and Photoshop",
        "summary": "Paradox is based on optical illusions, paranoia and anxiety. Discover a peculiar world full of obscure visions and unusual creatures. Inspired by the mesmerizing art of M.C. Escher and the black and white graphics of “KIDS,” by Playables, Paradox combines elements of mind-bending visuals and aspects of anxiety. Paradox conveys the idea that although there are elements that induce anxiety, exploration can still be captivating."
    }]
}

$("#Text1").append('<h1 class="title">' + data.works[0].title + '</h1><h2 class="programs">' + data.works[0].programs + '</h2><div class="summary">' + data.works[0].summary + '</div>');
$("#Text2").append('<h1 class="title">' + data.works[1].title + '</h1><h2 class="programs">' + data.works[1].programs + '</h2><div class="summary">' + data.works[1].summary + '</div>');
$("#Text3").append('<h1 class="title">' + data.works[2].title + '</h1><h2 class="programs">' + data.works[2].programs + '</h2><div class="summary">' + data.works[2].summary + '</div>');
$("#Text4").append('<h1 class="title">' + data.works[3].title + '</h1><h2 class="programs">' + data.works[3].programs + '</h2><div class="summary">' + data.works[3].summary + '</div>');
$("#Text5").append('<h1 class="title">' + data.works[4].title + '</h1><h2 class="programs">' + data.works[4].programs + '</h2><div class="summary">' + data.works[4].summary + '</div>');

// Itch.attachBuyButton(document.getElementById("download-button""), {
//     user: "JustinaY",
//     game: "Paradox"
// });