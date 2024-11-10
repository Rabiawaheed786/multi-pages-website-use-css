import { Instrument_Sans, Italiana, Abhaya_Libre, ABeeZee, Inter, IBM_Plex_Serif } from 'next/font/google';


export const italiana = Italiana({
  weight: '400', // Italiana only has one weight
  subsets: ['latin'],
  display: 'swap', // Use 'swap' for better font loading performance
});

export const instrumentSans = Instrument_Sans({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const abhayaLibre = Abhaya_Libre({
  weight: ['400', '500', '600', '700', '800'], // Choose the weights you need
  subsets: ['latin'],
  display: 'swap',
});

export const aBeeZee = ABeeZee({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const inter = Inter({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const ibmPlexSerif = IBM_Plex_Serif({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});