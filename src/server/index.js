import express from 'express'
import mysql from 'mysql2'
import * as sql_source from './sql/sql.js'
import databaseConfig from './database.config.js'

const mysqlAsync = require('mysql2/promise');

const app = express();

const db_setting = databaseConfig;

// CORSの許可
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// body-parserに基づいた着信リクエストの解析
app.use(express.json({ type: 'application/json' }));
app.use(express.urlencoded({
  extended: true,
  type: 'application/x-www-form-urlencoded'
}));

// エラー処理
app.use((err, _req, res, _next) => {
  res.status(err.code || 500).send(err.msg || 'Internal Server Error');
});

// 商品一覧取得
app.get('/getItemList', (req, res) => {
  const connection = mysql.createConnection(db_setting);
  connection.connect();
  const sql = sql_source.sqlItemListGet();
  connection.execute(sql, function (err, rows, fields) {
    if (err) {res.json({status: 500, error: "fail to post your information"});}
    else {res.json({status: 200, data: rows});}
  });
  connection.end();
});

// 商品詳細取得
app.get('/getItemDetail', (req, res) => {
  const connection = mysql.createConnection(db_setting);
  connection.connect();
  const sql = sql_source.sqlItemDetailGet();
  connection.execute(sql, [req.query.item_id], function (err, rows, fields) {
    if (err) {res.json({status: 500, error: "fail to post your information"});}
    else {res.json({status: 200, data: rows});}
  });
  connection.end();
});

// 商品買い物かご追加
app.post('/postItemCart', async (req, res, next) => {
  const connection = mysql.createConnection(db_setting);
  try{
    connection.connect();
    const sql = sql_source.sqlItemCartAdd();
    connection.execute(sql, [req.body.item_id, req.body.item_quantity], function (err, rows, fields) {
      res.status(200).end();
    });
  }
  catch(error) {res.status(502).end();}
  finally {connection.end();}
});

// 商品買い物かご取得
app.get('/getItemCartList', (req, res) => {
  const connection = mysql.createConnection(db_setting);
  connection.connect();
  const sql = sql_source.sqlItemCartGet();
  connection.execute(sql, function (err, rows, fields) {
    if (err) {res.json({status: 500, error: "fail to post your information"});}
    else {res.json({status: 200, data: rows});}
  });
  connection.end();
});

// 商品買い物かご削除
app.get('/deleteItemCart', (req, res) => {
  const connection = mysql.createConnection(db_setting);
  connection.connect();
  const sql = sql_source.sqlItemCartDelete();
  connection.execute(sql, [req.query.item_id], function (err, rows, fields) {
    if (err) {res.json({status: 500, error: "fail to post your information"});}
    else {res.json({status: 200, data: rows});}
  });
  connection.end();
});

// ALL買い物かご削除
app.get('/deleteCart', (req, res) => {
  const connection = mysql.createConnection(db_setting);
  connection.connect();
  const sql = sql_source.sqlCartDelete();
  connection.execute(sql, function (err, rows, fields) {
    if (err) {res.json({status: 500, error: "fail to post your information"});}
    else {res.json({status: 200, data: rows});}
  });
  connection.end();
});

// 注文データ追加
app.post('/postOrder', async (req, res, next) => {
  const connection = mysql.createConnection(db_setting);
  try{
    connection.connect();
    const sql = sql_source.sqlOrderAdd();
    connection.execute(sql, [req.body.order_id, req.body.order_shipping_fee, req.body.order_tax_amount, req.body.order_total_amount], function (err, rows, fields) {
      res.status(200).end();
    });
  }
  catch(error) {res.status(502).end();}
  finally {connection.end();}
});

// 注文商品データ追加
app.post('/postOrderItem', async (req, res, next) => {
  const connection = mysql.createConnection(db_setting);
  try{
    connection.connect();
    const sql = sql_source.sqlOrderItemAdd();
    connection.execute(sql, [req.body.order_id, req.body.order_item_id, req.body.order_item_quantity, req.body.order_item_unit_price], function (err, rows, fields) {
      res.status(200).end();
    });
  }
  catch(error) {res.status(502).end();}
  finally {connection.end();}
});

// 注文データ取得
app.get('/getOrder', (req, res) => {
  const connection = mysql.createConnection(db_setting);
  connection.connect();
  const sql = sql_source.sqlOrderGet();
  connection.execute(sql, [req.query.order_id], function (err, rows, fields) {
    if (err) {res.json({status: 500, error: "fail to post your information"});}
    else {res.json({status: 200, data: rows});}
  });
  connection.end();
});

// 注文商品データ取得
app.get('/getOrderItem', (req, res) => {
  const connection = mysql.createConnection(db_setting);
  connection.connect();
  const sql = sql_source.sqlOrderItemGet();
  connection.execute(sql, [req.query.order_id], function (err, rows, fields) {
    if (err) {res.json({status: 500, error: "fail to post your information"});}
    else {res.json({status: 200, data: rows});}
  });
  connection.end();
});

// 注文一覧データ取得
app.get('/getOrderList', (req, res) => {
  const connection = mysql.createConnection(db_setting);
  connection.connect();
  const sql = sql_source.sqlOrderListGet();
  connection.execute(sql, function (err, rows, fields) {
    if (err) {res.json({status: 500, error: "fail to post your information"});}
    else {res.json({status: 200, data: rows});}
  });
  connection.end();
});


module.exports = {
  path: '/api',
  handler: app
}

