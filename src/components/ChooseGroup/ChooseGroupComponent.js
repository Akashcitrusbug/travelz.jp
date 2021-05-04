import React, { useState } from 'react';
import ChooseGroupItem from './ChooseGroupItem';
import Group from '../../json_data/group.json';
import { connect } from 'react-redux';
import { setCurrentPage } from '../../redux/actions';

function ChooseGroupComponent({currentpage}) {
    const [selectedGroup, setSelectedGroup] = useState([])
    const [groupError, setGroupError] = useState('')


    console.log(selectedGroup,'selectedGroup')

    const handleContinue = () => {
        let isValid = validate()
        console.log(isValid);
        if(isValid){
            currentpage({id:7, values: {selectedGroup}})
        }
    }

    const validate = () => {
        let isValid=true;
        console.log(selectedGroup.length)
        if(selectedGroup.length < 2){
            setGroupError({
                groupError:'Please select atleast 2 Group.'
            })
            isValid=false;
        }
        return isValid
    }

    const handleClick = grpname => {
        let selectedGroups = selectedGroup;

        if(!selectedGroups.includes(grpname)){
            selectedGroups.push(grpname);
        }else{
            selectedGroups.splice(selectedGroups.indexOf(grpname), 1);
        }
        console.log(selectedGroups, 'final');
        setSelectedGroup(selectedGroups)
    }
    return (
        <div className="common-div areas-div group-div">
                <div className="container">
                    <div className="row">
    
                        <div className="col-lg-12 col-md-12">        
    
                            <div className="common-card-div">
                                
                                <div className="heading-top-row">
                                    <div className="heading-div"> 
                                        <h2>Select Group to Follow</h2>
                                        <p>Select group and continue!</p>
                                    </div>
                                </div>

                                <div className="main-body-div">
                                    
                                    <div className="search-box-root">
                                        <div className="row get-row mr-minus-8">
                                            <div className="col-lg-12 col-md-12 plr-8">
                                                <div className="input-group input-group-30">
                                                    <input type="text" className="form-control" placeholder="Select Group to Follow" />
                                                    <div className="input-group-append">
                                                        <button className="btn btn-success btn-search"><i className="material-icons search-icons"> search </i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>        

                                    <div className="select-img-root most-img-root">
                                        <div className="row get-row mr-minus-8">
                                            <div className="col-lg-12 col-md-12 plr-8">
                                                <div className="heading-h4"><h4>Most popular Groups</h4>{selectedGroup}</div>
                                            </div>
                                        </div>
                                        {groupError ? <span style={{color: "red"}}>{groupError.groupError}</span> : ''}
                                        <div className="row get-row mr-minus-8">
                                            {
                                                Group.group.map((group, index)=>{
                                                   return <ChooseGroupItem 
                                                   key={index} 
                                                   groupdata={group}
                                                   index={index}  
                                                    onClick={(id) => handleClick(id)} 
                                                    selectedId={selectedGroup}
                                                   />
                                                })
                                            }

                                        </div>
                                    </div>

                                </div>
                                <div className="footer-bottom-row">
                                <div className="container">
                                    <div className="row mr-minus-8">
                                        <div className="col-lg-12 plr-8">
                                            <div className="button-row">
                                                <div className="btn-left-side justify-content-between"> 
                                                    <button className="btn btn-outline-primary btn-common btn-previous">
                                                        <i className="fe fe-arrow-left fe-icon"></i>
                                                        <span className="text-span">Previous</span>
                                                    </button>
                                                    <a href="#" className="btn btn-link btn-skip mr-30">Skip <span className="remove-mobile">to End of </span>Process!</a>
                                                </div>
                                                <div className="btn-right-side"> 
                                                    <button className="btn btn-primary btn-common btn-continue" onClick={handleContinue}>
                                                        <span className="text-span" >Continue</span>
                                                        <i className="fe fe-arrow-right fe-icon"></i>
                                                    </button>
                                                </div>    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            </div>
                            
                        </div>  
                        
                    </div>        
                </div>
            </div>
    )
}

const mapDispatchToProps = dispatch => ({
    currentpage : payload => dispatch(setCurrentPage(payload))
})

export default connect(null, mapDispatchToProps)(ChooseGroupComponent)

