import React from 'react';

class First extends React.Component {
    renderPattern() {
        const N = 5; 
        const rows = [];

        for (let i = 0; i < N; i++) {
            let spacesBefore = " ".repeat(N - i - 1);
            let stars = "*".repeat(1 * i + 1);

            let row = <div key={i} className="pattern-row"><span className="big-star">{spacesBefore}{stars}</span></div>;
            rows.push(row);
        }
        return rows;    
    }

       render(){
        return (
            <div className="pattern-container">
              {this.renderPattern()}
            </div>
        );
    }
}

export default First;