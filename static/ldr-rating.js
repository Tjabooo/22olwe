const songs = [
    {
        name: "13 Beaches",
        album: {
            name: "Lust for Life",
            image: "/static/media/lfl.jpg"
        }
    },
    {
        name: "24",
        album: {
            name: "Honeymoon",
            image: "/static/media/hm.jpg"
        }
    },
    {
        name: "A&W",
        album: {
            name: "Did You Know That Theres a Tunnel Under Ocean Blvd",
            image: "/static/media/dykttatuob.jpg"
        }
    },
    {
        name: "American",
        album: {
            name: "Born to Die: The Paradise Edition",
            image: "/static/media/paradise.jpg"
        }
    },
    {
        name: "Arcadia",
        album: {
            name: "Blue Banisters",
            image: "/static/media/bb.jpg"
        }
    },
    {
        name: "Art Deco",
        album: {
            name: "Honeymoon",
            image: "/static/media/hm.jpg"
        }
    },
    {
        name: "Bartender",
        album: {
            name: "Norman Fucking Rockwell",
            image: "/static/media/nfr.jpg"
        }
    },
    {
        name: "Beautiful",
        album: {
            name: "Blue Banisters",
            image: "/static/media/bb.jpg"
        }
    },
    {
        name: "Beautiful People Beautiful Problems",
        album: {
            name: "Lust for Life",
            image: "/static/media/lfl.jpg"
        }
    },
    {
        name: "Bel Air",
        album: {
            name: "Born to Die: The Paradise Edition",
            image: "/static/media/paradise.jpg"
        }
    },
    {
        name: "Black Bathing Suit",
        album: {
            name: "Blue Banisters",
            image: "/static/media/bb.jpg"
        }
    },
    {
        name: "Black Beauty",
        album: {
            name: "Ultraviolence",
            image: "/static/media/uv.jpg"
        }
    },
    {
        name: "The Blackest Day",
        album: {
            name: "Honeymoon",
            image: "/static/media/hm.jpg"
        }
    },
    {
        name: "Blue Banisters",
        album: {
            name: "Blue Banisters",
            image: "/static/media/bb.jpg"
        }
    },
    {
        name: "Blue Jeans",
        album: {
            name: "Born to Die",
            image: "/static/media/btd.jpg"
        }
    },
    {
        name: "Blue Velvet",
        album: {
            name: "Born to Die: The Paradise Edition",
            image: "/static/media/paradise.jpg"
        }
    },
    {
        name: "Body Electric",
        album: {
            name: "Born to Die: The Paradise Edition",
            image: "/static/media/paradise.jpg"
        }
    },
    {
        name: "Born to Die",
        album: {
            name: "Born to Die",
            image: "/static/media/btd.jpg"
        }
    },
    {
        name: "Breaking Up Slowly",
        album: {
            name: "Chemtrails of the Country Club",
            image: "/static/media/cotcc.jpg"
        }
    },
    {
        name: "Brooklyn Baby",
        album: {
            name: "Ultraviolence",
            image: "/static/media/uv.jpg"
        }
    },
    {
        name: "Buddys Rendezvous",
        album: {
            name: "Chloë and the Next 20th Century",
            image: "/static/media/br.jpg"
        }
    },
    {
        name: "Burning Desire",
        album: {
            name: "Born to Die: The Paradise Edition",
            image: "/static/media/paradise.jpg"
        }
    },
    {
        name: "Burnt Norton (interlude)",
        album: {
            name: "Honeymoon",
            image: "/static/media/hm.jpg"
        }
    },
    {
        name: "California",
        album: {
            name: "Norman Fucking Rockwell",
            image: "/static/media/nfr.jpg"
        }
    },
    {
        name: "Candy Necklace",
        album: {
            name: "Did You Know That Theres a Tunnel Under Ocean Blvd",
            image: "/static/media/dykttatuob.jpg"
        }
    },
    {
        name: "Carmen",
        album: {
            name: "Born to Die",
            image: "/static/media/btd.jpg"
        }
    },
    {
        name: "Chemtrails over the Country Club",
        album: {
            name: "Chemtrails of the Country Club",
            image: "/static/media/cotcc.jpg"
        }
    },
    {
        name: "Cherry",
        album: {
            name: "Lust for Life",
            image: "/static/media/lfl.jpg"
        }
    },
    {
        name: "Cherry Blossom",
        album: {
            name: "Blue Banisters",
            image: "/static/media/bb.jpg"
        }
    },
    {
        name: "Cinnamon Girl",
        album: {
            name: "Norman Fucking Rockwell",
            image: "/static/media/nfr.jpg"
        }
    },
    {
        name: "Coachella - Woodstock in My Mind",
        album: {
            name: "Lust for Life",
            image: "/static/media/lfl.jpg"
        }
    },
    {
        name: "Cola",
        album: {
            name: "Born to Die: The Paradise Edition",
            image: "/static/media/paradise.jpg"
        }
    },
    {
        name: "Cruel World",
        album: {
            name: "Ultraviolence",
            image: "/static/media/uv.jpg"
        }
    },
    {
        name: "Dance Till We Die",
        album: {
            name: "Chemtrails of the Country Club",
            image: "/static/media/cotcc.jpg"
        }
    },
    {
        name: "Dark but Just a Game",
        album: {
            name: "Chemtrails of the Country Club",
            image: "/static/media/cotcc.jpg"
        }
    },
    {
        name: "Dark Paradise",
        album: {
            name: "Born to Die: The Paradise Edition",
            image: "/static/media/paradise.jpg"
        }
    },
    {
        name: "Dealer",
        album: {
            name: "Blue Banisters",
            image: "/static/media/bb.jpg"
        }
    },
    {
        name: "Did you know that theres a tunnel under Ocean Blvd",
        album: {
            name: "Did You Know That Theres a Tunnel Under Ocean Blvd",
            image: "/static/media/dykttatuob.jpg"
        }
    },
    {
        name: "Diet Mountain Dew",
        album: {
            name: "Born to Die",
            image: "/static/media/btd.jpg"
        }
    },
    {
        name: "Doin Time",
        album: {
            name: "Norman Fucking Rockwell",
            image: "/static/media/nfr.jpg"
        }
    },
    {
        name: "Dont Call Me Angel",
        album: {
            name: "Charlie's Angels: Original Motion Picture Soundtrack",
            image: "/static/media/cas.jpg"
        }
    },
    {
        name: "Dont Let Me Be Misunderstood",
        album: {
            name: "Honeymoon",
            image: "/static/media/hm.jpg"
        }
    },
    {
        name: "Every Man Gets His Wish",
        album: {
            name: "Unreleased",
            image: "/static/media/ur.jpg"
        }
    },
    {
        name: "Fingertips",
        album: {
            name: "Did You Know That Theres a Tunnel Under Ocean Blvd",
            image: "/static/media/dykttatuob.jpg"
        }
    },
    {
        name: "Fishtail",
        album: {
            name: "Did You Know That Theres a Tunnel Under Ocean Blvd",
            image: "/static/media/dykttatuob.jpg"
        }
    },
    {
        name: "Florida Kilos",
        album: {
            name: "Ultraviolence",
            image: "/static/media/uv.jpg"
        }
    },
    {
        name: "For Free",
        album: {
            name: "Chemtrails of the Country Club",
            image: "/static/media/cotcc.jpg"
        }
    },
    {
        name: "For K, Pt. 2",
        album: {
            name: "Lana Del Rey A.K.A. Lizzy Grant",
            image: "/static/media/aka.jpg"
        }
    },
    {
        name: "Freak",
        album: {
            name: "Honeymoon",
            image: "/static/media/hm.jpg"
        }
    },
    {
        name: "Fuck It I Love You",
        album: {
            name: "Norman Fucking Rockwell",
            image: "/static/media/nfr.jpg"
        }
    },
    {
        name: "Fucked My Way Up to the Top",
        album: {
            name: "Ultraviolence",
            image: "/static/media/uv.jpg"
        }
    },
    {
        name: "Get Free",
        album: {
            name: "Lust for Life",
            image: "/static/media/lfl.jpg"
        }
    },
    {
        name: "God Bless America - and All the Beautiful Women in It",
        album: {
            name: "Lust for Life",
            image: "/static/media/lfl.jpg"
        }
    },
    {
        name: "God Knows I Tried",
        album: {
            name: "Honeymoon",
            image: "/static/media/hm.jpg"
        }
    },
    {
        name: "Gods & Monsters",
        album: {
            name: "Born to Die: The Paradise Edition",
            image: "/static/media/paradise.jpg"
        }
    },
    {
        name: "Grandfather Please Stand on the Shoulders of My Father While Hes Deep-Sea Fishing",
        album: {
            name: "Did You Know That Theres a Tunnel Under Ocean Blvd",
            image: "/static/media/dykttatuob.jpg"
        }
    },
    {
        name: "The Grants",
        album: {
            name: "Did You Know That Theres a Tunnel Under Ocean Blvd",
            image: "/static/media/dykttatuob.jpg"
        }
    },
    {
        name: "The Greatest",
        album: {
            name: "Norman Fucking Rockwell",
            image: "/static/media/nfr.jpg"
        }
    },
    {
        name: "Groupie Love",
        album: {
            name: "Lust for Life",
            image: "/static/media/lfl.jpg"
        }
    },
    {
        name: "Guns and Roses",
        album: {
            name: "Ultraviolence",
            image: "/static/media/uv.jpg"
        }
    },
    {
        name: "Happiness is a Butterfly",
        album: {
            name: "Norman Fucking Rockwell",
            image: "/static/media/nfr.jpg"
        }
    },
    {
        name: "Heroin",
        album: {
            name: "Lust for Life",
            image: "/static/media/lfl.jpg"
        }
    },
    {
        name: "High by the Beach",
        album: {
            name: "Honeymoon",
            image: "/static/media/hm.jpg"
        }
    },
    {
        name: "Hope Is a Dangerous Thing for a Woman like Me to Have - but I Have It",
        album: {
            name: "Norman Fucking Rockwell",
            image: "/static/media/nfr.jpg"
        }
    },
    {
        name: "How to Disappear",
        album: {
            name: "Norman Fucking Rockwell",
            image: "/static/media/nfr.jpg"
        }
    },
    {
        name: "If You Lie Down with Me",
        album: {
            name: "Blue Banisters",
            image: "/static/media/bb.jpg"
        }
    },
    {
        name: "In My Feelings",
        album: {
            name: "Lust for Life",
            image: "/static/media/lfl.jpg"
        }
    },
    {
        name: "Interlude - The Trio",
        album: {
            name: "Blue Banisters",
            image: "/static/media/bb.jpg"
        }
    },
    {
        name: "Jealous Girl",
        album: {
            name: "Unreleased",
            image: "/static/media/ur.jpg"
        }
    },
    {
        name: "Jon Batiste Interlude",
        album: {
            name: "Did You Know That Theres a Tunnel Under Ocean Blvd",
            image: "/static/media/dykttatuob.jpg"
        }
    },
    {
        name: "Judah Smith Interlude",
        album: {
            name: "Did You Know That Theres a Tunnel Under Ocean Blvd",
            image: "/static/media/dykttatuob.jpg"
        }
    },
    {
        name: "Kill Kill",
        album: {
            name: "Lana Del Rey A.K.A. Lizzy Grant",
            image: "/static/media/aka.jpg"
        }
    },
    {
        name: "Kintsugi",
        album: {
            name: "Did You Know That Theres a Tunnel Under Ocean Blvd",
            image: "/static/media/dykttatuob.jpg"
        }
    },
    {
        name: "Let Me Love You like a Woman",
        album: {
            name: "Chemtrails of the Country Club",
            image: "/static/media/cotcc.jpg"
        }
    },
    {
        name: "Let the Light In",
        album: {
            name: "Did You Know That Theres a Tunnel Under Ocean Blvd",
            image: "/static/media/dykttatuob.jpg"
        }
    },
    {
        name: "Living Legend",
        album: {
            name: "Blue Banisters",
            image: "/static/media/bb.jpg"
        }
    },
    {
        name: "Lolita",
        album: {
            name: "Born to Die: The Paradise Edition",
            image: "/static/media/paradise.jpg"
        }
    },
    {
        name: "Looking for America",
        album: {
            name: "Looking For America",
            image: "/static/media/lfa.jpg"
        }
    },
    {
        name: "Love",
        album: {
            name: "Lust for Life",
            image: "/static/media/lfl.jpg"
        }
    },
    {
        name: "Love Song",
        album: {
            name: "Norman Fucking Rockwell",
            image: "/static/media/nfr.jpg"
        }
    },
    {
        name: "Lucky Ones",
        album: {
            name: "Born to Die",
            image: "/static/media/btd.jpg"
        }
    },
    {
        name: "Lust for Life",
        album: {
            name: "Lust for Life",
            image: "/static/media/lfl.jpg"
        }
    },
    {
        name: "Margaret",
        album: {
            name: "Did You Know That Theres a Tunnel Under Ocean Blvd",
            image: "/static/media/dykttatuob.jpg"
        }
    },
    {
        name: "Mariners Apartment Complex",
        album: {
            name: "Norman Fucking Rockwell",
            image: "/static/media/nfr.jpg"
        }
    },
    {
        name: "Million Dollar Man",
        album: {
            name: "Born to Die",
            image: "/static/media/btd.jpg"
        }
    },
    {
        name: "Money Power Glory",
        album: {
            name: "Ultraviolence",
            image: "/static/media/uv.jpg"
        }
    },
    {
        name: "Music to Watch Boys To",
        album: {
            name: "Honeymoon",
            image: "/static/media/hm.jpg"
        }
    },
    {
        name: "National Anthem",
        album: {
            name: "Born to Die",
            image: "/static/media/btd.jpg"
        }
    },
    {
        name: "Nectar of the Gods",
        album: {
            name: "Blue Banisters",
            image: "/static/media/bb.jpg"
        }
    },
    {
        name: "The Next Best American Record",
        album: {
            name: "Norman Fucking Rockwell",
            image: "/static/media/nfr.jpg"
        }
    },
    {
        name: "Norman Fucking Rockwell",
        album: {
            name: "Norman Fucking Rockwell",
            image: "/static/media/nfr.jpg"
        }
    },
    {
        name: "Not All Who Wander Are Lost",
        album: {
            name: "Chemtrails of the Country Club",
            image: "/static/media/cotcc.jpg"
        }
    },
    {
        name: "Off to the Races",
        album: {
            name: "Born to Die",
            image: "/static/media/btd.jpg"
        }
    },
    {
        name: "Old Money",
        album: {
            name: "Ultraviolence",
            image: "/static/media/uv.jpg"
        }
    },
    {
        name: "Once Upon a Dream",
        album: {
            name: "Maleficent",
            image: "/static/media/maleficent.jpg"
        }
    },
    {
        name: "The Other Woman",
        album: {
            name: "Ultraviolence",
            image: "/static/media/uv.jpg"
        }
    },
    {
        name: "Paris, Texas",
        album: {
            name: "Did You Know That Theres a Tunnel Under Ocean Blvd",
            image: "/static/media/dykttatuob.jpg"
        }
    },
    {
        name: "Peppers",
        album: {
            name: "Did You Know That Theres a Tunnel Under Ocean Blvd",
            image: "/static/media/dykttatuob.jpg"
        }
    },
    {
        name: "Pretty When You Cry",
        album: {
            name: "Ultraviolence",
            image: "/static/media/uv.jpg"
        }
    },
    {
        name: "Prisoner",
        album: {
            name: "Blue BanistersTM",
            image: "/static/media/bbtm.jpg"
        }
    },
    {
        name: "Put Me in a Movie",
        album: {
            name: "Lana Del Rey A.K.A. Lizzy Grant",
            image: "/static/media/aka.jpg"
        }
    },
    {
        name: "Queen of the Gas Station",
        album: {
            name: "Lana Del Rey A.K.A. Lizzy Grant",
            image: "/static/media/aka.jpg"
        }
    },
    {
        name: "Queen of Disaster",
        album: {
            name: "Unreleased",
            image: "/static/media/ur.jpg"
        }
    },
    {
        name: "Radio",
        album: {
            name: "Born to Die",
            image: "/static/media/btd.jpg"
        }
    },
    {
        name: "Religion",
        album: {
            name: "Honeymoon",
            image: "/static/media/hm.jpg"
        }
    },
    {
        name: "Ride",
        album: {
            name: "Born to Die: The Paradise Edition",
            image: "/static/media/paradise.jpg"
        }
    },
    {
        name: "Sad Girl",
        album: {
            name: "Ultraviolence",
            image: "/static/media/uv.jpg"
        }
    },
    {
        name: "Salvatore",
        album: {
            name: "Honeymoon",
            image: "/static/media/hm.jpg"
        }
    },
    {
        name: "Say Yes to Heaven",
        album: {
            name: "Say Yes to Heaven",
            image: "/static/media/syth.jpg"
        }
    },
    {
        name: "Season of the Witch",
        album: {
            name: "Scary Stories to Tell in the Dark",
            image: "/static/media/sttitd.jpg"
        }
    },
    {
        name: "Serial Killer",
        album: {
            name: "Unreleased",
            image: "/static/media/ur.jpg"
        }
    },
    {
        name: "Shades of Cool",
        album: {
            name: "Ultraviolence",
            image: "/static/media/uv.jpg"
        }
    },
    {
        name: "Smarty",
        album: {
            name: "Lana Del Rey A.K.A. Lizzy Grant",
            image: "/static/media/aka.jpg"
        }
    },
    {
        name: "Stargirl Interlude",
        album: {
            name: "Starboy",
            image: "/static/media/starboy.jpg"
        }
    },
    {
        name: "Summer Bummer",
        album: {
            name: "Lust for Life",
            image: "/static/media/lfl.jpg"
        }
    },
    {
        name: "Summertime Sadness",
        album: {
            name: "Born to Die",
            image: "/static/media/btd.jpg"
        }
    },
    {
        name: "Swan Song",
        album: {
            name: "Honeymoon",
            image: "/static/media/hm.jpg"
        }
    },
    {
        name: "Sweet",
        album: {
            name: "Did You Know That Theres a Tunnel Under Ocean Blvd",
            image: "/static/media/dykttatuob.jpg"
        }
    },
    {
        name: "Sweet Carolina",
        album: {
            name: "Blue Banisters",
            image: "/static/media/bb.jpg"
        }
    },
    {
        name: "Taco Truck x VB",
        album: {
            name: "Did You Know That Theres a Tunnel Under Ocean Blvd",
            image: "/static/media/dykttatuob.jpg"
        }
    },
    {
        name: "Terrence Loves You",
        album: {
            name: "Honeymoon",
            image: "/static/media/hm.jpg"
        }
    },
    {
        name: "Text Book",
        album: {
            name: "Blue Banisters",
            image: "/static/media/bb.jpg"
        }
    },
    {
        name: "This Is What Makes Us Girls",
        album: {
            name: "Born to Die",
            image: "/static/media/btd.jpg"
        }
    },
    {
        name: "Thunder",
        album: {
            name: "Blue Banisters",
            image: "/static/media/bb.jpg"
        }
    },
    {
        name: "Tomorrow Never Came",
        album: {
            name: "Lust for Life",
            image: "/static/media/lfl.jpg"
        }
    },
    {
        name: "Trash Magic",
        album: {
            name: "Unreleased",
            image: "/static/media/ur.jpg"
        }
    },
    {
        name: "Tulsa Jesus Freak",
        album: {
            name: "Chemtrails of the Country Club",
            image: "/static/media/cotcc.jpg"
        }
    },
    {
        name: "Ultraviolence",
        album: {
            name: "Ultraviolence",
            image: "/static/media/uv.jpg"
        }
    },
    {
        name: "Venice Bitch",
        album: {
            name: "Norman Fucking Rockwell",
            image: "/static/media/nfr.jpg"
        }
    },
    {
        name: "Violets for Roses",
        album: {
            name: "Blue Banisters",
            image: "/static/media/bb.jpg"
        }
    },
    {
        name: "West Coast",
        album: {
            name: "Ultraviolence",
            image: "/static/media/uv.jpg"
        }
    },
    {
        name: "When the World Was at War We Kept Dancing",
        album: {
            name: "Lust for Life",
            image: "/static/media/lfl.jpg"
        }
    },
    {
        name: "White Mustang",
        album: {
            name: "Lust for Life",
            image: "/static/media/lfl.jpg"
        }
    },
    {
        name: "White Dress",
        album: {
            name: "Chemtrails of the Country Club",
            image: "/static/media/cotcc.jpg"
        }
    },
    {
        name: "Wild at Heart",
        album: {
            name: "Chemtrails of the Country Club",
            image: "/static/media/cotcc.jpg"
        }
    },
    {
        name: "Wildflower Wildfire",
        album: {
            name: "Blue Banisters",
            image: "/static/media/bb.jpg"
        }
    },
    {
        name: "Without You",
        album: {
            name: "Born to Die",
            image: "/static/media/btd.jpg"
        }
    },
    {
        name: "Yayo",
        album: {
            name: "Lana Del Rey A.K.A. Lizzy Grant",
            image: "/static/media/aka.jpg"
        }
    },
    {
        name: "Young and Beautiful",
        album: {
            name: "The Great Gatsby: Music from Baz Luhrmanns Film",
            image: "/static/media/tgg2.jpg"
        }
    },
];

