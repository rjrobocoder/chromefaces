import { Account, Client } from "appwrite";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [userDetails, setUserDetails] = useState();
  const client = new Client();
  const account = new Account(client);

  client
    .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("chromefaces"); // Your project ID

  useEffect(() => {
    try {
      async function fetchData() {
        const promise = await account.get();

        promise.then(
          function (response) {
            setUserDetails(promise);
            console.log(response); // Success
          },
          function (error) {
            console.log(error); // Failure
          }
        );
      }
      fetchData();
    } catch (e) {
      console.log(e.message);
    }
  }, []);

  return <h1>Dashboard</h1>;
};

export default Dashboard;
