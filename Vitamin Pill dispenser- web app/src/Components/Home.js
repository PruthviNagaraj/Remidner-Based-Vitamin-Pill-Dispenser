import React, { useState, useEffect } from 'react';
// import BasicCard from '../Components/UI/Card';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import scheduleIcon from '../assets/schedule.png';
import pillIcon from '../assets/pillIcon.png';
import clockIcon from '../assets/clock.png';

const Home = props => {
    const [viewEditSchedule, setViewEditSchedule] = useState(false);

    useEffect(() => {
        if (viewEditSchedule) {
            props.onDisplaySchedule(viewEditSchedule)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [viewEditSchedule])

    const flexCenter = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontWeight: 'bold'
        // justifyContent: 'center'
    }

    const onViewEditSchedule = () => {
        console.log('view edit schedule');
        setViewEditSchedule(true);
    }


    return (
        <div style={{ margin: '60px 20px 0 20px' }}>
            <h2 style={{ marginBottom: 90, color: 'white' }}>Welcome back Jane!</h2>
            <div style={flexCenter}>
                <Card
                    sx={{
                        minWidth: 275, marginBottom: 5,
                    }}
                    onClick={onViewEditSchedule}
                >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginRight: 10 }}>
                        <CardContent>View/Delete Vitamin Schedule</CardContent>
                        <img src={scheduleIcon} alt="scheduleIcon" />
                    </div>
                </Card>
                <Card
                    sx={{
                        minWidth: 275, marginBottom: 5,
                    }}
                    onClick={() => props.addNewVitamis(true)}
                >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginRight: 10 }}>
                        <CardContent>Add new Vitamins</CardContent>
                        <img src={pillIcon} alt="scheduleIcon" />
                    </div>
                </Card>
                <Card
                    sx={{
                        minWidth: 275, marginBottom: 5,
                    }}
                    onClick={() => props.onAlarm(true)}
                >
                    <CardContent>Pill alarm</CardContent>
                </Card>
            </div>
        </div>
    )
}

export default Home;