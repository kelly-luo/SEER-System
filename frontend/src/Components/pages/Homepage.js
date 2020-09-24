import React from 'react';
import './Homepage.css';
import NavigationBar from './NavBar'
import CustomSearchCard from './CustomerSearchCard'
import SearchBar from '../SearchComponents/Searchbar'
import { Button } from 'react-bootstrap';

class Homepage extends React.Component{

  constructor(props) {
    super(props);
    this.state = { customActive: false};

  }

  // const [formList, setFormList] = useState([]);
  // const [hidden, isHidden] = useState(false);

  // toggleVisibility() {
  //   console.log("Visiblity is now: " + this.state)

  //   const { opened } = this.state;
  //   this.setState((prevState) => {
  //     active: !prevState.active
  //   });

  //   // setFormList(true)
  // }

  addCustomForm = (e) => {
    console.log("Added Form")
    // const info = {
    //   text: "hi"
    // }

    // this.setFormList(prevState => ({
    //   formList: [...prevState.formList, <CustomSearchCard seField="SE Field" operator="Operator"/>]
    // }))

    // setFormList([<CustomSearchCard seField="SE Field" operator="Operator"/>,  ...formList])
  }

  render(){
    const { customActive } = this.state

    return (
      <div className="homepage">
        <NavigationBar></NavigationBar>
        <div className="homepage_body">
          <img src="../SEER_logo.png" alt="" />
          <SearchBar></SearchBar>
          <div className="d-flex justify-content-center">
            <div className="p-3">
              <Button id="customButton" variant="secondary" size="sm" onClick={() => this.setState({ customActive: !customActive })}>
                Custom Search
              </Button>
            </div>
          </div>
          { customActive && (
            <div className="d-flex justify-content-center">
              <CustomSearchCard seField="SE Field" operator="Operator"></CustomSearchCard>
            </div>
          )}
          <div>
            {/* {e => {if(this.formlist){
              this.formList.map(cards => <CustomSearchCard seField="SE Field" operator="Operator"/>)
              }}} */}
          </div>
        </div>
      </div>
    );
  }
};


export default Homepage;