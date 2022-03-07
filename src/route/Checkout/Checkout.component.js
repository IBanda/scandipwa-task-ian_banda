import { Checkout as SourceCheckout } from "SourceRoute/Checkout/Checkout.component";
import ContentWrapper from "@scandipwa/scandipwa/src/component/ContentWrapper";

import "./Checkout.override.style";
import ProgressBar from "Component/ProgressBar";

const checkoutSteps = ["shipping", "review & payments", "success"];
export class Checkout extends SourceCheckout {
  state = {
    currentStep: 1,
  };
  componentDidUpdate(prevProps) {
    const { checkoutStep } = this.props;
    const { checkoutStep: prevCheckoutStep } = prevProps;

    if (checkoutStep !== prevCheckoutStep) {
      if (checkoutStep === "SHIPPING_STEP") {
        this.setState({ currentStep: 1 });
      } else if (checkoutStep === "BILLING_STEP") {
        this.setState({ currentStep: 2 });
      } else {
        this.setState({ currentStep: 3 });
      }
    }
  }

  render() {
    return (
      <main block="Checkout">
        <ProgressBar
          steps={checkoutSteps}
          currentStep={this.state.currentStep}
        />
        <ContentWrapper
          wrapperMix={{ block: "Checkout", elem: "Wrapper" }}
          label={__("Checkout page")}
        >
          {this.renderSummary(true)}
          <div block="Checkout" elem="Step">
            {this.renderTitle()}
            {this.renderGuestForm()}
            {this.renderStep()}
            {this.renderLoader()}
          </div>
          <div>
            {this.renderSummary()}
            {this.renderPromo()}
            {this.renderCoupon()}
          </div>
        </ContentWrapper>
      </main>
    );
  }
}

export default Checkout;
