import React from 'react';

import {BsFillTrashFill, BsFillPencilFill} from 'react-icons/bs';

import './Table.css'

export const Table = () => {
  return (
    <div className='table-wrapper'>
        <table className='table'>
            <thead>
                <tr>
                    <th>Name</th>                    
                    <th className='expand'>Description</th>                    
                    <th>Category</th>                    
                    <th>Actions</th>                    
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Dentes</td>                    
                    <td>Escovar os dentes</td>                    
                    <td>Pessoal</td>
                    <td>
                        <span className='actions'>
                            <BsFillTrashFill className='delete-btn'/>
                            <BsFillPencilFill/>
                        </span>
                    </td>                    
                </tr>
                <tr>
                    <td>Médico</td>                    
                    <td>Ir ao Hospital Lusiadas</td>                    
                    <td>Saúde</td>
                    <td>
                        <span className='actions'>
                            <BsFillTrashFill className='delete-btn'/>
                            <BsFillPencilFill/>
                        </span>
                    </td>                    
                </tr>
                <tr>
                    <td>Patuças</td>                    
                    <td>Levar ao Veterinário</td>                    
                    <td>Pets</td>
                    <td>
                        <span className='actions'>
                            <BsFillTrashFill className='delete-btn'/>
                            <BsFillPencilFill/>
                        </span>
                    </td>                    
                </tr>
            </tbody>
        </table>
    </div>
  )
}
