import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Searchbar.css';
import SearchIcon from '@material-ui/icons/Search';
import CustomSearchCard from '../pages/CustomSearchCard/CustomSearchCard.js'
import { useHistory } from "react-router-dom";
import BootstrapButton from 'react-bootstrap/Button';
import UIButton from '@material-ui/core/Button'
import { useDispatch } from "react-redux";
import { addLeft, addMiddle} from "../actions/index";

function SearchBar() {
  const [searchInput, setSearchInput] = useState("");
  const [operatorValue, setOperatorValue] = useState("");
  const [selectionValue, setSelectionValue] = useState("");
  const [customValue, setCustomValue] = useState("");
  const [customActive, setCustomActive] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const search = (e) => {
      e.preventDefault();
      if (searchInput !== "" && customValue !== ""){
        history.push(`/search/${searchInput}/${customValue}`)
        dispatch(addLeft(selectionValue));
        dispatch(addMiddle(operatorValue));
      }
      else if (customValue !== ""){
        history.push(`/search/custom/${customValue}`)
        dispatch(addLeft(selectionValue));
        dispatch(addMiddle(operatorValue));

      }
      else if (searchInput !== "") {
        history.push(`/search/${searchInput}`)
      }
      else{
          history.push(`/search`)
      }
      setSearchInput("")
  }

  const changedSelectValue = (data) => {
    setSelectionValue(data)
  }

  const changedOperatorValue = (data) => {
    setOperatorValue(data)
  }

  const changedSeMethodValue = (data) => {
    setCustomValue(data)
  }

  return (
    <div>
      <form className="search">
        <div className="search_input">
          <input
            type="text"
            placeholder="Search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <UIButton type="submit" onClick={search}>
            <SearchIcon className="search_inputIcon" />
          </UIButton>
        </div>
      </form>
      <div>
        <div className="d-flex justify-content-center">
          <BootstrapButton
            id="customButton"
            variant="secondary"
            size="sm"
            onClick={() => setCustomActive(!customActive)}
          >
            Custom Search
          </BootstrapButton>
        </div>
        <div className="customSearchContainer">
          {customActive && (
            <div className="d-flex justify-content-center">
              <CustomSearchCard
                changedSelectCallback={changedSelectValue.bind(this)}
                changedOperatorCallback={changedOperatorValue.bind(this)}
                changedSeMethodCallback={changedSeMethodValue.bind(this)}
              ></CustomSearchCard>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;