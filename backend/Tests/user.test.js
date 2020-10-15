let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');

chai.use(chaiHttp);
chai.should();

var id;


describe('Users', () => {
    describe('/register to make new user', () => {
        it('Making user', (done) => {
            let user = {
                name: "John Doe",
                email: "mello@hello.com",
                password: "password",
                password2: "password",
                role: "registeredUser"
            }
            chai.request(server)
                .post('/register')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    id = res.body.user.id
                    done();
                });
        });
    });

    describe('/register to make new but email is already in use', () => {
        it('Making user', (done) => {
            let user = {
                name: "John Doe",
                email: "mello@hello.com",
                password: "password",
                password2: "password",
                role: "registeredUser"
            }
            chai.request(server)
                .post('/register')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('Email already exists');
                    done();
                });
        });
    });

    describe(`/getUser/:UserId to remove newly created John doe from database so the test user doesnt get added`, () => {
        it('deleting user', (done) => {
            chai.request(server)
                .delete(`/getUser/${id}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });
    });
});