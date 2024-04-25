import { useState } from "react";
import { Box, Input, List, ListItem, IconButton, Heading } from "@chakra-ui/react";
import { FaTrash, FaPlus } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <Box maxW="md" mx="auto" mt={10}>
      <Heading mb={4}>Todo List</Heading>
      <Box display="flex" mb={4}>
        <Input placeholder="Add new todo" value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === "Enter" && handleAddTodo()} />
        <IconButton icon={<FaPlus />} ml={2} colorScheme="blue" aria-label="Add todo" onClick={handleAddTodo} />
      </Box>
      <List spacing={3}>
        {todos.map((todo, index) => (
          <ListItem key={index} display="flex" justifyContent="space-between" alignItems="center">
            {todo}
            <IconButton icon={<FaTrash />} colorScheme="red" aria-label="Delete todo" onClick={() => handleDeleteTodo(index)} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Index;
