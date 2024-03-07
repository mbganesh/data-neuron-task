import { Box, Card, Paper, Typography } from "@mui/material";
import TableBody from "components/TableContent";
import TableHeader from "components/TableHeader";
import React, { useEffect, useState } from "react";
import axios from "axios";
const TablePage = () => {
  const BASEURL = "http://localhost:5000";

  const [item, setItem] = useState("");
  const [id, setId] = useState("");
  const [list, setList] = useState([]);
  const [counts, setCounts] = useState({
    addCount: 0,
    updateCount: 0,
  });

  const handleAddBtn = async (e) => {
    e.preventDefault();

    if (item) {
      let resp = await axios.post(`${BASEURL}/users/add-item`, {
        name: item,
      });
      getData()
      setItem("");
    }

    console.log(item);
  };

  const handleUpdateBtn = async (e) => {
    e.preventDefault();
    if (item) {
      let data = {
        name: item,
        _id: id,
      };
      let resp = await axios.post(`${BASEURL}/users/update-item`, data);
      console.log(resp.data);
      getData()
      setItem("");
      setId("");
    }

    console.log(item);
  };

  const getData = async () => {
    let myRes = (await axios.get(`${BASEURL}/users/get-data`)).data;
    if (myRes?.status) {
      setList(myRes?.data?.names);
      setCounts({
        addCount: myRes?.data?.addCount,
        updateCount: myRes?.data?.updateCount,
      });
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box>
      <TableHeader counts={counts} />
      <TableBody
        list={list}
        item={item}
        setItem={setItem}
        handleAddBtn={handleAddBtn}
        handleUpdateBtn={handleUpdateBtn}
        id={id}
        setId={setId}
      />
    </Box>
  );
};

export default TablePage;
