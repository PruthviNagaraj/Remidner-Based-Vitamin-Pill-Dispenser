import React, { useState } from 'react';
import { Card, TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { firestore } from '../firebase';
import { addDoc, collection } from 'firebase/firestore';
import { Select, MenuItem, InputLabel, NativeSelect } from '@mui/material';
import { contains } from '@firebase/util';

const AddNewVitamins = () => {
    const [formData, setFormData] = useState('');
    const [formDate, setformDate] = useState('');
    const [formTime, setformTime] = useState('');
    const [formMonth, setformMonth] = useState('');

    const ref = collection(firestore, "vitaminName");

    const onSubmit = (e) => {
        console.log("save");
        let data = {
            vitamin: formData,
            day: formDate,
            month: formMonth,
            time: formTime
        }
        try {
            addDoc(ref, data);
        } catch {
            console.log(e);
        }
    }

    const handleChange = e => {
        // console.log(e.target.value);
        if (e.target.name === 'time'){
            setformTime(e.target.value);}
        else if (e.target.name === 'day'){
            setformDate(e.target.value);}
        else if (e.target.name === 'month'){
            setformMonth(e.target.value);}
        else {setFormData(e.target.value)}
    }

    const vitaminList = ["Select Vitamin", "Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D", "Vitamin E"];

    return (
        <div style={{ padding: 30 }}>
            <h2 style={{ color: 'white' }}>Add new vitamin</h2>
            <div style={{ color: 'white', fontWeight: 'bold' }}>Vitamin Name</div>
            <Card style={{ padding: 10, width: '90%' }}>
                {/* <TextField
                    id="outlined-basic"
                    variant="filled"
                    // defaultValue="Vitamin name"
                    onChange={(e) => handleChange(e)}
                /> */}
                <FormControl sx={{ minWidth: '100%' }}>
                    <NativeSelect
                        defaultValue={30}
                        inputProps={{
                            name: 'age',
                            id: 'uncontrolled-native',
                        }}
                        onChange={(e) => handleChange(e)}
                    >
                        {
                            vitaminList.map(each => (
                                <option key={each} value={each}>{each}</option>
                                ))
                        }
                        {/* <option value="Vitamin B">Vitamin B</option>
                        <option value="Vitamin C">Vitamin C</option> */}
                    </NativeSelect>
                </FormControl>
            </Card>
            <div style={{ marginTop: 20, color: 'white', fontWeight: 'bold' }}>Date and Time</div>
            <Card style={{ padding: 10, width: '90%' }}>
                <FormControl sx={{ width: '6ch', marginRight: '2ch' }}>
                    <TextField
                        id="outlined-basic"
                        variant="filled"
                        defaultValue="mm"
                        name='month'
                        onChange={(e) => handleChange(e)}
                    />
                </FormControl>
                <FormControl sx={{ width: '6ch', marginRight: '2ch' }}>
                    <TextField
                        id="outlined-basic"
                        variant="filled"
                        defaultValue="dd"
                        name='day'
                        onChange={(e) => handleChange(e)}

                    />
                </FormControl>
                <FormControl sx={{ width: '10ch' }}>
                    <TextField
                        id="outlined-basic"
                        variant="filled"
                        name='time'
                        defaultValue="hh:mm"
                        onChange={(e) => handleChange(e)}
                    />
                </FormControl>
            </Card>
            <Button
                variant="outlined"
                style={{
                    background: 'white',
                    color: 'black',
                    fontWeight: 'bold',
                    marginTop: 10,
                    float: 'right'
                }}
                onClick={onSubmit}
            >
                Submit
            </Button>
        </div>
    )
}

export default AddNewVitamins;