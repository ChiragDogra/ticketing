import express from "express";

const router = express.Router();

router.post("/api/users/signin", (req, res) => {
    res.send("Hi there user, you've been signed in")
});

export { router as signinRouter };
