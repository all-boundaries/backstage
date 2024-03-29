import {
  TechRadarApi,
  TechRadarLoaderResponse
} from '@backstage/plugin-tech-radar';
import { radar } from './radar';
  
  export class TechRadarClient implements TechRadarApi {
    async load(): Promise<TechRadarLoaderResponse> {
      // if needed id prop can be used to fetch the correct data
  
      // const data = await fetch('https://github.com/all-boundaries/tech-radar/blob/main/radar.json').then(res => res.json());
      const data = radar
  
      // For example, this converts the timeline dates into date objects
      return {
        ...data,
        entries: data.entries.map((entry: any) => ({
          ...entry,
          timeline: entry.timeline.map((timeline: any) => ({
            ...timeline,
            date: new Date(timeline.date),
          })),
        })),
      };
    }
  }