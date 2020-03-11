import { ErrorSafety } from "./return";

declare global {
  interface Mutation<T = any> extends ErrorSafety<T> {}
  interface ServiceData<T = any> extends ErrorSafety<T> {}
}
