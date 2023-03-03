import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import { CardContent, TextField } from '@mui/material';
import alarmIcon from '../assets/alarm.png';
import { firestore } from '../firebase';
import { addDoc, collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import deleteIcon from '../assets/delete.png';

const Schedule = () => {
    const [data, setData] = useState([]);

    const getFirestoreData = async () => {
        const val = collection(firestore, "vitaminName");
        const querySnapshot = await getDocs(val);
        const scheduleData = [];
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            const tempData = doc.data();
            tempData.id = doc.id;
            scheduleData.push(tempData);
            console.log(doc.id);
            //    console.log(doc.data());
            // console.log(doc.id, " => ", doc.data());
        });
        if (scheduleData.length > 0) setData(scheduleData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        getFirestoreData()
    }, []);

    const ref = collection(firestore, "vitaminName");

    const onDeleteClick = async (id) => {
        console.log(id, 'id');
        await deleteDoc(doc(ref, id));
        getFirestoreData();
    }
    console.log(data, 'data')

    const CustomCardComp = cardInfo => (
        <Card style={{ marginBottom: 10, width: '100%', fontWeight: 'bold' }}>
            <CardContent>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>{cardInfo.vitamin}</div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div>{cardInfo.month}/{cardInfo.day}/2022</div>
                        <div style={{ textAlign: 'center' }}>{cardInfo.time}</div>
                    </div>
                    <img src={deleteIcon} alt="deleteIcon" onClick={() => onDeleteClick(cardInfo.id)} />
                </div>
            </CardContent>
        </Card>
    )

    const reminderArr = [
        {
            vitaminName: 'Vitamin C',
            date: 'June 08, Wed',
            time: '11:50'
        },
        {
            vitaminName: 'Vitamin D',
            date: 'June 10, Fri',
            time: '18:00'
        },
        {
            vitaminName: 'Vitamin E',
            date: 'June 14, Sun',
            time: '8:00'
        }
    ]
    return (
        <div style={{ margin: "0 20px 0 20px" }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <h2 style={{ color: 'white', marginRight: 10 }}>
                    Reminders
                </h2>
                <img src={alarmIcon} alt="alarmIcon" />
            </div>
            {
                data.map((each) => (
                    CustomCardComp(each)
                ))
            }

            {/* <div style={{ float: 'right', marginRight: 25 }}>Show more {'>'}</div> */}
        </div>
    )
}

export default Schedule;