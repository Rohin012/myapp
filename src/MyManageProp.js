import React from 'react'

export const MyManagment = (data) => {
  return (
    <table>

    {

data.multileData.map((v,index)=>{

return(<tr><td>{v.firstName}</td><td>{v.lastName}</td>

        <td><button onClick={()=>{
            data.deleteInfo(index)

        }}>Delete</button></td>

        
<td><button onClick={()=>{
            data.editInfo(index)

        }}>edit</button></td>

</tr>)

})

}
    </table>
   
  )
}
