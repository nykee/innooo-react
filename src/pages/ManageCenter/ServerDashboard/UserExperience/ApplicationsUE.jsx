import React from 'react';
import CommonHeader from "../CommonHeader";
import {Col, Row} from "antd";
import CustomLegend from "../CustomLegend";
import CommonChartConfig from '../CommonChartConfig'
import AreaChart from "../../../../componenets/Echarts/AreaChart";
let  Mock = require('mockjs');


class ApplicationsUE extends React.Component {
    constructor() {
        super();
        let dataFake_1 =[];
        let dataFake_2 =[];
        let dataFake_3 =[];
        for(let i =0;i<4;i++){
            dataFake_1.push(Mock.mock(
                {"number|10-20":20}
            ).number);
        }
        for(let i =0;i<4;i++){
            dataFake_2.push(Mock.mock(
                {"number|30-40":40}
            ).number);
        }
        for(let i =0;i<4;i++){
            dataFake_3.push(Mock.mock(
                {"number|60-70":70}
            ).number);
        }
        this.state = {
            sData_1:dataFake_1,
            sData_2:dataFake_2,
            sData_3:dataFake_3,
        };
    }

    componentDidMount() {
        setInterval(()=>{
            let sData_1 = this.state.sData_1,
                sData_2 = this.state.sData_2,
                sData_3 = this.state.sData_3;
            let mockData_1 =Mock.mock(
                {"number|10-20":20}
            ).number;
            let mockData_2 =Mock.mock(
                {"number|30-40":40}
            ).number;
            let mockData_3 =Mock.mock(
                {"number|60-70":70}
            ).number;
            function processArray(array,data) {
                array.push(data);
                array =array.slice(1,array.length);
                return array;
            }
            sData_1 = processArray(sData_1,mockData_1);
            sData_2 = processArray(sData_2,mockData_2);
            sData_3 = processArray(sData_3,mockData_3);
            this.setState({
                sData_1:sData_1,
                sData_2:sData_2,
                sData_3:sData_3
            })
        },1000)

    }

    render() {
        let legends=[
            {id:1,color:'#0CBFF8',name:'community.ru.com',value:this.state.sData_1[this.state.sData_1.length-1]},
            {id:2,color:'#A17171',name:'www.ru.com',value:this.state.sData_2[this.state.sData_2.length-1]},
            {id:3,color:'#3165CD',name:'support.ru.com',value:this.state.sData_3[this.state.sData_3.length-1]},
        ];

        CommonChartConfig.series=[
            {
                name:'端口连接率',
                type:'line',
                symbol:'none', //去掉折线上的点标注
                smooth:false,
                itemStyle: {
                    normal:
                        {
                            areaStyle: {
                                type: 'default',
                                color:'rgba(42,82,95,1)'
                            },
                            lineStyle:{
                                color:'#0CBFF8'
                            }
                        }
                },
                data:this.state.sData_1,

            },
            {
                name:'在途量',
                type:'line',
                symbol:'none', //去掉折线上的点标注
                smooth:false,
                itemStyle: {
                    normal:
                        {
                            areaStyle: {
                                type: 'default',
                                color:'rgba(66,59,59,1)'},
                            lineStyle:{
                                color:'#A17171'
                            }
                        }
                }
                ,
                data:this.state.sData_2
            },
            {
                name:'库存量',
                type:'line',
                symbol:'none', //去掉折线上的点标注
                smooth:false,
                itemStyle: {
                    normal:
                        {
                            areaStyle: {
                                type: 'default',
                                color:'rgba(56,70,83,1)'},
                            lineStyle:{
                                color:'#3165CD'
                            }
                        }
                },

                data:this.state.sData_3
            }


        ];
        let chartOption =CommonChartConfig;
        return (
            <div className="box-container">
                <CommonHeader title="APPLICATIONS | 3 MOST ACTIVE" titleSpan={18} lineSpan={6}/>
                <Row className="box-body">
                    <Col span={5} offset={19}>
                        <span>Reload</span>
                    </Col>
                    <Col span={24}>
                        <CustomLegend legends={legends} />

                    </Col>
                    <Col span={24}>
                        <AreaChart chartOption={chartOption} chartHeight={200} chartID="APP-Area"/>

                    </Col>

                </Row>
            </div>

        )
    }
}

export default ApplicationsUE;