
import  Axios  from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function BoardDetailPage(props) {
    const [dto,setDto]=useState({});
    const {num,currentPage}=useParams();

    const navi=useNavigate();

    const photo1=process.env.REACT_APP_BOARDURL;
    const myid=sessionStorage.myid;
    const loginok=sessionStorage.loginok;

    /* const selectDate=()=>{
        const url=`/board/detail?num=${num}`;
        Axios.get(url)
        .then(res=>{
            setDto(res.data);
        })
    }

    useEffect(()=>{
        selectDate();
    },[]); */

    const selectData=useCallback(()=>{
        const url=`/board/detail?num=${num}`;
        Axios.get(url)
        .then(res=>{
            setDto(res.data);
        })
    },[num])
    
    useEffect(()=>{
         selectData();       
     },[selectData]); 

    return (
        <div style={{marginRight:'30px'}}>
            <h3><b>{dto.subject}</b></h3>
            <h6>
                <span>작성자 : {dto.myname}({dto.myid})</span>
                <span style={{float:'right',color:'gray'}}>
                    조회 &nbsp; {dto.readcount}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {dto.writeday}
                </span>
            </h6>
            {

                dto.photo==null?'':
                <img alt='' src={`${photo1}${dto.photo}`}
                style={{border:'1px solid gray',maxWidth:'500px'}}/>
            }
            <br/><br/>
            <pre>{dto.content}</pre>
            <br/>
            <div>
                <button type='button'  className="btn btn-outline-info" style={{width:'80px',marginRight:'5px'}}
                   onClick={()=>navi("/board/form")}> 글쓰기</button>

                <button type='button'  className="btn btn-outline-info" style={{width:'80px',marginRight:'5px'}}
                   onClick={()=>navi("/board/list/1")}> 목록</button>

                {
                    loginok!=null && myid===dto.myid?
                    <button type='button' className='btn btn-outline-info' style={{width:'80px',marginRight:'5px'}}
                    onClick={()=>{
                            const url=`/board/delete?num=${dto.num}`;
                            Axios.delete(url)
                            .then(res=>{
                                //목록으로 이동 
                                navi(`/board/list/${currentPage}`);
                            })
                        

                    }}>삭제</button>:''

                }

{
                    loginok!=null && myid===dto.myid?
                    <button type='button' className='btn btn-outline-info' style={{width:'80px',marginRight:'5px'}}
                    onClick={()=>{

                    }}>수정</button>:''

                }
            </div>
        </div>
    );
}

export default BoardDetailPage;