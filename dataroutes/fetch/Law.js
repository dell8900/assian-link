const express=require('express');
const app=express.Router();
const University=require('../../models/Law')


app.get('/Law', async (req, res) => {
    try {
      console.log('Fetching all universities'); 
      const universities = await University.find({});
      console.log('Fetched universities:', universities); 
      res.status(200).json(universities);
    } catch (error) {
      console.error('Error fetching universities:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  

  module.exports=app;