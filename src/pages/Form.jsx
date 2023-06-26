import React, { useState } from 'react';
import { Client, Storage, ID, Databases } from 'appwrite';

const client = new Client();
const storage = new Storage(client);
const databases = new Databases(client);

function Form() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescChange = (event) => {
    setDescription(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleFaceContent = async (faceId) => {
    try {
        
      const response = await databases.createDocument(
        process.env.REACT_APP_APPWRITE_DATABASE_ID,
        process.env.REACT_APP_APPWRITE_COLLECTION_ID,
        ID.unique(),
        {
          title: title,
          description: description,
          face_id: faceId,
        }
      );
      console.log(response); // Success
    } catch (error) {
      console.log(error); // Failure
    }
  };

  const handlePublish = async (event) => {
    event.preventDefault();
    client
    .setEndpoint(process.env.REACT_APP_APPWRITE_API_ENDPOINT)
    .setProject(process.env.REACT_APP_APPWRITE_PROJECT_ID)
;
    try {
      const response = await storage.createFile(process.env.REACT_APP_APPWRITE_FACES_BUCKET_ID, ID.unique(), image); // no need to add bucket id in env
      console.log(response); // Success
      const { $id } = response;
      handleFaceContent($id);

      setTitle("");
      setDescription("");
      alert('Face published successfully.');
    } catch (error) {
      console.log(error); // Failure
    }
  };

  return (
    <form onSubmit={handlePublish} className='max-w-md mx-auto'>
      <div className='mb-4'>
        <label htmlFor='title' className='block text-gray-700 font-bold mb-2'>
          Title:
        </label>
        <input
          type='text'
          id='title'
          name='title'
          value={title}
          onChange={handleTitleChange}
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        />
      </div>
      <div className='mb-4'>
        <label htmlFor='description' className='block text-gray-700 font-bold mb-2'>
          Description:
        </label>
        <input
          type='text'
          id='description'
          name='title'
          value={description}
          onChange={handleDescChange}
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        />
      </div>
      <div className='mb-4'>
        <label htmlFor='image' className='block text-gray-700 font-bold mb-2'>
          Image:
        </label>
        <input
          type='file'
          id='image'
          name='image'
          accept='image/*'
          onChange={handleImageChange}
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        />
      </div>
      <div className='flex items-center justify-center'>
        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
        >
          Publish
        </button>
      </div>
    </form>
  );
}

export default Form;