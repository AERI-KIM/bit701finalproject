import React from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
function BoardList(props) {

    const navi=useNavigate();
    const onWriteButtonEvent=()=>{
        if(sessionStorage.loginok==null){
            alert("먼저 로그인을 해주세요");
            navi("/login");
        }else{
            navi("/board/form");
        }
    }
    return (
        <div>
           <button type='button' className='btn btn-ouotline-sussce'
           style={{width:'100px',marginLeft:'100px'}} onClick={onWriteButtonEvent}>r글쓰기</button>
        </div>
    );
}

export default BoardList;