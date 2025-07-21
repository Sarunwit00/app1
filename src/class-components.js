import React, { Component } from "react";

export default class Calender extends Component {
    getData() {
        const dayName = ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์']
        const monthName = [
            'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
            'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
        ]
        const data = new Date();
        const weekday = dayName[data.getDay()];
        const day = data.getDate();
        const month = monthName[data.getMonth()];
        const year = data.getFullYear() + 543;
        return `วัน${weekday} ที่ ${day} ${month} ${year}`;
    }

    render() {
        return (
            <div style={{ textAlign: 'center', marginTop: "20px" }}>
                {this.getData()}
            </div>
        )
    }
}
