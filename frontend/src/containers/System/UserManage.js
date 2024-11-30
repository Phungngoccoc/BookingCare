import React, { Component } from 'react';
import { connect } from 'react-redux';
import './UserManage.scss';
import { handleGetAllUser, createNewUserService, deleteUserService, editUserService } from '../../services/userService';
import ModalUser from './ModalUser';
import ModalEditUser from './ModalEditUser';
import { emitter } from '../../utils/emitter';
class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrayUser: [],
            isOpenModalUser: false,
            isOpenModalEditUser: false,
            userEdit: {},
        }
    }
    async componentDidMount() {
        await this.getAllUserFromReact();
    }

    getAllUserFromReact = async () => {
        let response = await handleGetAllUser('All');
        if (response && response.data.errCode === 0) {
            this.setState({
                arrayUser: response.data.users
            })
        }
    }

    handleAddNewUser = () => {
        // hien thi Modal
        this.setState({
            isOpenModalUser: true,
        })
    }

    toggleUserModal = () => {
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser,
        })
    }

    toggleModalEditUser = () => {
        this.setState({
            isOpenModalEditUser: !this.state.isOpenModalEditUser,
        })
    }

    createNewUser = async (data) => {
        try {
            let response = await createNewUserService(data);
            if (response && response.data.errCode !== 0) {
                alert(response.data.message);
            } else {

                await this.getAllUserFromReact();
                this.setState({
                    isOpenModalUser: false,
                })
                emitter.emit('EVENT_CLEAR_MODAL_DATA')
            }
        } catch (e) {
            console.log(e);
        }
        // console.log('check data from child: ',data)
    }

    handleDeleteUer = async (user) => {
        try {
            let response = await deleteUserService(user.id);
            if (response && response.data.errCode !== 0) {
                alert(response.data.errMessage)
            } else {
                alert(response.data.errMessage)
                await this.getAllUserFromReact();

            }
        } catch (e) {
            console.log(e);
        }
    }

    handleEditUser = (user) => {
        this.setState({
            isOpenModalEditUser: true,
            userEdit: user,
        })
    }

    editAUser = async (data) => {
        try {
            let response = await editUserService(data);
            if (response && response.data.errCode !== 0) {
                alert(response.data.message);
            } else {

                await this.getAllUserFromReact();
                emitter.emit('EVENT_CLEAR_MODAL_DATA')
                alert(response.data.message)
                this.setState({
                    isOpenModalEditUser: false,
                })
            }
        } catch (e) {
            console.log(e);
        }
        // console.log('check data from child: ',data)
    }

    render() {
        let arrayUsers = this.state.arrayUser;
        return (
            <div className='userContainer'>
                <ModalUser
                    isOpen={this.state.isOpenModalUser}
                    test={'abc'}
                    toggleFromParent={this.toggleUserModal}
                    createNewUser={this.createNewUser}
                />

                {this.state.isOpenModalEditUser &&
                    <ModalEditUser
                        isOpen={this.state.isOpenModalEditUser}
                        toggleFromParent={this.toggleModalEditUser}
                        userData={this.state.userEdit}
                        editUser={this.editAUser}
                    />}
                <div className="title text-center">Manage users </div>
                <div className='mx-4 mt-3'>
                    <button className='btn btn-primary btn-add-user' onClick={() => this.handleAddNewUser()} >
                        <i className="fas fa-plus"></i>
                        Add new user
                    </button>
                </div>
                <div className='userTable mt-3 mx-3 mx-4'>
                    <table id="customers">
                        <tr>
                            <th>Id</th>
                            <th>Email</th>
                            <th>Full Name</th>
                            <th>Address</th>
                            <th>Phonenumber</th>
                            <th>Gender</th>
                            <th>RoleId</th>
                            <th className='text-center'>Action</th>
                        </tr>

                        {arrayUsers && arrayUsers.map((item, index) => {
                            return (
                                <>
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.email}</td>
                                        <td>{item.fullname}</td>
                                        <td>{item.address}</td>
                                        <td>{item.phonenumber}</td>
                                        <td>{item.gender}</td>
                                        <td>{item.roleId}</td>
                                        <td className='text-center'><button className='btn-edit'
                                            onClick={() => { this.handleEditUser(item) }}><i className="fas fa-pencil-alt"></i></button>
                                            <button className='btn-delete'
                                                onClick={() => { this.handleDeleteUer(item) }}><i className="fas fa-trash"></i></button>
                                        </td>
                                    </tr>
                                </>
                            )
                        })
                        }


                    </table>
                </div>
            </div>

        );
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
