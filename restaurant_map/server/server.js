const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;

app.post('/getPlaces', (req, resp) => {
	// getPlaces here
});

app.listen(PORT, () => console.table({ SERVER: 'RUNNING', PORT }));
