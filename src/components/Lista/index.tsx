import React from 'react';

function Lista() {
    const tarefas = [
        {
        tarefa: 'React',
        tempo: '02:00:00'
        },
        {
        tarefa: 'JavaScript',
        tempo: '01:00:00'
        },
        {
        tarefa: 'TypeScript',
        tempo: '00:05:00'
        }]
    return (
        <aside>
            <div>
                <ul>
                    {tarefas.map((item, index) => (
                        <div>
                            <h3>{item.tarefa}</h3>
                            <p>{item.tempo}</p>
                        </div>
                    ))}
                </ul>
            </div>
            {/* <h2> Estudos do dia </h2>
            <ul>
                {tarefas.map((tarefa, index) => (
                    <li key={index}>
                        <h3>
                            {tarefa.tarefa}
                        </h3>
                        <span>
                            {tarefa.tempo}
                        </span>
                </li>
                ))}
            </ul> */}
        </aside>
    )
}

export default Lista;