import React, { useState } from "react";
import { Client, Databases, ID, Storage } from "appwrite";

function RegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState("");

  const client = new Client();
  client.setEndpoint("https://cloud.appwrite.io/v1").setProject("chromefaces");
  // .setKey('3847a3ae8820a904d4755eaaf68f50ea5ae95e61d16f555205d35ac0045f100f497554a6638478c9071f2f2ad6d9737be1e2382dfe591d4412f46cf3f48ae668b134a39fe5b20d6389edc6bbacf5be0975d505be69064df4bf70d7ab4a9d5e7988d48ed54134d64a1f88f292b612ddac479dd27467851d0636291be85a9d8fa4');

  const databases = new Databases(client);
  const storage = new Storage(client);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const promise = storage.createFile(
        'faces',
        ID.unique(),
        document.getElementById('uploader').files[0]
      );
    
      promise.then(function (response) {
          console.log(response); // Success
      }, function (error) {
          console.log(error); // Failure
      });





      // insert data to db
      // const promise = databases.createDocument(
      //   "648fdee164d382363b7d",
      //   "648fe069e70e927047eb",
      //   ID.unique(),
      //   {
      //     name: name,
      //     email: email,
      //   }
      // );

      // await promise.then(
      //   function (response) {
      //     console.log(response); // Success
      //   },
      //   function (error) {
      //     console.log(error); // Failure
      //   }
      // );


      // await appwrite.account.create(email, password);
      console.log("Data uploaded successfully!");
    } catch (error) {
      console.error("Failed to upload data:", error);
    }
  };

  return (
    <>
    <h1 className="text-[24px] font-bold">Welcome to the form</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">File:</label>
        <input
          type="file"
          id="uploader"
          // value={file}
          // onChange={(e) => setFile(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
    </>
  );
}

export default RegistrationForm;
