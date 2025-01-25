import axios from "axios";
import { useState, useEffect } from "react";

const useChatHook = () => {
  const [chats, setChat] = useState<any[]>([]);

  useEffect(() => {
    fetchChats();
  }, []);

  const fetchChats = async () => {
    const { data } = await axios.get("/users");
    setChat(data);
    console.log(data);
  };

  return {
    chats,
  };
};

export default useChatHook;
