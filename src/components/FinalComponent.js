import React from 'react';
import { connect } from 'react-redux'

function FinalComponent({registerData}) {
    const style = {
            border: '1px solid #dddddd',
            textAlign: 'left',
            padding: '8px'
          }
    console.log('---------------------------------', registerData);
    return (
        <div style={{marginLeft:'150px', marginTop:'100px'}}>
            <div style={{ marginBottom:'50px'}}>
                <strong>User Selected Data</strong>
            </div>
            <table style={{borderCollapse: 'collapse',  width: '50%'}}>
                <tr>
                    <td style={{border:style.border, textAlign:style.textAlign, padding:style.padding}}>
                        <h1>Name</h1>
                    </td>
                    <td style={{border:style.border, textAlign:style.textAlign, padding:style.padding}}>
                        {registerData[0]['name']}
                    </td>
                </tr>
                <tr>
                    <td style={{border:style.border, textAlign:style.textAlign, padding:style.padding}}>
                        <h1>Email</h1>
                    </td>
                    <td style={{border:style.border, textAlign:style.textAlign, padding:style.padding}}>
                        {registerData[0]['email']}
                    </td>
                </tr>
                <tr>
                    <td style={{border:style.border, textAlign:style.textAlign, padding:style.padding}}>
                        <h1>Occupation</h1>
                    </td>
                    <td style={{border:style.border, textAlign:style.textAlign, padding:style.padding}}>
                        {registerData[1]['selectedOccupation']}
                    </td>
                </tr>
                <tr>
                    <td style={{border:style.border, textAlign:style.textAlign, padding:style.padding}}>
                        <h1>Age</h1>
                    </td>
                    <td style={{border:style.border, textAlign:style.textAlign, padding:style.padding}}>
                        {registerData[2]['selectedAge']}
                    </td>
                </tr>
                <tr>
                    <td style={{border:style.border, textAlign:style.textAlign, padding:style.padding}}>
                        <h1>Areas</h1>
                    </td>
                    <td style={{border:style.border, textAlign:style.textAlign, padding:style.padding}}>
                        {
                            registerData[3]['selectedArea'].map((area, index)=>{
                                {return `${area},`}
                            })
                        }
                    </td>
                </tr>
                <tr>
                    <td style={{border:style.border, textAlign:style.textAlign, padding:style.padding}}>
                        <h1>Users</h1>
                    </td>
                    <td style={{border:style.border, textAlign:style.textAlign, padding:style.padding}}>
                        {
                            registerData[4]['selectedUser'].map((user, index)=>{
                                {return `${user},`}
                            })
                        }
                    </td>
                </tr>
                <tr>
                    <td style={{border:style.border, textAlign:style.textAlign, padding:style.padding}}>
                        <h1>Groups</h1>
                    </td>
                    <td style={{border:style.border, textAlign:style.textAlign, padding:style.padding}}>
                        {
                            registerData[5]['selectedGroup'].map((group, index)=>{
                                {return `${group},`}
                            })
                        }
                    </td>
                </tr>
                <tr>
                    <td style={{border:style.border, textAlign:style.textAlign, padding:style.padding}}>
                        <h1>Password</h1>
                    </td>
                    <td style={{border:style.border, textAlign:style.textAlign, padding:style.padding}}>
                        {registerData[6]['password']}
                    </td>
                </tr>
                <tr>
                    <td style={{border:style.border, textAlign:style.textAlign, padding:style.padding}}>
                        <h1>What to do next </h1>
                    </td>
                    <td style={{border:style.border, textAlign:style.textAlign, padding:style.padding}}>
                        {registerData[7]['selectedWhatToDoNext']}
                    </td>
                </tr>
            </table>
            
        </div>
    )
}

const mapStateToProps = state => {
    return {
        registerData: state.registerData
    }
}

export default connect(mapStateToProps, null)(FinalComponent);
