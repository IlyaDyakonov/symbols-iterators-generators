const char1 = {
    name: 'Лучник1',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
}

const char2 = {
    name: 'Лучник2',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
}

const char3 = {
    name: 'Лучник3',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
}


class Team {
    constructor() {
        this.characters = [];
    }

    addTeam (char) {
        this.characters.push(char);
    }

    [Symbol.iterator]() {
        let index = 0;
        const character = this.characters;
        return {
            next() {
                if (index < character.length) {
                    return { 
                        value: character[index++],
                        done: false 
                    };
                } else {
                    return { 
                        done: true
                    }
                };
            }
        }
    }
}

const teams = new Team();
teams.addTeam(char1);
teams.addTeam(char2);
teams.addTeam(char3);

for (let player of teams) {
    console.log(player.name)
}
