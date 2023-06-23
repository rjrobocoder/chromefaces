import { Appwrite } from "appwrite";

const sdk = new Appwrite();

sdk
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('chromefaces');

export const account = sdk.account;