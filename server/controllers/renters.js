/* eslint-disable newline-per-chained-call, new-cap, no-param-reassign, consistent-return, no-underscore-dangle, array-callback-return, max-len */

import express from 'express';
import Renter from '../models/renter';
import Apartment from '../models/apartment';
import bodyValidator from '../validators/renters/body';
// import queryValidator from '../validators/apartments/query';
import paramsValidator from '../validators/apartments/params';
const router = module.exports = express.Router();

// create
router.post('/', bodyValidator, (req, res) => {
  Renter.create(res.locals, (err, renter) => {
    res.send({ renter });
  });
});

router.put('/:id/pay', bodyValidator, paramsValidator, (req, res) => {
  Renter.findById(req.params.id, (err1, renter) => {
    Apartment.findById(renter.apartment, (err2, apartment) => {
      renter.payrent(apartment, () => {
        res.send({ renter, apartment });
      });
    });
  });
});
