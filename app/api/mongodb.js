const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');

async function uploadSimpleFile(filePath) {
    const uri = 'mongodb+srv://ksakethreddyreddy:diGg4VF89aAbILvC@cluster0.elogcnz.mongodb.net/arttalent?retryWrites=true&w=majority';
    const client = new MongoClient(uri);

    try {
        await client.connect();
        console.log('Connected successfully to MongoDB');

        const database = client.db('myArtGallery'); // Use the new database name
        const artworksCollection = database.collection('artworks');

        const fileExists = fs.existsSync(filePath);
        console.log(`File exists: ${fileExists}`);
        if (!fileExists) return;

        const artworkData = {
            title: "Silence of Love",
            src: path.basename(filePath), // Just save the filename for now
            description: 'A description of the artwork.',
        };

        const result = await artworksCollection.insertOne(artworkData);
        console.log(`${result.insertedCount} artwork was inserted`);
    } catch (error) {
        console.error('Error:', error);
    } finally {
        await client.close();
    }
}

const filePath = "C:\\Users\\saket\\Desktop\\artgallery\\public\\art1.png";
uploadSimpleFile(filePath).catch(console.dir);
