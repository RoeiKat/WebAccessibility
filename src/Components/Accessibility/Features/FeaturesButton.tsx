import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";

const FeatureButton = function (props: {
  icon: IconDefinition;
  featureFunc: () => void;
  featureName: string;
}) {
  const { icon, featureFunc, featureName } = props;
  return (
    <Card
      className="col-5 mx-1 mt-1 mb-1 pt-3 d-flex align-items-center justify-content-center"
      onClick={featureFunc}
      style={{ fontSize: "16px", cursor: "pointer" }}
    >
      <span style={{ fontSize: "32px" }}>
        <FontAwesomeIcon icon={icon} />
      </span>
      <p className="mt-3">{featureName}</p>
    </Card>
  );
};

export default FeatureButton;
