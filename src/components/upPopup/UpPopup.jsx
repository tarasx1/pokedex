import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveType } from '../../redux/pokemonReducer';

const UpPopup = () => {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const dispatch = useDispatch();
  const typeRef = useRef();
  const { activeType, types } = useSelector((state) => state.pokemon);

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  const toggleVisibleClose = (e) => {
    if (typeRef.current && typeRef.current.contains(e.target)) {
      return;
    }
    setVisiblePopup(false);
  };

  const handleActiveType = (e) => {
    console.log(e);
    if (e.currentTarget.outerText === 'All') {
      dispatch(setActiveType(null));
    } else {
      dispatch(setActiveType(e.currentTarget.outerText.toLowerCase()));
    }
    setVisiblePopup(false);
  };

  return (
    <div className="sort">
      <div className="sort__label" ref={typeRef} onClick={toggleVisiblePopup}>
        <svg
          className={visiblePopup ? 'rotated' : ''}
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортування за: {activeType ? activeType : 'All'}</b>
      </div>
      {visiblePopup ? (
        <div className="modal">
          <ul className="modalBody">
            <li onClick={handleActiveType}>All</li>
            <li onClick={handleActiveType}>{types[0][0].name}</li>
            <li onClick={handleActiveType}>{types[0][1].name}</li>
            <li onClick={handleActiveType}>{types[0][2].name}</li>
            <li onClick={handleActiveType}>{types[0][3].name}</li>
            <li onClick={handleActiveType}>{types[0][4].name}</li>
            <li onClick={handleActiveType}>{types[0][5].name}</li>
            <li onClick={handleActiveType}>{types[0][6].name}</li>
            <li onClick={handleActiveType}>{types[0][7].name}</li>
            <li onClick={handleActiveType}>{types[0][8].name}</li>
            <li onClick={handleActiveType}>{types[0][9].name}</li>
            <li onClick={handleActiveType}>{types[0][10].name}</li>
            <li onClick={handleActiveType}>{types[0][11].name}</li>
            <li onClick={handleActiveType}>{types[0][12].name}</li>
            <li onClick={handleActiveType}>{types[0][13].name}</li>
            <li onClick={handleActiveType}>{types[0][14].name}</li>
            <li onClick={handleActiveType}>{types[0][15].name}</li>
            <li onClick={handleActiveType}>{types[0][16].name}</li>
            <li onClick={handleActiveType}>{types[0][17].name}</li>
            <li onClick={handleActiveType}>{types[0][18].name}</li>
            <li onClick={handleActiveType}>{types[0][19].name}</li>
          </ul>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default UpPopup;
