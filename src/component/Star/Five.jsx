import React from 'react';

class Five extends React.Component {
    renderPattern() {
        const n = 5;
        const rows = [];

        for (let i = 0; i <= n; i++) {
            let row = [];
            for (let j = 1; j <= 2*i - 1; j++) {
                row.push( "*"+ " ");
            }
            rows.push( <div key={i} className="pattern-row"><span className="big-star">{row}</span></div>);
        }
        for (let i = 0; i <= n; i++) {
            let row = [];
            for (let j = 1; j <2*(n-i); j++) {
                row.push( "*"+ " ");
            }
            rows.push( <div key={i} className="pattern-row"><span className="big-star">{row}</span></div>);
        }
        return rows;
    }

    render() {
        return (
            <div className="pattern-container">
                {this.renderPattern()}
            </div>
        );
    }
}

export default Five;
