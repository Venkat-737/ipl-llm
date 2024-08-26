const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');

const app = express();
app.use(cors({
  origin: 'http://localhost:5173'
}));

const PORT = 5000;
const urls = {
  '2018': 'https://www.espncricinfo.com/series/ipl-2018-1131611/points-table-standings',
  '2019': 'https://www.espncricinfo.com/series/ipl-2019-1165643/points-table-standings',
  '2020': 'https://www.espncricinfo.com/series/ipl-2020-21-1210595/points-table-standings',
  '2021': 'https://www.espncricinfo.com/series/ipl-2021-1249214/points-table-standings',
  '2022': 'https://www.espncricinfo.com/series/indian-premier-league-2022-1298423/points-table-standings'
};

app.get('/api/points-table/:year', async (req, res) => {
  const year = req.params.year;
  const url = urls[year];

  if (!url) {
    return res.status(400).send('Invalid year');
  }

  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const pointsTable = [];
    
      $('table.ds-table tbody tr').each((index, element) => {
        const team = $(element).find('td').eq(0).text().trim();
        const matches = $(element).find('td').eq(1).text().trim();
        const wins = $(element).find('td').eq(2).text().trim();
        const losses = $(element).find('td').eq(3).text().trim();
        const ties = year === '2020' ? '0' : $(element).find('td').eq(4).text().trim();
      const noResult = year === '2020' ? $(element).find('td').eq(4).text().trim() : $(element).find('td').eq(5).text().trim();
      const points = year === '2020' ? $(element).find('td').eq(5).text().trim() : $(element).find('td').eq(6).text().trim();
      const nrr = year === '2020' ? $(element).find('td').eq(6).text().trim() : $(element).find('td').eq(7).text().trim();
      
        pointsTable.push({ team, matches, wins, losses, ties, noResult, points, nrr });
      });
      

    res.json(pointsTable);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching points table data');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
