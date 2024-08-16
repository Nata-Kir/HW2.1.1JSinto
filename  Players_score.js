const players = [
    {
    "id": 1,
    "name": "Ivan",
    "scorePoints": 4500
    },
    {
    "id": 2,
    "name": "Petr",
    "scorePoints": 3600
    },
    {
    "id": 3,
    "name": "Vadim",
    "scorePoints": 3433
    },
    {
    "id": 4,
    "name": "Olga",
    "scorePoints": 2356
    },
    ];
    let scoreArray = [];

    for (let player in players) {
        scoreArray.push(players[player].scorePoints);
    };
      const maxScore = Math.max(...scoreArray);
      const maxPlayer = players.find(player => player.scorePoints === maxScore);
      console.log(`Игрок с максимальным количеством очков: ${maxPlayer.name} (${maxPlayer.scorePoints} очков)`);