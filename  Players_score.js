const players = [
    {
    "id": 1,
    "name": "Aleksandr Ivanov",
    "scorePoints": 8000.6
    },
    {
    "id": 2,
    "name": "Sarah",
    "scorePoints": 650
    },
    {
    "id": 3,
    "name": "Michael-David",
    "scorePoints": 7200
    },
    {
    "id": 4,
    "name": null,
    "scorePoints": 5800
    },
    {
    "id": 5,
    "name": " ",
    "scorePoints": 7999.99
    }
    ];
    let scoreArray = [];

    for (let player in players) {
        scoreArray.push(players[player].scorePoints);
    };
      const maxScore = Math.max(...scoreArray);
      const maxPlayer = players.find(player => player.scorePoints === maxScore);
      console.log(`Игрок с максимальным количеством очков: ${maxPlayer.name} (${maxPlayer.scorePoints} очков)`);