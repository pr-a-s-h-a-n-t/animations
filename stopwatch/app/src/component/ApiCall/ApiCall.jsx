import React, { useState, useEffect, useCallback } from "react";
import "./ApiCall.css";
// Mock data
const Api = {
  id: 1,
  currency: "AED",
  productImage:
    "https://d2co62zyg9wi44.cloudfront.net/media/subscription/Valeo-Advanced_Female_Blood_Test.png",
  productName: "Advanced Female Blood Test",
  shortDesc: "Detailed full body blood test from the comfort of your home.",
  longDesc:
    "Certified home sample collection + FREE health consultation. Get a comprehensive check-up and understand how your female hormones may be influencing your health with the guidance of a Valeo health expert.",
  description: [
    {
      imageUrl:
        "https://d2co62zyg9wi44.cloudfront.net/media/promotional_section/2/points_section/images/drop.svg",
      txt: "53 biomarkers tested",
    },
    {
      imageUrl:
        "https://d2co62zyg9wi44.cloudfront.net/media/promotional_section/2/points_section/images/drop.svg",
      txt: "At home blood sample collection",
    },
    {
      imageUrl:
        "https://d2co62zyg9wi44.cloudfront.net/media/promotional_section/2/points_section/images/drop.svg",
      txt: "Hormones, Cholesterol, Blood Sugar & More",
    },
    {
      imageUrl:
        "https://d2co62zyg9wi44.cloudfront.net/media/promotional_section/2/points_section/images/drop.svg",
      txt: "10 hours fasting required prior to testing",
    },
  ],

  purchaseType: {
    "One-time purchase": {
      id: 1001,
      retailPrice: 600,
      finalPrice: 550,
      discountType: "fixed",
    },
    "Subscribe & Save": {
      "2 months": {
        id: 101,
        retailPrice: 600,
        finalPrice: 600,
        discountType: "fixed",
      },
      "3 months": {
        id: 102,
        retailPrice: 600,
        finalPrice: 450,
        discountType: "fixed",
      },
      "4 months": {
        id: 103,
        retailPrice: 600,
        finalPrice: 350,
        discountType: "percentage",
      },
    },
  },
};

function ApiCall() {
  const [price, setPrice] = useState({
    retailPrice: null,
    newprice: null,
  });
  const [fetchedData, setFetchedData] = useState("");
  const [plan, setPlan] = useState("");
  const [subMonth, setSubMonth] = useState("select");
  const [discount, setDiscount] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setFetchedData(Api);
    }, 2000);
  }, []);

  const handleSubChange = (e, valueObject) => {
    // console.log(e.target.value, "sub", valueObject);

    console.log(e.target.value, "ssssssssss", valueObject);
    if (e.target.id === "sub_plans") {
      setPlan(e.target.value);
      if (valueObject.discountType === "fixed") {
        const totalDiscount =
          ((valueObject.retailPrice - valueObject.finalPrice) * 100) /
          valueObject.retailPrice;
        setDiscount(totalDiscount);
      }
    } else {
      setSubMonth(e.target.value);
      const { retailPrice, finalPrice, discountType } =
        valueObject[e.target.value];
      // console.log("retailPrice", retailPrice, "finalPrice", finalPrice);
      setPrice((prev) => ({
        ...prev,
        newprice: finalPrice,
        retailPrice: retailPrice,
      }));
      if (discountType === "fixed") {
        const totalDiscount = ((retailPrice - finalPrice) * 100) / retailPrice;
        setDiscount(totalDiscount);
      }
    }
  };

  return (
    <>
      <nav className="navbar  ">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Product</a>
          </li>
          <li>
            <a href="#">Cart</a>
          </li>
        </ul>
      </nav>
      <div className="container">
        <div className="_left-col">
          <img src={Api.productImage} width="100%" height="100%" alt="" />
        </div>
        <div className="_right-col">
          <div>
            <h1>{Api.productName}</h1>
            <p>{Api.shortDesc}</p>
          </div>
          {/* ---------make select dropdown which will have product subscription plans */}

          <div className="_decBox">
            <h4>Product Description</h4>
            <p>{Api.longDesc}</p>
            <div className="_description">
              {Api.description.map((item, index) => (
                <div className="_descriptionItem" key={index}>
                  <img src={item.imageUrl} alt="" />
                  <p>{item.txt}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="_dropdowns">
              {Object.keys(Api.purchaseType).map((key, index) =>
                key === "Subscribe & Save" ? (
                  <select
                    key={index}
                    name="plans"
                    id="sub_month"
                    value={subMonth}
                    disabled={plan && plan == "Subscribe & Save" ? false : true}
                    onChange={(e) => handleSubChange(e, Api.purchaseType[key])}
                  >
                    {Object.keys(Api.purchaseType[key]).map(
                      (childKey, childIndex) => (
                        <option key={childIndex} value={childKey}>
                          {childKey}
                        </option>
                      )
                    )}
                  </select>
                ) : (
                  <select
                    key={index}
                    name="plans"
                    id="sub_plans"
                    value={plan}
                    onChange={(e) => handleSubChange(e, Api.purchaseType[key])}
                  >
                    {Object.keys(Api.purchaseType).map((key, index) => (
                      <option
                        key={index}
                        value={
                          // index === 0 ? "onetimepurchase" : "subscribeandsave"
                          key
                        }
                      >
                        {key}
                      </option>
                    ))}
                  </select>
                )
              )}
            </div>
            <div className="_plans">
              {plan ? (
                <h3>
                  Selected Plan:{" "}
                  {plan === "subscribeandsave"
                    ? ` Subscribe & Save `
                    : "One-time purchase"}
                </h3>
              ) : (
                <h3>Please Select Plan</h3>
              )}
              {/* if discount type is fixed then give show discount   */}
              <div className="_price">
                <div className="_pw">
                  <h6>New Price: </h6>

                  <del>{price.retailPrice} $</del>
                </div>
                <h3>Price: {price.newprice} $ </h3>
                <h5>Total Discount: {discount && discount} %</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ApiCall;

// total profit:
/*    
        retailPrice: 600,
        finalPrice: 600,
        discountType: "fixed",

        formula: retailPrice - finalPrice * 100 / retailPrice

*/
