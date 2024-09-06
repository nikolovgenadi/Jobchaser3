declare module "firebase/app" {
  const app: typeof import("firebase/app");
  export default app;
}

declare module "firebase/auth" {
  const auth: typeof import("firebase/auth");
  export default auth;
}

declare module "firebase/firestore" {
  const firestore: typeof import("firebase/firestore");
  export default firestore;
}
