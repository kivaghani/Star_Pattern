import React from 'react';

class Four extends React.Component {
    renderPattern() {
        const n = 5;
        const rows = [];

        for (let i = 0; i < n; i++) {
            let row = [];
            for (let j = 1; j <= n - i; j++) {
                row.push(j + " ");
            }
            rows.push( <div key={i} className="pattern-row"><span className="big-star">{row}</span></div>);
        }
        return rows;
    }

    render() {
        return (
            <div className="pattern-containers">
                {this.renderPattern()}
            </div>
        );
    }
}

export default Four;
