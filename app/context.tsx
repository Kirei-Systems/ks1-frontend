import { createContext, useContext, type ComponentProps, type ReactElement, type ReactNode } from "react";
import type { Region, City } from "~/api";

export class Data {
  constructor(
    readonly regions: Region[],
    readonly cities: City[]
  ) {
    
  }

  getRegion(hashid: string): Region|undefined {
    return this.regions.find((h) => h.hashid == hashid)
  }

  getCity(hashid: string): City|undefined {
    return this.cities.find((h) => h.hashid == hashid)
  }
}

const DataContext = createContext<Data|null>(null);
export function useData(): Data {
  const data = useContext(DataContext)
  if(data === null) {
    throw "useData(): needs a data provider"
  }
  return data
}

export function DataProvider({data, children}: {data:Data, children: ReactNode}) {
  return <DataContext value={data}>
    {children}
  </DataContext>
}
