let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');



chai.use(chaiHttp);
chai.should();

var id;

describe('Articles', () => {
  describe('/getArticles should get all the articles', () => {
    it('it should GET all the articles', (done) => {
      chai.request(server)
        .get('/getArticles')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          done();
        });
    });
  });
  describe('/POST Article', () => {
    it('Posting an article', (done) => {
      let article = {
        title: "Trip to mars",
        author: "John Doe",
        year: 1999
      }
      chai.request(server)
        .post('/articles')
        .send(article)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          id = res.body._id
          done();
        });
    });
  });
  describe(`/moderation/:ArticleId to remove newly created article so it doesnt get added to database`, () => {
    it('deleting article', (done) => {
        chai.request(server)
            .delete(`/moderation/${id}`)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
    });
});

});