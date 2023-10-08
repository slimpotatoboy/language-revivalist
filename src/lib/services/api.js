import {
    Account,
    Client,
    Databases,
    Functions,
    ID,
    Locale,
    Permission,
    Storage,
    Teams,
    Query,
    Role,
  } from "appwrite";
  
  
  const endpoint = process.env.NEXT_PUBLIC_APPWRITE_URL;
  const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID;
  
  const client = new Client();
  
  if (endpoint && projectId) {
    client.setEndpoint(endpoint).setProject(projectId);
  }
  
  const account = new Account(client);
  const database = new Databases(client);
  const storage = new Storage(client);
  const locale = new Locale(client);
  const teams = new Teams(client);
  const functions = new Functions(client);
  
  export {
    ID,
    Permission,
    Query,
    Role,
    account,
    client,
    database,
    locale,
    storage,
    teams,
    functions,
  };
  