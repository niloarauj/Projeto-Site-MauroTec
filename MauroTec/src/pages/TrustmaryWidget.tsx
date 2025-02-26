import React, { useEffect } from "react";
const TrustmaryWidget: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widget.trustmary.com/plSMLOtRD";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script); 
    };
  }, []);
  return <div id="trustmary-widget"></div>; 
};
export default TrustmaryWidget;
