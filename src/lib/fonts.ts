import { Cinzel, IM_Fell_Double_Pica, Bebas_Neue, EB_Garamond, Source_Sans_3 } from 'next/font/google';

// Info extracted from https://www.gamefontlibrary.com/games/clair-obscur%3A-expedition-33

// Main font
export const cinzel = Cinzel({ subsets: ['latin'] });

// Secondary font
export const imFeelDoublePica = IM_Fell_Double_Pica({ subsets: ['latin'], weight: '400' });

// Tertiary font
export const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: '400' });

// Quaternary font
export const ebGaramond = EB_Garamond({ subsets: ['latin'] });

// Other fonts
export const sourceSans3 = Source_Sans_3({ subsets: ['latin'] });
