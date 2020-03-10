import { ErrorSafety } from "./return.d";

declare global {
  interface Mutation<T = any> extends ErrorSafety<T> {}
  interface ServiceData<T = any> extends ErrorSafety<T> {}
}
