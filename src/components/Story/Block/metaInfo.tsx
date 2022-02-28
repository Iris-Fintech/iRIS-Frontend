import asteroid from '../../../assets/asteroid.svg';
import apocalypse from '../../../assets/apocalypse.svg';
import chaos from '../../../assets/chaos.svg';
import arrival from '../../../assets/arrival.svg';
import hope from '../../../assets/hope.svg';

export interface Config {
    id: string;
    title: string;
    subtitle: string;
    content: string;
    icon: React.ReactNode;
}

const config: Config[] = [
    {
        id: '01',
        title: 'Mar. 31, 2022',
        subtitle: 'Prologue - Imminent Thread',
        content:
            'Today was supposed to be a great day until a group of intelligent hedgehogs spotted a Polonium asteroid flying straight toward the Earth. After a series of calculations, the hedgehogs concluded that the asteroid would hit the ground and destroyed the planet in about two weeks. After hearing the news, the world has gone crazy, protests and wars were seen everywhere, and no one was willing to just listen. The worried hedgehogs tried to convince everyone to calm down but in vain. After the battle that raged in their head, the hedgehogs set their minds and decided to leave their beloved hometown.',
        icon: asteroid,
    },
    {
        id: '02',
        title: 'Apr. 17, 2022',
        subtitle: 'Impact - Day of Apocalypse',
        content:
            'It was the day of the apocalypse. According to history, a piercing rumble suddenly broke the supposed tranquility in the dead of night – the meteorite finally hit the earth. Brutal as it sounds, hundreds of millions of lives were taken, including the hospitable hedgehogs that were eager to save the ignorant humans. Luckily, right before the meteorite hit the ground, a group of hedgehogs had hastily grabbed their precious belongings, rushing to their spacecraft, embarking on their journey to the land of possibilities – planet iRIS.',
        icon: apocalypse,
    },
    {
        id: '03',
        title: 'Jan. 19, 2038',
        subtitle: 'Chaos - Fear & Hope',
        content:
            'However, a while after their departure, a fragment of the Polonium asteroid hit the Hedgehog’s spacecraft and some polonium penetrated the surface. Most hedgehogs suffered and were killed by the toxic substance, but six of them miraculously survived and continued to fly toward iRIS. Although the surviving hedgehogs were passed out, the radiation altered their DNA and gave them mysterious power.',
        icon: chaos,
    },
    {
        id: '04',
        title: 'Feb. 07, 2106',
        subtitle: 'Arrival - New Era',
        content:
            'After a long journey, the hedgehogs finally arrived at iRIS. Meters of dust stirred up and obstructed the bright light outside the spacecraft. The six hedgehogs stepped out onto this foreign land and were surprised by their new superpowers. But long before they came out of their trance, the revealing beam of light caught their attention - five unknown flying subjects landed on the land of iRIS, each of them crafted with a unique symbol of Metal, Wood, Water, Fire, and Earth. As the door opened, the six hedgehogs suddenly turned to stone at the moment with more and more peculiar-looking hedgehogs running towards them. It appeared that the meteorite impact twisted the gravity and brought all alien hedgehogs together.',
        icon: arrival,
    },
    {
        id: '05',
        title: 'Feb. 07, 2106',
        subtitle: 'Hope - Love & Peace',
        content:
            'Suddenly, the dead and lonely iRIS planet was lightened up by the immersion of hedgehogs from six different planets. Loud chatters and cheerful laughters broke the deathly stillness, it was the first time where they can express their ideas without bearing the judgy faces of human beings. “Let’s build our community, a place that is filled with love, peace, and equality”, one of the hedgehogs shouted. And that’s it, a revolution in civilization is brewing and is about to blow your mind……',
        icon: hope,
    },
];

export default config;