const eloRatings = {};

songs.forEach((song) => {
    eloRatings[song.name] = 1000;
});

const songRanking = [];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleArray(songs);

function createRandomMatches() {
    const matches = [];
    for (let i = 0; i < songs.length - 1; i++) {
        for (let j = i + 1; j < songs.length; j++) {
            matches.push({ song1: songs[i], song2: songs[j] });
        }
    }
    return matches;
}

const matches = createRandomMatches();
let currentMatchIndex = 0;

function showNextMatch() {
    if (currentMatchIndex < matches.length) {
        const match = matches[currentMatchIndex];
        const song1 = match.song1;
        const song2 = match.song2;

        const songContainer = document.getElementById("song-container");
        songContainer.innerHTML = `
            <p>Which song do you like more?</p>
            <button class="song-button" onclick="chooseSong('${song1.name}', '${song2.name}')">
                <p>${song1.name}</p>
                <img src="${song1.album.image}" alt="${song1.name}" width="400" height="400">
            </button>
            <button class="song-button" onclick="chooseSong('${song2.name}', '${song1.name}')">
                <p>${song2.name}</p>    
                <img src="${song2.album.image}" alt="${song2.name}" width="400" height="400">
            </button>
        `;
    } else {
        calculateRankedSongs();
    }
}

