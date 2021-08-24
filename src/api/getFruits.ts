import { IFruit } from 'types';
import { tools } from '../tools';
import { utils } from '../utils';

export default async function getFruits(): Promise<IFruit[]> {
  tools();
  utils();
  return (await fetch('/fruits.json')).json() as Promise<IFruit[]>;
}
