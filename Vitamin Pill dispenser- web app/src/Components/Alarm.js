import React from 'react';
import Button from '@mui/material/Button';

const Alarm = () => {
    return (
        <div style={{ padding: 30 }}>
            <h2 style={{ color: 'white' }}>Take Vitamin D now ! </h2>
            <div style={{ color: 'white', fontWeight: 'bold' }}>June 08, Wednesday</div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 40 }}>
                <h1 style={{ color: 'white', marginBottom: 30 }} >9:00</h1>
                <div>
                    <Button variant="outlined" style={{ color: 'white' }}>Snooze</Button>
                    <Button variant="contained" style={{ background: 'white', color: 'black', marginLeft: 20 }}>Done</Button>
                </div>
                <div style={{ fontWeight: 'bold', color: 'red', marginTop: 20 }}>Cancel</div>
            </div>
        </div >
    )
}

export default Alarm;