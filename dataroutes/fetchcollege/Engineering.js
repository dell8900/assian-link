const express=require('express');
const app=express.Router();
const University=require('../../models/Engineering')


app.get('/Engineering/:collegename', async (req, res) => {
    try {
      const collegename = req.params.collegename;
      const collegeData = await University.findOne({ collegename });
      if (!collegeData) {
        return res.status(404).json({ message: 'College not found' });
      }
      res.json(collegeData);
    } catch (error) {
      console.error('Error fetching college data:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  







module.exports=app;