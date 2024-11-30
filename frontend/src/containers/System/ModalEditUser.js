import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './ModalEditUser.scss'
import _ from 'lodash';

class ModalEditUser extends Component {

    constructor(props){
        super(props);
        this.state = {
            id:'',
            email: '',
            password: '',
            fullname: '',
            address: '',
            phonenumber:'',
            gender: 'Nam',
            roleId: '1',
        }
       
    }

    componentDidMount() {
        let user = this.props.userData;
        //let { userData } = this.props;
        if(user && !_.isEmpty(user)){
            this.setState({
                id: user.id,
                email: user.email,
                fullname: user.fullname,
                address: user.address,
                phonenumber: user.phonenumber,
                gender: user.gender,
                roleId: user.roleId
            })
        }
        // console.log('didmount edit modal', this.props.userData)
    }

    toggle = () => {
        this.props.toggleFromParent()
    }

    handleOnChangeInput = (event,id) => {
        //bad
        //this.state.email = this.state.['email']        
        // this.state[id] = event.target.value;
        // this.setState({
        //     ...this.state,
        // })
        // console.log(event.target.value);
        
        //good
        let copyState  = {...this.state};
        copyState[id] = event.target.value;

        this.setState({
            ...copyState,
        })
        // console.log('copyState: ',copyState)
        // console.log('event 1: ', event.target.value, id)
    }

    checkInput = () => {
        let arrayInput = ['email','fullname','address','phonenumber','gender','roleId'];
        for(let i = 0;i<arrayInput.length;i++)
        {
            if(!this.state[arrayInput[i]]){
                alert('Missing parameter ' + arrayInput[i])
                return false;  
            }
        }
        return true;
    }

    handleSaveUser = () => {
        if(this.checkInput() === true)
        {
            //call API
            this.props.editUser(this.state);
            // console.log(this.state);
        }
        
    }


    render() {
        // console.log(this.props)
        return (
        <Modal isOpen={this.props.isOpen} 
        toggle={() => {this.toggle()}} 
        className={'abc'} size="lg"
        // centered
        >
            <ModalHeader toggle={() => {this.toggle()}}>Edit User</ModalHeader>
            <ModalBody>
        <div className="container">
            <div className=''>
                <div className='email'>
                    <label for="inputAddress">Email</label>
                    <input type="text" onChange={(event) => {this.handleOnChangeInput(event,'email')}} 
                    className="form-control" id="inputAddress" name="email" placeholder="example@gmail.com"
                    value={this.state.email} disabled/>
                </div>
            </div>

            <div className='inputUser'>
                <div className='fullname'>
                        <label for="inputAddress">Fullname</label>
                        <input type="text" onChange={(event) => {this.handleOnChangeInput(event,'fullname')}} 
                        className="form-control" id="inputAddress" name="fullname" placeholder="Jone Smith"
                        value={this.state.fullname}/>
                    </div>
                    <div className='address'>
                        <label for="inputAddress">Address</label>
                        <input type="text" onChange={(event) => {this.handleOnChangeInput(event,'address')}}
                         className="form-control" id="inputAddress" name="address" placeholder="1234 Main St"
                         value={this.state.address}/>
                </div>
            </div>

            <div className='inputUser'>
                <div className='phonenumber'>
                        <label for="inputAddress">Phonenumber</label>
                        <input type="text" onChange={(event) => {this.handleOnChangeInput(event,'phonenumber')}}
                         className="form-control" id="inputAddress" name="phonenumber" placeholder="1234132123"
                         value={this.state.phonenumber}/>
                    </div>
                <div className='gender'>
                        <label for="inputAddress">Gender</label>
                        <select onChange={(event) => {this.handleOnChangeInput(event,'gender')}}
                         className="form-control" id="inputAddress" name="gender"
                         value={this.state.gender}>
                            <option value={'nam'}>Nam</option>
                            <option value={'nữ'}>Nữ</option>
                        </select>
                </div>
                <div className='roleId'>
                        <label for="inputAddress">RoleId</label>
                        <select onChange={(event) => {this.handleOnChangeInput(event,'roleId')}} 
                        className="form-control" id="inputAddress" name="roleId"
                        value={this.state.roleId} disabled>
                            <option value={'1'}>Admin</option>
                            <option value={'2'}>Doctor</option>
                            <option value={'3'}>Patient</option>
                        </select>
                </div>
            </div>
            
        </div>
            </ModalBody>
            <ModalFooter>
                <Button color="primary"
                 className='btn-create' 
                 onClick={() => {this.handleSaveUser()}}
                 >Save Change</Button>{' '}
                <Button color="secondary" className='btn-cancel' onClick={() => {this.toggle()}}>Cancel</Button>
            </ModalFooter>
        </Modal>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);


