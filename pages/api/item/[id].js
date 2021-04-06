import db from '../../../lib/database';
import Cors from 'cors';
import initMiddleware from '../../../lib/init-middleware';

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['GET', 'POST', 'OPTIONS']
  })
);

export default async function handler(req, res) {
  // Run cors
  await cors(req, res);

  const nft = db[req.query.id];

  if (nft) res.json(nft);
  else {
    res.statusCode = 400;
    res.end('Could not find NFT...');
  }
}
