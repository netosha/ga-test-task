import { MouseEvent } from 'react';

export interface SliderProps {
  mode: 'masks' | 'video';
  toggleMode: (e: MouseEvent<HTMLDivElement>) => void;
}
