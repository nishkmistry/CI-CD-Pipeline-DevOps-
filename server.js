const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.static('public'));

app.use('/api/github', async (req, res) => {
    const targetUrl = `https://api.github.com${req.url}`;
    const token = process.env.REACT_APP_GITHUB_TOKEN;

    if (!token) {
        return res.status(500).json({ error: 'GitHub PAT is not configured in the server .env file.' });
    }

    try {
        const response = await axios({
            method: req.method,
            url: targetUrl,
            headers: {
                'Authorization': `token ${token}`,
                'Accept': 'application/vnd.github.v3+json',
                'User-Agent': 'Node-Proxy'
            },
            data: req.method !== 'GET' ? req.body : undefined
        });

        res.status(response.status).json(response.data);
    } catch (error) {
        if (error.response) {
            res.status(error.response.status).json(error.response.data);
        } else {
            console.error('Proxy Error:', error.message);
            res.status(500).json({ error: 'Failed to proxy request to GitHub API.' });
        }
    }
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}`);
    });
}

module.exports = app;