function chooseSong(winnerName, loserName) {
    const K = 32;

    const winnerRating = eloRatings[winnerName];
    const loserRating = eloRatings[loserName];

    const expectedWinnerScore = 1 / (1 + 10 ** ((loserRating - winnerRating) / 400));
    const expectedLoserScore = 1 - expectedWinnerScore;

    const winnerNewRating = winnerRating + K * (1 - expectedWinnerScore);
    const loserNewRating = loserRating + K * (0 - expectedLoserScore);

    eloRatings[winnerName] = winnerNewRating;
    eloRatings[loserName] = loserNewRating;

    currentMatchIndex++;

    showNextMatch();
}

function calculateRankedSongs() {
    const rankedSongsList = songs.sort((a, b) => eloRatings[b.name] - eloRatings[a.name]);

    const resultContainer = document.getElementById("result-container");
    resultContainer.innerHTML = `
        <h2>Your Ranked Songs:</h2>
        <table class="ldr-center">
            <thead>
                <tr>
                    <th>Ranking</th>
                    <th>Song</th>
                    <th>Album</th>
                    <th>Elo</th>
                </tr>
            </thead>
            <tbody>
                ${rankedSongsList.map((song, index) => `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${song.name}</td>
                        <td>${song.album.name}</td>
                        <td>${Math.round(eloRatings[song.name])} elo</td>
                    </tr>
                `).join("")}
            </tbody>
        </table>
    `;
}

showNextMatch();