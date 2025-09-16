import React, { useState, useEffect } from 'react';
import {
  Authenticator,
  Button,
  Flex,
  Heading,
  Text,
  TextField,
  View,
  Image,
  Collection
} from '@aws-amplify/ui-react';
import { generateClient } from 'aws-amplify/api';
import { uploadData, getUrl, remove } from 'aws-amplify/storage';
import { listNotes } from './queries';
import {
  createNote as createNoteMutation,
  deleteNote as deleteNoteMutation,
} from './mutations';

import './index.css';
import './App.css';

import amplifyConfig from './amplify_outputs.json';
import { Amplify } from 'aws-amplify';

Amplify.configure(amplifyConfig);
const client = generateClient();

const App = () => {
  const [notes, setNotes] = useState([]);
  const [noteImage, setNoteImage] = useState(null);

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    try {
      const apiData = await client.graphql({ query: listNotes });
      const notesFromAPI = apiData.data.listNotes.items;
      const notesWithImages = await Promise.all(
        notesFromAPI.map(async (note) => {
          if (note.image) {
            const url = await getUrl({ key: note.image });
            note.imageUrl = url.url;
          }
          return note;
        })
      );
      setNotes(notesWithImages);
    } catch (e) {
      console.error('Error fetching notes:', e);
    }
  }

  async function createNote(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const image = form.get('image');
    const data = {
      name: form.get('name'),
      description: form.get('description'),
      image: image.name,
    };

    try {
      if (noteImage) {
        await uploadData({ key: data.name, data: noteImage, options: { accessLevel: 'guest' } }).result;
      }
      await client.graphql({
        query: createNoteMutation,
        variables: { input: data },
      });
      fetchNotes();
      event.target.reset();
    } catch (e) {
      console.error('Error creating note:', e);
    }
  }

  async function deleteNote({ id, image }) {
    try {
      await client.graphql({
        query: deleteNoteMutation,
        variables: { input: { id } },
      });
      if (image) {
        await remove({ key: image });
      }
      fetchNotes();
    } catch (e) {
      console.error('Error deleting note:', e);
    }
  }

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <View className="App">
          <Heading level={1}>My Notes App</Heading>
          <Button onClick={signOut}>Sign Out</Button>
          <View as="form" margin="3rem 0" onSubmit={createNote}>
            <Flex direction="row" justifyContent="center">
              <TextField
                name="name"
                placeholder="Note Name"
                label="Note Name"
                labelHidden
                variation="quiet"
                required
              />
              <TextField
                name="description"
                placeholder="Note Description"
                label="Note Description"
                labelHidden
                variation="quiet"
                required
              />
              <View name="image" as="input" type="file" onChange={(e) => setNoteImage(e.target.files[0])} style={{ alignSelf: 'center' }} />
              <Button type="submit" variation="primary">
                Create Note
              </Button>
            </Flex>
          </View>
          <Heading level={2}>Current Notes</Heading>
          <Collection type="grid" templateColumns="1fr 1fr 1fr" gap="10px" items={notes}>
            {(note, index) => (
              <View key={note.id || note.name} as="li" className="box">
                <Flex
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Text as="strong">{note.name}</Text>
                  <Text as="span">{note.description}</Text>
                  {note.image && (
                    <Image
                      src={note.imageUrl}
                      alt={`visual aid for ${note.name}`}
                      style={{ width: '100%', height: 'auto' }}
                    />
                  )}
                  <Button onClick={() => deleteNote(note)}>
                    Delete Note
                  </Button>
                </Flex>
              </View>
            )}
          </Collection>
        </View>
      )}
    </Authenticator>
  );
};

export default App;