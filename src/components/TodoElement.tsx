import axios from "axios";
import React, { ChangeEvent, useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Button } from "react-bootstrap";
import { BsTrash, BsPlusCircle, BsPlusLg} from "react-icons/bs";

type Props = {
  todoTitle: string,
  completed?: boolean
}


export default function TodoElement(props: Props) {

  const {todoTitle, completed} = props;
  // const [todos, setTodos] = useState<ITodo[]>([]);
  // const [isCompleted, setIsCompleted] = useState<boolean>(false);


  return (
    <>
      
        <InputGroup className="mb-3">
          <InputGroup.Checkbox aria-label="Checkbox for following text input" />

          <Form.Control
            aria-label="Todo Checkbox"
            style={{
              overflowWrap: "break-word",
            }}
            value={todoTitle}
          />

          <InputGroup.Text>
            <Button className="btn btn-light">
              <BsTrash style={{ color: "red" }} />
            </Button>
          </InputGroup.Text>
        </InputGroup>
    </>
  );
}
