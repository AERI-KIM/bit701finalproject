import React, { useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import  Axios  from 'axios';
function LoginForm(props) {
    const [myid,setMyid]=useState('');
    const [mypass,setMypass]=useState('');
    const navi=useNavigate();


    //submit event
    const onSubmitLogin=(e)=>{
        e.preventDefault();//기본 이벤트 무효화
        const url=`/member/login?myid=${myid}&mypass=${mypass}`;
        Axios.get(url)
        .then(res=>{
            if(res.data.success==='yes'){
                /* 
                localStorage: 직접 지우기 전에는 브라우저에 남아 있음 
                SessionStorage: 브라우저 닫으면 지워짐
                */
               sessionStorage.loginok="yes";
               sessionStorage.myname=res.data.myname;
               sessionStorage.myid=myid;
                navi("/");
                window.location.reload(); //새로 고침
            }else{
                alert("아이디나 비밀번호가 맞지 않습니다")
                sessionStorage.loginok="no";
                sessionStorage.myname="";
                sessionStorage.myid="";
            }
        })
    }
    return (
        <div className='login'>
            <form onSubmit={onSubmitLogin}>
                <table className='table'>
                <tr>
                            <th style={{width:'100px',backgroundColor:'#b0e0e6'}}>아이디</th>
                            <td className='input-group'>
                                <input type='text' className='form-control'
                                placeholder='아이디' required autoFocus
                                value={myid}
                                 onChange={(e)=>setMyid(e.target.value)}/>

                            </td>
                        </tr>
                        <tr>
                            <th style={{width:'100px',backgroundColor:'#b0e0e6'}}>비밀번호</th>
                            <td>
                                <input type='password' className='form-control'
                                 required style={{width:'120px'}}
                                value={mypass} onChange={(e)=>setMypass(e.target.value)}/>
                            </td>
                        </tr>

                        <tr>
                            <td colSpan={2} className='table-danger' align='center'>
                                <button type='submit' className='btn btn-default' style={{width:'150px'}}>회원 로그인</button>
                            </td>
                        </tr>
                </table>
            </form>
        </div>
    );
}

export default LoginForm;