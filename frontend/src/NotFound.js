import React from 'react'

const NotFound = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '90vh', backgroundColor: '#f7fafc', paddingBottom:'10vh' }}>
            <div style={{ textAlign: 'center', maxWidth: '28rem' }}>
                <div style={{ fontSize: '5rem', fontWeight: 'bold', color: '#2d3748' }}>🚧</div>
                <div style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#2d3748' }}>404</div>
                <p style={{ color: '#718096', marginTop: '1rem' }}>Oops! Looks like the page you're looking for is lost.</p>
                
            </div>
        </div>

    )
}

export default NotFound