
import '../Css/Task.css'
export const Task = ({task,deleteTask,checkFunction}) =>
 {
   
  return (
    <div className="task">
        <ul>
            {task.map((e)=>(
            <li key={e.id}>
                <input type="checkbox"
                checked={e.checked}
                onChange={()=>checkFunction(e.id)}/>
                <label
                style={(e.checked)?{textDecoration:'line-through', color:'black'}:null}
                 onDoubleClick={()=>checkFunction(e.id)}>{e.e}</label>
                <button className='del' onClick={()=>deleteTask(e.id)}><i class="bi bi-trash3"></i></button>
            </li>

            ))}
        </ul>
    </div>
  )
}
