import React, { useState, useEffect } from "react";
import SearchTicketTable from "./Table";
function CardSearchTicket() {
    const [search, setSearch] = useState("");
    const [value, setValue] = useState("");
    const searchTicket = (e) => {
        e.preventDefault();

        const found = "1139635697" === search ? true : false;
        setValue(found);
    };

    return (
        <>
            <div className="card mt-5">
                <div className="card-header">Search Tickets</div>
                <div className="card-body">
                    <form onSubmit={searchTicket}>
                        <div className="row">
                            <div className="col-md-4 col-4">
                                <h3>Ticket Code:</h3>
                            </div>
                            <div className="col-md-4 col-4">
                                <input
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="form-control form-control-lg"
                                    type="text"
                                    placeholder="Search Tickets..."
                                />
                            </div>
                            <div className="col-md-4 col-4">
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-lg"
                                >
                                    Search
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className="col-md-12 mt-5">
                        {value === true ? (
                            <SearchTicketTable />
                        ) : (
                            <h3>No Results Found!</h3>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardSearchTicket;
