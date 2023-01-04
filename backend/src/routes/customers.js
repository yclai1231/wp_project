import db from "../sql.js";
import express from "express";
import moment from "moment";

const router = express.Router();
const Myquery = (query) => {
  return new Promise((resolve) => {
    db.query(query, (err, result) => {
      if (err) {
        throw err;
      } else {
        if(result.affectedRows !== 1){
            console.log(result)
            result.map((element) => {
                element.birthday = moment(element.birthday).utc().format("YYYY-MM-DD");
                element.birthday = new Date(element.birthday);})
        }
          resolve(result);
        }
      }
    );
})
};

router.delete("/", async (req, res) => {
  console.log(req.body);
  let {id} = req.query;
  let query = `delete from customers
                 where customer_id = ${id}`;
  await Myquery(query);
  let return_query = `select * from customers;`;
  var result = await Myquery(return_query);
  res.status(200).send({ result });
});

router.get("/", async (req, res) => {
  const {customer_id} = req.query
  let query = `select * from customers
               where customer_id = ${customer_id};`;
  var result = await Myquery(query);
  res.status(200).send({ result });
});

router.put("/", async (req, res) => {
    console.log('Customer to update:', req.body);
    let {customer_id, customer_name, birthday, phone_number} = req.body;
    let query = `update customers set
                 customer_name = "${customer_name}", 
                 birthday = "${moment(birthday).utc().format("YYYY-MM-DD")}",
                 phone_number = "${phone_number}"
             where customer_id = ${customer_id}`;
    await Myquery(query);
    let query_return = `select * from customers
                            where customer_id = ${customer_id};`;
    let result = await Myquery(query_return);
    res.status(200).send({ result });
});
export default router;
