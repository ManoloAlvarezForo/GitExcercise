import React from 'react';

const styles = {
    content: {
        display: 'flex',
        overflow: 'scroll',
        height: '100vh',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginTop: '60px'
    }
}

const CardList = ({ cards = [] }) => {
    return (
        <div style={styles.content}>
            <div style={{ width: '80%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
                {cards}
            </div>
        </div>
    )
}

export default CardList;