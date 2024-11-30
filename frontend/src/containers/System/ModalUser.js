import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './ModalUser.scss'
import { emitter } from '../../utils/emitter';
class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            fullname: '',
            address: '',
            phonenumber: '',
            gender: 'Nam',
            roleId: '1',
        }
        this.listenToEmitter();
    }

    listenToEmitter() {
        emitter.on('EVENT_CLEAR_MODAL_DATA', () => {
            // console.log('listen emitter from parent', data)
            //reset state
            this.setState({
                email: '',
                password: '',
                fullname: '',
                address: '',
                phonenumber: '',
                gender: 'Nam',
                roleId: '1',
            })
        })

    } //bus event

    componentDidMount() {
    }

    toggle = () => {
        this.props.toggleFromParent()
    }

    handleOnChangeInput = (event, id) => {
        //bad
        //this.state.email = this.state.['email']        
        // this.state[id] = event.target.value;
        // this.setState({
        //     ...this.state,
        // })
        // console.log(event.target.value);

        //good
        let copyState = { ...this.state };
        copyState[id] = event.target.value;

        this.setState({
            ...copyState,
        })
        // console.log('copyState: ',copyState)
        // console.log('event 1: ', event.target.value, id)
    }

    checkInput = () => {
        let arrayInput = ['email', 'password', 'fullname', 'address', 'phonenumber', 'gender', 'roleId'];
        for (let i = 0; i < arrayInput.length; i++) {
            if (!this.state[arrayInput[i]]) {
                alert('Missing parameter ' + arrayInput[i])
                return false;
            }
        }
        return true;
    }

    handleAddNewUser = () => {
        if (this.checkInput() === true) {
            //call API
            this.props.createNewUser(this.state);
            // console.log(this.state);
        }

    }


    render() {
        return (
            <Modal isOpen={this.props.isOpen}
                toggle={() => { this.toggle() }}
                className={'abc'} size="lg"
            // centered
            >
                <ModalHeader toggle={() => { this.toggle() }}>Create A User</ModalHeader>
                <ModalBody>
                    <div className="container">
                        <div className='inputUser'>
                            <div className='email'>
                                <label for="inputAddress">Email</label>
                                <input type="text" onChange={(event) => { this.handleOnChangeInput(event, 'email') }}
                                    className="form-control" id="inputAddress" name="email" placeholder="example@gmail.com"
                                    value={this.state.email} />
                            </div>
                            <div className='password'>
                                <label for="inputAddress">Password</label>
                                <input type="password" onChange={(event) => { this.handleOnChangeInput(event, 'password') }}
                                    className="form-control" id="inputAddress" name="password" placeholder="Password"
                                    value={this.state.password} />
                            </div>
                        </div>

                        <div className='inputUser'>
                            <div className='fullname'>
                                <label for="inputAddress">Fullname</label>
                                <input type="text" onChange={(event) => { this.handleOnChangeInput(event, 'fullname') }}
                                    className="form-control" id="inputAddress" name="fullname" placeholder="Jone Smith"
                                    value={this.state.fullname} />
                            </div>
                            <div className='address'>
                                <label for="inputAddress">Address</label>
                                <input type="text" onChange={(event) => { this.handleOnChangeInput(event, 'address') }}
                                    className="form-control" id="inputAddress" name="address" placeholder="1234 Main St"
                                    value={this.state.address} />
                            </div>
                        </div>

                        <div className='inputUser'>
                            <div className='phonenumber'>
                                <label for="inputAddress">Phonenumber</label>
                                <input type="text" onChange={(event) => { this.handleOnChangeInput(event, 'phonenumber') }}
                                    className="form-control" id="inputAddress" name="phonenumber" placeholder="1234132123"
                                    value={this.state.phonenumber} />
                            </div>
                            <div className='gender'>
                                <label for="inputAddress">Gender</label>
                                <select onChange={(event) => { this.handleOnChangeInput(event, 'gender') }}
                                    className="form-control" id="inputAddress" name="gender"
                                    value={this.state.gender}>
                                    <option value={'nam'}>Nam</option>
                                    <option value={'nữ'}>Nữ</option>
                                </select>
                            </div>
                            <div className='roleId'>
                                <label for="inputAddress">RoleId</label>
                                <select onChange={(event) => { this.handleOnChangeInput(event, 'roleId') }}
                                    className="form-control" id="inputAddress" name="roleId"
                                    value={this.state.roleId}>
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
                        onClick={() => { this.handleAddNewUser() }}
                    >Create</Button>{' '}
                    <Button color="secondary" className='btn-cancel' onClick={() => { this.toggle() }}>Cancel</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);


