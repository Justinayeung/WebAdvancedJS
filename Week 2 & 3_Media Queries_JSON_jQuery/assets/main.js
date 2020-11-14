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
        "title": "Uprooted",
        "programs": "A title sequence made with After Effects and Illustrator",
        "summary": "This is a short title sequence of the book Uprooted by Naomi Novik."
    }]
}

$("#Text1").append('<h1 class="title">' + data.works[0].title + '</h1><h2 class="programs">' + data.works[0].programs + '</h2><div class="summary">' + data.works[0].summary + '</div>');
$("#Text2").append('<h1 class="title">' + data.works[1].title + '</h1><h2 class="programs">' + data.works[1].programs + '</h2><div class="summary">' + data.works[1].summary + '</div>');
$("#Text3").append('<h1 class="title">' + data.works[2].title + '</h1><h2 class="programs">' + data.works[2].programs + '</h2><div class="summary">' + data.works[2].summary + '</div>');