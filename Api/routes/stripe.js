const router = require("express").Router();
const KEY = "sk_test_51KU7QpSCLO54GUMzrnFSWm9bOMNzIfP9n3wgcHXlFBBRw4dNxJtopdcmV5U0e9vaRcGFwQ9wootDrCGibzkxD3q500eOPU7jnW"
const stripe = require("stripe")(KEY);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;