import { Col, Row, Input, Button, Select, Tag } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../redux/actions';
import Todo from '../Todo';
import { v4 as uuidv4} from 'uuid'
import { useState } from 'react';
// import { todoListSelector, searchTextSelector } from '../../redux/selectors';
import { todoRemainingSelector } from '../../redux/selectors';

export default function TodoList() {
  const [todoName, setTodoName] = useState('')
  const [priority, setPriority]= useState('Medium')
  
  // const todoList = useSelector(todoListSelector)
  // const searchText = useSelector(searchTextSelector)

  // su dung reselect de quan ly cac selector
  const todoList = useSelector(todoRemainingSelector)
  const dispatch = useDispatch();  

  // console.log({todoList, searchText});

  const handleAddButtonClick = () =>{
    dispatch(addTodo({
        id: uuidv4(),
        name: todoName,
        priority: priority,
        completed: false
    }))
    setTodoName('')
    setPriority('Medium')
  }

  const handleInputChange = (e) =>{
    setTodoName(e.target.value)
  }

  const handlePriorityChange = (value) =>{
    setPriority(value)
  }
  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
         {todoList.map((todo, index) => <Todo key={index} name={todo.name} priority={todo.priority}/>)}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={handleInputChange}/>
          <Select defaultValue="" value={priority} onChange={handlePriorityChange}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}