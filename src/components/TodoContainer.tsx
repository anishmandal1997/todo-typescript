import React, { ChangeEvent, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsPlusCircle, BsPlusLg } from "react-icons/bs";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import TodoElement from "./TodoElement";
import Container from "react-bootstrap/Container";

export interface ITodoList {
  // userId:number,
  id: number;
  title: string;
  completed: boolean;
}

export default function TodoContainer() {
  const [todoList, setTodoList] = useState<ITodoList[]>([]);
  const [todo, setTodo] = useState("");

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newTodoList = {
      id: new Date().getTime(),
      title: todo,
      completed: false,
    };

    setTodoList([...todoList].concat(newTodoList));
    setTodo("");
    console.log(todo);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const updatedTodo = event.target.value
    setTodo(updatedTodo);
  };

  return (
    <>
    
    
    <Container className="py-4 text-white">
      <Card className="bg-success" style={{ width: "60vh", height: "70vh" }}>
        <Card.Body style={{ overflowY: "scroll" }}>
          <Card.Title className="text-center mb-4">
            <span>Todo List</span>
          </Card.Title>

          <Card.Text>
            <form onSubmit={handleSubmit}>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Write Todo"
                  onChange={handleChange}
                  name="text"
                  aria-label="Todo Item"
                  aria-describedby="basic-addon2"
                  defaultValue={todo || ""}
                />
                <InputGroup.Text>
                  <Button type="submit">
                    <BsPlusLg />
                  </Button>
                  
                </InputGroup.Text>
              </InputGroup>
            </form>
          </Card.Text>
          {todoList.map((item) => {
            return (
              <TodoElement todoTitle={item.title} completed={item.completed} />
            );
          })}
        </Card.Body>
      </Card>
    </Container>
    </>
  );
}
