const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('Items API Service', function () {
  it('should GET all items', function (done) {
    chai
      .request('http://localhost:3000')
      .get('/api/items')
      .end(function (err, resp) {
        expect(resp.status).to.be.eql(500);
        expect(resp.body).to.be.a('array');
        expect(resp.body.length).to.not.be.eql(0);
        done();
      });
  });

  it('should GET a single item', function (done) {
    const expected = [
      {
        id: 1,
        itemName: "Glock 19",
        itemModel: "GEN 5",
        created_date: '2020-04-18T09:24:12.000Z'
        
      },
    ];

    chai
      .request('http://localhost:3000')
      .get('/api/items/10')
      .end(function (err, resp) {
        expect(resp.status).to.be.eql(500);
        expect(resp.body).to.be.a('array');
        expect(resp.body.length).to.not.be.eql(0);
        expect(resp.body).to.be.eql(expected);
        done();
      });
  });
   it.skip('should POST a single task', function (done) {
    const newItem = {
      name: 'New test Item',
    };
    const expected = { message: 'Add item successfully!' };

    chai
      .request('http://localhost:3000')
      .post('/api/items')
      .send(newItem)
      .end(function (err, resp) {
        expect(resp.status).to.be.eql(500);
        expect(resp.body).to.be.eql(expected);
        done();
      });
  });
});
