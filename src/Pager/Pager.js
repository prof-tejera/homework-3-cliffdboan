import { useState } from "react";
import "./Pager.css";

const Pager = () => {
  const [currentPage, setPage] = useState(1);
  const [selectedOption, setOption] = useState('1');

  const handleClick = (pageNum) => {
    if (pageNum === currentPage) {
      return;
    } else {
      if (pageNum >= 1 && pageNum <= totalPages) setPage(pageNum);
    }
  };

  const handleSelectChange = (e) => {
    const pageVal = e.target.value;
    setOption(pageVal);
    setPage(1);
  };

  const options = [
    { value: '1', label: '1' },
    { value: '5', label: '5' },
    { value: '10', label: '10' },
    { value: '25', label: '25' },
    { value: '50', label: '50' },
  ];

  const totalPages = Math.ceil(parseInt(selectedOption));

  const showPrev = currentPage > 1;
  const showNext = currentPage < totalPages;

  /* I tried feeding this buttons array down to the paginator class,
   * But it kept breaking, so I undid it and went with what was working,
   * even though it is long winded.
   */
  // const buttons = [
  //   {label: "<", conditiion: currentPage > 1},
  //   {label: "1", conditiion: true},
  //   {label: currentPage - 1, conditiion: true},
  //   {label: currentPage, conditiion: true},
  //   {label: currentPage + 1, conditiion: currentPage < totalPages},
  //   {label: totalPages, conditiion: currentPage < totalPages},
  //   {label: ">", conditiion: currentPage < totalPages},
  // ]

  return (
    <div>
      <label>
        Number of Pages: <select
          name="selectedNum"
          value={selectedOption}
          onChange={handleSelectChange}
        >
          <br />
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>

      <div className="paginator">
        {showPrev && (
          <button className="pager" onClick={() => (handleClick(currentPage - 1))}>{"<"}</button>
        )}
        {showPrev && (
          <button className="pager" onClick={() => (handleClick(1))}>1</button>
        )}
        {showPrev && (
          <button className="pager" onClick={() => (handleClick(currentPage - 1))}>{currentPage - 1}</button>
        )}
          <button className="pager" onClick={() => (handleClick(currentPage))}>{currentPage}</button>
        {showNext && (
          <button className="pager" onClick={() => (handleClick(currentPage + 1))}>{currentPage + 1}</button>
        )}
        {showNext && (
          <button className="pager" onClick={() => (handleClick(totalPages))}>{totalPages}</button>
        )}
        {showNext && (
          <button className="pager" onClick={() => (handleClick(currentPage + 1))}>{">"}</button>
        )}
        <p>Current Page: {currentPage}</p>
      </div>
    </div>
  )

};

export default Pager;
