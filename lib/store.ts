
import { create } from "zustand"; import type { Fortnight } from "./utils";
export const useApp = create<{ userId?: string; fortnight: Fortnight; monthRef: string; setUser:(id?:string)=>void; setFortnight:(f:Fortnight)=>void; setMonthRef:(iso:string)=>void; }>((set)=>({
  userId: undefined, fortnight: "FULL", monthRef: new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString().slice(0,10), setUser:(id)=>set({userId:id}), setFortnight:(f)=>set({fortnight:f}), setMonthRef:(iso)=>set({monthRef:iso})
}));
