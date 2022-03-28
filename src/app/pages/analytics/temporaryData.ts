import { ChartType, PieChartModel } from "../../core/models/ChartTypeModel"; 
import { graphic } from 'echarts';
const emailSentBarChart: ChartType = {
    chart: {
        height: 340,
        type: 'bar',
        stacked: true,
        toolbar: {
            show: false
        },
        zoom: {
            enabled: true
        }
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '15%',
            endingShape: 'rounded'
        },
    },
    dataLabels: {
        enabled: false
    },
    series: [{
        name: 'Series A',
        data: [44, 55, 41, 67, 22, 43, 36, 52, 24, 18, 36, 48]
    }, {
        name: 'Series B',
        data: [13, 23, 20, 8, 13, 27, 18, 22, 10, 16, 24, 22]
    }, {
        name: 'Series C',
        data: [11, 17, 15, 15, 21, 14, 11, 18, 17, 12, 20, 18]
    }],
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    colors: ['#556ee6', '#f1b44c', '#34c38f'],
    legend: {
        position: 'bottom',
    },
    fill: {
        opacity: 1
    },
};

const monthlyEarningChart: ChartType = {
    chart: {
        height: 200,
        type: 'radialBar',
        offsetY: -10
    },
    plotOptions: {
        radialBar: {
            startAngle: -135,
            endAngle: 135,
            dataLabels: {
                name: {
                    fontSize: '13px',
                    color: undefined,
                    offsetY: 60
                },
                value: {
                    offsetY: 22,
                    fontSize: '16px',
                    color: undefined,
                    formatter: (val) => {
                        return val + '%';
                    }
                }
            }
        }
    },
    colors: ['#556ee6'],
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'dark',
            shadeIntensity: 0.15,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 65, 91]
        },
    },
    stroke: {
        dashArray: 4,
    },
    series: [67],
    labels: ['Series A'],
};

const transactions = [
    {
        id: '#SK2540',
        name: 'Neal Matthews',
        date: '07 Oct, 2019',
        total: '$400',
        status: '0',
        payment: ['fa-cc-mastercard', 'Mastercard'],
        index: 1
    },
    {
        id: '#SK2541',
        name: 'Jamal Burnett',
        date: '07 Oct, 2019',
        total: '$380',
        status: '1',
        payment: ['fa-cc-visa', 'Visa'],
        index: 2
    },
    {
        id: '#SK2542',
        name: 'Juan Mitchell',
        date: '06 Oct, 2019',
        total: '$384',
        status: '0',
        payment: ['fab fa-cc-paypal', 'Paypal'],
        index: 3
    },
    {
        id: '#SK2543',
        name: 'Barry Dick',
        date: '05 Oct, 2019',
        total: '$412',
        status: '1',
        payment: ['fa-cc-mastercard', 'Mastercard'],
        index: 4
    },
    {
        id: '#SK2544',
        name: 'Ronald Taylor',
        date: '04 Oct, 2019',
        total: '$404',
        status: 'Refund',
        payment: ['fa-cc-visa', 'Visa'],
        index: 5
    },
    {
        id: '#SK2545',
        name: 'Jacob Hunter',
        date: '04 Oct, 2019',
        total: '$392',
        status: '0',
        payment: ['fab fa-cc-paypal', 'Paypal'],
        index: 6
    }
];

const statData = [{
    icon: 'mdi mdi-dolly',
    title: 'Orders',
    value: '1,235'
}, {
    icon: 'bx bx-archive-in',
    title: 'Revenue',
    value: '$35, 723'
}, {
    icon: 'bx bx-purchase-tag-alt',
    title: 'Average Price',
    value: '$16.2'
}];
const pieChart: PieChartModel = {
    chart: {
        height: 400,
        type: 'pie',
    },
    series: [44, 55, 41, 17, 15,0,10,55],
    labels: ['On Route P/U', 'Arrived P/U', 'Dispatched', 'In Transit', 
    'Arrived D/O','On Hold', 'Warehouse', 'Delivered'],
    colors: ['#50a5f1', '#556ee6', '#f1734f', '#f1b44c', '#357756','#c3cbe4','#9f48da', '#34c38f'],
    legend: {
        show: true,
        position: 'bottom',
        orient: 'horizontal',
        floating: false,
        fontSize: '14px',
        offsetX: '-0',
        offsetY: '0'
    },
    responsive: [{
        breakpoint: 600,
        options: {
            chart: {
                height: 240
            },
            legend: {
                show: false
            },
        }
    }]
    
};

const earningLineChart: ChartType = {
    series: [{
        name: 'series1',
        data: [31, 40, 36, 51, 49, 72, 69, 56, 68, 82, 68, 76]
    }],
    chart: {
        height: 350,
        type: 'line',
        toolbar: 'true',
        dropShadow: {
            enabled: true,
            color: '#000',
            top: 18,
            left: 7,
            blur: 8,
            opacity: 0.2
        },
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#556ee6'],
    stroke: {
        curve: 'smooth',
        width: 3,
    },
};

const salesAnalyticsDonutChart: ChartType = {
    series: [56, 38, 26],
    chart: {
        type: 'donut',
        height: 200,
    },
    labels: ['In-Transit', 'Completed', 'Open'],
    colors: ['#556ee6', '#34c38f', '#f46a6a'],
    legend: {
        show: false,
    },
    plotOptions: {
        pie: {
            donut: {
                size: '70%',
            }
        }
    }
};


export {earningLineChart, salesAnalyticsDonutChart, emailSentBarChart, monthlyEarningChart, transactions, statData, pieChart };