import React from "react";
import "../Styles/Quotes.css";

const Quotes = () => {
    return (
        <>
            <div className="divider-quotes"></div>
            <div className="main-quotes" id="quotes">
                <div className="quotes">
                    <div className="two-quotes">
                        <div className="quote">
                            <p className="quote-line"><span>"</span>If you can change your mind, you can change your life.</p>
                            <p className="author" >Brian Tracy</p>
                        </div>
                        <div className="quote">
                            <p className="quote-line"><span>"</span>Believe you can and you're halfway there.</p>
                            <p className="author">Brian Tracy</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="divider-quotes"></div>

        </>
    );
};

export default Quotes;
