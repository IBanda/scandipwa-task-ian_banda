import PropTypes from "prop-types";
import { PureComponent } from "react";

import "./ProgressBar.style";

export class ProgressBar extends PureComponent {
  static propTypes = {
    steps: PropTypes.arrayOf(PropTypes.string),
    currentStep: PropTypes.number,
  };

  render() {
    const { currentStep, steps } = this.props;
    return (
      <div block="ProgressBar">
        {steps.map((step, index) => {
          const activeClass = currentStep >= index + 1 ? "active" : "";
          return index < steps.length - 1 ? (
            <React.Fragment key={`${step}-${index}`}>
              <div block={`ProgresStroke ${activeClass}`} />
              <div block="ProgressDetail">
                <div block={`ProgressStepper  ${activeClass}`}>
                  {currentStep > index + 1 ? <span>&#x2713;</span> : index + 1}
                </div>
                <span block={`ProgressName ${activeClass}`}>{step}</span>
              </div>
            </React.Fragment>
          ) : null;
        })}
        <div
          block={`ProgresStroke ${
            currentStep === steps.length ? "active" : ""
          }`}
        />
      </div>
    );
  }
}

export default ProgressBar;
