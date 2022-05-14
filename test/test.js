const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

var assert = require("assert");
let chai = require("chai");
let chaiHttp = require("chai-http");
//const { getMaxListeners } = require("process");
// let server = require("../index");
let should = chai.should();
let expect = chai.expect;
chai.use(chaiHttp);

describe("all api , test cases", () => {

    // it("create a new employee", (done) => {

    //     let emp = {
    //         name: "anna",
    //         email: "anna@gmail.com",
    //         salary: "2000"
    //     };

    //     chai.request(server)
    //         .post('/employee/add')
    //         .send(emp)
    //         .end((err, res) => {
    //             expect(res.status).to.be.equal(200);
    //             //expect(res.body).to.have.all.keys()

    //             done()
    //         })
    // })



    it("post api , get products", (done) => {

        let data = {
            cat: null,
            subcat: null,
            storeid: null,
            city: null,
            search: "Amul Ghee 1kg",
            offset: 0,
            limit: 5,
        };

        chai.request('https://us-central1-spotyourdeal-38ab2.cloudfunctions.net/api')
            .post('/getProducts')
            .send(data)
            .end((err, res) => {
                should.not.exist(err);
                res.body.should.be.a('array');
                // res.body.should.have.property('[0].Imagepath');

                //expect(res.body).to.have.all.keys()

                done()
            })
    })



    it("post api ,fetchProductDetail", (done) => {

        let data = {
            productId: "6172dbc7d4242d000d8bcdc3"
        };

        chai.request('https://us-central1-spotyourdeal-38ab2.cloudfunctions.net/api')
            .post('/fetchProductDetail')
            .send(data)
            .end((err, res) => {
                should.not.exist(err);
                res.body.should.be.a('object');
                res.body.should.have.property('_id');
                res.body.should.have.property('name');
                res.body.should.have.property('articleNumber');
                res.body.should.have.property('description');
                res.body.should.have.property('purchaseAmount');
                res.body.should.have.property('pricePerUnit');
                res.body.should.have.property('price');
                res.body.should.have.property('priceOffPerc');
                res.body.should.have.property('promoRating');
                res.body.should.have.property('Imagepath');
                res.body.should.have.property('multipleImages');
                res.body.should.have.property('units');
                res.body.should.have.property('currency');
                res.body.should.have.property('storeName');
                res.body.should.have.property('storeId');
                res.body.should.have.property('storeCity');


                //expect(res.body).to.have.all.keys()

                done()
            })
    })


    it("post api , getCartProducts ", (done) => {

        let cart = [{
            id: "6172dbc7d4242d000d8bcdc3",
            qty: 100
        }]

        chai.request('https://us-central1-spotyourdeal-38ab2.cloudfunctions.net/api')
            .post('/getCartProducts')
            .send(cart)
            .end((err, res) => {
                should.not.exist(err);
                res.body.should.be.a('object');
                // res.body.should.have.property('_id');
                // res.body.should.have.property('city');
                // res.body.should.have.property('articleNumber');
                // res.body.should.have.property('name');
                // res.body.should.have.property('description');
                // res.body.should.have.property('upcNumber');
                // res.body.should.have.property('merchandiseCat');
                // res.body.should.have.property('price');
                // res.body.should.have.property('pricePerUnit');
                // res.body.should.have.property('currency');
                // res.body.should.have.property('units');
                // res.body.should.have.property('storeId');
                // res.body.should.have.property('gst_per');
                // res.body.should.have.property('commission');
                // res.body.should.have.property('priceOffPerc');
                // res.body.should.have.property('DaDeliveryFee');
                // res.body.should.have.property('purchaseAmount');
                // res.body.should.have.property('submerchandiseCat');
                // res.body.should.have.property('Imagepath');
                // res.body.should.have.property('multipleImages');
                // res.body.should.have.property('qty');               
               
               

                //expect(res.body).to.have.all.keys()

                done()
            })
    })




})


// it("get all employees", function (done) {

//     chai.request(server)
//         .get('/api/employees')
//         .end((err, res) => {

//             done()
//         })
// })



