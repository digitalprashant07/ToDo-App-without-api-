import React from 'react';
import { BsFillCheckCircleFill } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";

const toDo = ({toDo, markDone, setUpdateData, deleteTask}) => {

    
    return (
        <div>
            {toDo && toDo
                .sort((a, b) => a.id > b.id ? 1 : -1)
                .map((task, index) => {
                    return (
                        <React.Fragment key={task.id}>
                            <div className='col taskBg'>
                                <div className={task.status ? 'done' : ''}>
                                    <span className='taskNumber'>{index + 1}</span>
                                    <span className='taskText'>{task.title}</span>
                                </div>
                                <div className='iconsWrap'>
                                    <span title='Completed / Not Completed'
                                        onClick={() => markDone(task.id)}
                                    >
                                        <BsFillCheckCircleFill className='__icon' />
                                    </span>
                                    {task.status ? null : (
                                        <span title='Edit'
                                            onClick={() => setUpdateData({
                                                id: task.id,
                                                title: task.title,
                                                status: task.status ? true : false
                                            })}
                                        >
                                            <BsPencilSquare className='__icon' />
                                        </span>
                                    )}

                                    <span title='Delete'
                                        onClick={() => deleteTask(task.id)}
                                    >
                                        <BsTrash className='__icon' />
                                    </span>
                                </div>
                            </div>

                        </React.Fragment>
                    )
                })
            }
        </div>
    )
}

export default toDo;