const router = require("express").Router();

router.get("/", (req, res) => {
	res.send("<h1>Backend is Running...</h1>");
});

router.post("/login", (req, res) => {
	const username = req.body.username;

	res.send(username);
});

module.exports = router;
