import React from 'react';
import style from './Lista.module.scss';
import Item from './Item';

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
        <aside className={style.listaTarefas}>
            <h2> Estudos do dia </h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item 
                        key={index}
                        {...item}
                        // destructuring in order to bring all properties from the Item component (the ones below)
                        // tarefa={item.tarefa}
                        // tempo={item.tempo}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;