
import LeftPanel from "./ProductDetailLeftPanel";
import RightPanel from "./ProductDetailRightPanel";
import "./ProductInsight.css";

export default function ProductInsight() {

  return (
    <div className="product_detail">
      <div className="leftpanel">
        <LeftPanel />
      </div>
      <div className="rightpanel">
        <RightPanel />
      </div>
    </div>
  );
}
