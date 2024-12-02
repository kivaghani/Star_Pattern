import React from 'react';


class Second extends React.Component {
    render() {
        const N = 5; 
        const rows = [];

        for (let i = 0; i < N; i++) {
            const stars = '*'.repeat(1 * (N - i));
            rows.push(stars);
        }

        return (
            <div className="pattern-container">
                {rows.map((row, index) => (
                    
                    <div key={index} className="pattern-row"><span className="big-star">{row}</span></div>
                ))}
            </div>
        );
    }
}

export default Second;
