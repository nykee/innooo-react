import React from 'react';
import CustomDPie from '../../../componenets/D3Charts/CustomDPie'

class PercentCount extends React.Component {


    render() {
        let colorLists=['#9F86FF','#1CA8DD','#007AE1'];
        let data= [35,15,50,];

        return (
            <div>
                <CustomDPie colorLists={colorLists} data={data}/>

            </div>

        )
    }
}

export default PercentCount;