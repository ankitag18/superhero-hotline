
const { SUPERHEROES_LIST, TELEPHONE_KEYS_DATA } = require('./constants');

module.exports = {
    getRequestedSuperheroName: (code) => {

        let matchedSuperheroes = SUPERHEROES_LIST;
        let counter = 0;

        while (matchedSuperheroes.length) {

            if (code.length <= counter) {
                break;
            }

            const { keywords = [] } = TELEPHONE_KEYS_DATA.find(({ number }) => number == code[counter]);

            matchedSuperheroes = matchedSuperheroes.filter((hero) => {
                if (keywords.some((key) => key === hero[counter]) && hero.length === code.length) {
                    return true;
                }
                return false;
            });

            counter++;
        }

        const superhero = matchedSuperheroes.length ? matchedSuperheroes[0] : '';

        return superhero;
    }
}