import React, { ReactDOM } from 'react';
import Button from '@mui/material/Button';

class AlarmClock extends React.Component {
    constructor() {
        super();
        this.state = {
            currentTime: '',
            alarmTime: '',
            alarm: false,
            snooze: false,
            submit: false
        };
        this.setAlarmTime = this.setAlarmTime.bind(this);
        this.onSnooze = this.onSnooze.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        this.clock = setInterval(
            () => this.setCurrentTime(),
            1000
        )
        this.interval = setInterval(
            () => this.checkAlarmClock(),
            1000)
    }

    componentWillUnmount() {
        clearInterval(this.clock);
        clearInterval(this.interval);
    }

    setCurrentTime() {
        this.setState({
            currentTime: new Date().toLocaleTimeString('en-Gb', { hour12: false })
        });
    }

    setAlarmTime(event) {
        event.preventDefault();
        const inputAlarmTimeModified = event.target.value + ':00'
        this.setState({
            alarmTime: inputAlarmTimeModified
        })
    }

    onSubmit(event) {
        console.log('submit clicked')
        this.setState({ submit: true });

    }
    onSnooze(event) {
        console.log('szooze clicked');
        this.setState({ snooze: true });
    }
    checkAlarmClock() {
        // console.log(this.state.snooze, 'here')
        if (this.state.snooze) {
            let str = this.state.alarmTime.split(":")[1];
            let minInt = ((parseInt(str) + 15) > 10) ? (parseInt(str) + 5).toString() : '0' + (parseInt(str) + 5).toString;
            let newStr = this.state.alarmTime.split(":")[0] + ':' + minInt + ':00';
            console.log(newStr, "set alram time");
            this.alarmMessage = "Your next alarm is at:        " + newStr;
            this.setState({ snooze: false, alarmTime: newStr, alarm: false })
        } else if (this.state.alarmTime === 'undefined' || !this.state.alarmTime) {
            this.alarmMessage = "Please set your alarm.";
        } else {
            this.alarmMessage = "Your next alarm is at:        " + this.state.alarmTime;
            if (this.state.currentTime === this.state.alarmTime) {
                //  alert("its time!");
                this.setState({ alarm: true });
            } else {
                console.log("not yet");
            }
        }
    }

    render() {
        //      console.log(this.state.alarmTime);
        return (
            <>
                {
                    (this.state.submit) ? (
                        <div style={{ color: 'white', textAlign: 'center', display: 'flex', alignItems: 'center', marginTop: '65%', fontSize: 24, fontWeight: 'bold' }}>
                            Please collect vitamin D from the dispenser!
                            </div>
                    ) :
                        <div style={{ color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 10 }}>
                            <h1 style={{ textAlign: 'center' }}>Take Vitamin D now! </h1>
                            <h2>It is {this.state.currentTime}
                            </h2>
                            <div style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}> {this.alarmMessage}  </div>
                            {
                                (this.state.alarmTime === 'undefined' || !this.state.alarmTime) && (
                                    <form>
                                        <input type="time" onChange={this.setAlarmTime}></input>
                                    </form>
                                )
                            }
                            {
                                (this.state.alarm) && (
                                    <div style={{ display: 'flex' }}>
                                        <Button
                                            variant="outlined"
                                            style={{
                                                background: 'black',
                                                color: 'white',
                                                fontWeight: 'bold',
                                                marginTop: 10,
                                                float: 'right'
                                            }}
                                            onClick={this.onSnooze}
                                        >
                                            Snooze
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            style={{
                                                background: 'white',
                                                color: 'black',
                                                fontWeight: 'bold',
                                                marginTop: 10,
                                                float: 'right',
                                                marginLeft: 20
                                            }}
                                            onClick={this.onSubmit}
                                        >
                                            Done
                                        </Button>
                                    </div>
                                )
                            }
                        </div>
                }
            </>
        );
    }
}

export default AlarmClock;