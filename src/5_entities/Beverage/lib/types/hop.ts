import { TPart } from ".";

export type THop = (TPart & { add: string; attribute: string })

export type THops = THop[]