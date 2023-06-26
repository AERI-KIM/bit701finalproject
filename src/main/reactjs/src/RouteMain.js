import React from 'react';
import { Home, Menu } from './components';
import { Route, Routes } from 'react-router-dom';
import { LoginForm, MemberForm, MemberList } from './member';
import BoardForm from './board/BoardForm';
import BoardList from './board/BoardList';
import errorimg from './image/dou.png';
import BoardDetailPage from './board/BoardDetailPage';

function RouteMain(props) {
    return (
        <div >
            <Menu/>
            <br style={{clear:'both'}} />
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<LoginForm/>}/>
                
                <Route path='/member'>
                    <Route path='form' element={<MemberForm/>}/>
                    <Route path='list' element={<MemberList/>}/>
                </Route>

                <Route path='/board'>
                    <Route path='form' element={<BoardForm/>}/>
                    <Route path='list' element={<BoardList/>}/>
                    <Route path='list/:currentPage' element={<BoardList/>}/>
                    <Route path='detail/:num/:currentPage' element={<BoardDetailPage/>}/>
                </Route>

                <Route path='*' element={               
                     <div>
                        <h1>돌아가</h1>
                        <img alt='' src={errorimg} />
                    </div>
                }/>
            </Routes>
        </div>
    );
}

export default RouteMain;