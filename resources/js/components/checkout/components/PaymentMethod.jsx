import React, { useState, useEffect } from "react";

function CheckoutPaymentMethods() {
    const [method, setMethod] = useState("credits");

    const changeHandler = (e) => {
        setMethod(e);
    };
    return (
        <div className="row">
            <div className="p-0 col-md-2">Select Payment Method:</div>
            <div className="p-0 col-md-2">
                <div className="form-check">
                    <input
                        checked={method === "credits"}
                        className="form-check-input"
                        type="radio"
                        value="credits"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        onChange={() => changeHandler("credits")}
                    />
                    <label className="form-check-label" for="flexRadioDefault1">
                        Credit Card
                    </label>
                </div>
            </div>
            <div className="p-0 col-md-1 mb-3">
                <div className="form-check">
                    <input
                        checked={method === "cash"}
                        className="form-check-input"
                        type="radio"
                        value="cash"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        onChange={() => changeHandler("cash")}
                    />
                    <label className="form-check-label" for="flexRadioDefault1">
                        Cash
                    </label>
                </div>
            </div>
            <div className="p-0 col-md-1">
                <div className="form-check">
                    <input
                        checked={method === "check"}
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        value="check"
                        onChange={() => changeHandler("check")}
                    />
                    <label className="form-check-label" for="flexRadioDefault1">
                        Check
                    </label>
                </div>
            </div>
            {method === "cash" ? (
                <div className="p-0 col-md-6">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Tenders:</span>
                        </div>
                        <div className="input-group-append">
                            <span className="input-group-text">$</span>
                        </div>
                        <input
                            type="text"
                            className="form-control"
                            aria-label="Amount (to the nearest dollar)"
                        />
                        <div className="input-group-append">
                            <span className="input-group-text">Change:</span>
                        </div>
                        <div className="input-group-append">
                            <span className="input-group-text">$</span>
                        </div>
                        <div className="input-group-append">
                            <span className="input-group-text">0.00</span>
                        </div>
                    </div>
                </div>
            ) : method === "check" ? (
                <div className="p-0 col-md-6">
                    <div className="input-group">
                        <span className="input-group-text" id="basic-addon1">
                            Check Info:
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                    </div>
                </div>
            ) : (
                <div className="p-0 col-md-6"></div>
            )}
            <div className=" mt-3 col-md-12"></div>
            <div className="col-md-4">
                <input
                    className="form-control"
                    type="text"
                    placeholder="Default input"
                />
            </div>
            <div className="col-md-4">
                <input
                    className="form-control"
                    type="email"
                    placeholder="Default input"
                />
            </div>
            <div className="col-md-4">
                <select className="form-control">
                    <option disabled selected>
                        Select...
                    </option>
                    <option>Previous Attendee</option>
                    <option>Friends/Words of mount</option>
                    <option>Facebook</option>
                    <option>Instagram</option>
                    <option>Tweeter</option>
                    <option>Email</option>
                    <option>Flyers/Signage</option>
                    <option>Radio</option>
                    <option>Others</option>
                </select>
            </div>
            <div className="col-md-12  mt-4">
                Order Notes
                <textarea
                    placeholder="Order Notes"
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                ></textarea>
            </div>
            <div className="col-md-3  offset-md-5 mt-4">
                <input
                    type="submit"
                    value="Place Order"
                    className="btn btn-primary btn-lg"
                />
            </div>
        </div>
    );
}

export default CheckoutPaymentMethods;
