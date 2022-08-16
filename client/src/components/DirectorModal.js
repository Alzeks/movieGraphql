import {useState} from 'react'
import {ADD_DIRECTOR} from '../mutations/director'
import {GET_DIRECTORS} from '../query/director'
import {useMutation} from '@apollo/client'

const DirectorModal = () => {
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  let age1=67;
  const [addDirector] = useMutation(
    ADD_DIRECTOR, {variables: {name: name, age: age1},
    refetchQueries: [{query: GET_DIRECTORS}]
})
const onSubmit = (e) =>  {
  e.preventDefault();
  if(name.length < 2 || age.length < 2)
  {alert('you must fill fields'); return null}
     addDirector()
}

  return (
<div>
<button type="button" class="btn btn-secondary"
       data-bs-toggle="modal" data-bs-target="#AddModal">
       Add director</button>

<div className="modal fade" id="AddModal"
    aria-labelledby="AddModal" aria-hidden="true">
  <div className="modal-dialog ">
    <div className="modal-content bg-secondary">
      <div className="modal-header">
        <h5 className="modal-title" id="AddModal">Add director title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">X</button>
      </div>
      <div className="modal-body">
      <div className='bg-danger'>{''}</div>
<form onSubmit={onSubmit}>
    <div className='mb-2'>
      <label className='form-label'>Name!</label>
      <input type='text' className='form-control' id='name'
      value={name} onChange={(e) => setName(e.target.value)}/>
    </div>
    <div className='mb-2'>
      <label className='form-label'>Age</label>
      <input type='number' className='form-control'
      value={age} onChange={(e) => setAge(e.target.value)}/>
   </div>
</form>
   <button type="submit" className="btn btn-primary"
         data-bs-dismiss='modal' onClick={(e)=> onSubmit(e)}
         >Submit</button>
</div>

      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-primary"
        data-bs-dismiss='modal'onClick={(e)=> onSubmit(e)}
        >Update</button>
      </div>
    </div>
  </div>
</div>
</div>
)
}
export default DirectorModal;
