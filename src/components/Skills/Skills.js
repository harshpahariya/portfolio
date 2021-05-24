import React, { Component } from 'react';
import { Card } from 'antd';
import skills from './skills.json'

import Databases from './Databases';
import Languages from './Languages';
import Tools from './Tools';
import Frameworks from './Frameworks';

class Skills extends Component {

    render() {
        return (
            <div className='skills-section' style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
                <Card hoverable style={{margin:'1vh', width:'38vw'}}>
                    <Languages data={skills.Languages}/>
                </Card>
                <Card hoverable style={{margin:'1vh', width:'40vw'}}>
                    <Frameworks data={skills.Frameworks}/>
                </Card>
                <Card hoverable style={{margin:'1vh', width:'40vw'}}>
                    <Databases data={skills.Databases}/>
                </Card>
                <Card hoverable style={{margin:'1vh', width:'38vw'}}>
                    <Tools data={skills.Tools} />
                </Card>
            </div>
        )
    }
}

export default Skills
