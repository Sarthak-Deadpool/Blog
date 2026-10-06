/** @format */

import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [posts, setPosts] = useState([]);

  async function fetchPosts(page = 1) {
    setLoading(true);
    let url = `${baseUrl}?page=${page}`;

    try {
      const output = await fetch(url);
      const data = await output.json();
      console.log(data);
      setPage(data.page);
      setTotalPages(data.totalPages);
      setPosts(data.posts);
    } catch (error) {
      console.error(error);
      setPage(1);
      setTotalPages(null);
      setPosts([]);
    }

    setLoading(false);
  }

  function handlePageChange(page) {
    setPage(page);
    fetchPosts(page);
  }

  const value = {
    loading,
    setLoading,
    page,
    setPage,
    totalPages,
    setTotalPages,
    posts,
    setPosts,
    fetchPosts,
    handlePageChange,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
