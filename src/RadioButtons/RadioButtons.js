import Panel from "components/Panel/Panel";
import "./RadioButtons.css";

const RadioButtons = () => {
  const ButtonTitles = ({ props }) => {
    return (
      <div>
        <fieldset className="containerField">
          {props.map((item, index) => (
            <div className="radioItem">
              <input
                type="radio"
                id={`radio-${index}`}
                name="radio"
                value={item}
              />
              <label htmlFor={`radio-${index}`} className="radioLabels">{item}</label>
            </div>
          ))}
        </fieldset>
      </div>
    );
  };

  const btnNames = ["Apple", "Pear", "Orange"];

  return (
    <div>
      <Panel>
        <ButtonTitles props={btnNames} />
      </Panel>
    </div>
  );
};

export default RadioButtons;
