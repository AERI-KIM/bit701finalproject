import React from 'react';
import { NavLink } from 'react-router-dom';
import noimg from '../image/noimage.jpg';


function BoardRowList(props) {
    const {idx,row,no,currentPage}=props;

    const photo1=process.env.REACT_APP_SMALL_BOARDURL1;
    const photo2=process.env.REACT_APP_SMALL_BOARDURL2;
    return (


            <tr>
                <td>{no-idx}</td>
                <td>
                    <NavLink to={`/board/detail/${row.num}/${currentPage}`} style={{textDecoration:'none',color:'black',cursor:'pointer'}}>
                        {/* 40*40 썸네일 이미지 나오게 하기  */}
                      
                       
                        {
                        row.photo==null? 
                          <img alt='' src={noimg} style={{ width: '40px', height: '40px' }} />
                          :  <img alt='' src={`${photo1}${row.photo}${photo2}`} />
                            }
                       <b> {row.subject} </b>
                    </NavLink>
                </td>
                <td>{row.myname}</td>
                <td>{row.writeday}</td>
                <td>{row.readcount}</td>
            </tr>

    );
}

export default BoardRowList;