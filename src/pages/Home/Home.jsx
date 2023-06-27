import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar";
import Gallery from "../../components/Gallery";
import { Client, Databases, Storage } from "appwrite";

const client = new Client();
const storage = new Storage(client);
const databases = new Databases(client);
client
  .setEndpoint(process.env.REACT_APP_APPWRITE_API_ENDPOINT) // Your API Endpoint
  .setProject(process.env.REACT_APP_APPWRITE_PROJECT_ID); // Your project ID

const Home = () => {
  const [faces, setFaces] = useState([]);

  const fetchData = async () => {
    try {
      // const response = await storage.listFiles('faces');
      // const response = await storage.getFilePreview('faces', '649965772b4d980ae9eb');
      // const response = await storage.getPreviewUrls('faces');
      const response = await databases.listDocuments(
        process.env.REACT_APP_APPWRITE_DATABASE_ID,
        process.env.REACT_APP_APPWRITE_FACES_COLLECTION_ID
      );
      console.log(response?.documents); // Success
      setFaces(response?.documents);
    } catch (error) {
      console.log("Error:", error); // Failure
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log("🍄", faces);
  return (
    <>
      <Header />
      <main className="px-6">
        <SearchBar />
        <Gallery facelist={faces} />
      </main>
    </>
  );
};

export default Home;
