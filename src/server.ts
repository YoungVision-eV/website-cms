import express from 'express';
import payload from 'payload';
import { seed_if_empty } from './seed';

require('dotenv').config();
const app = express();

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin');
});

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: http://localhost:3000${payload.getAdminURL()}`);
      await seed_if_empty(payload);
    },
  });

  // Add your own express routes here

  app.listen(3000);
};

start();
