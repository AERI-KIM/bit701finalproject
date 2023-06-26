import React, { useEffect, useState } from 'react';
import '../App.css';
import  Axios  from 'axios';
import MemberRowitem from './MemberRowitem';
import { Table } from '@mui/material';
function MemberList(props) {

    const [mlist,setMlist]=useState([]);

    //서버로 부터 목록을 가져오는 함수 
    const getlist=()=>{
        const  listUrl="/member/list";
        Axios.get(listUrl)
        .then(res=>{
            setMlist(res.data);
        })
    }

    //삭제 
    const deleteMember=(num)=>{
        const listUrl="/member/delete?num="+num;
        Axios.delete(listUrl)
        .then(res=>{
            //목록 다시 출력
            getlist();
        })
    }

    //처음 시작시 목록 가져오기
    useEffect(()=>{
        getlist();
    },[]);


    
    return (
        <div>

            <h2> 회원수 : {mlist.length} 명</h2>
            <Table className='table table-bordered' style={{width:'600px'}}>
                <tr style={{backgroundColor:'#ddd'}}>
                    <th style={{width:'40px'}}>번호</th>
                    <th style={{width:'80px'}}>회원명</th>
                    <th style={{width:'80px'}}>아이디</th>
                    <th style={{width:'200px'}}>주소</th>
                    <th style={{width:'100px'}}>가입일</th>
                    <th style={{width:'60px'}}>삭제</th>

                </tr>
                {
                    mlist.map((row,idx)=><MemberRowitem key={idx} row={row} onDelete={deleteMember}
                    idx={idx}/>)
                }
            </Table>
  
        </div>
    );
}

export default MemberList;