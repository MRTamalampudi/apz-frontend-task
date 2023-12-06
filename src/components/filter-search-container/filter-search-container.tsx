import React, {FC, useState} from 'react';
import styles from './filter-search-container.module.scss';
import {DateInput, DateValue} from "@mantine/dates";
import {Select, TextInput} from "@mantine/core";
import {useSearchParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {TaskPriority} from "../../enum/task-priority";

interface FilterSearchContainerProps {}

const FilterSearchContainer = () => {
    const [searchParams,setSearchParams] = useSearchParams()
    const assigneeData = useSelector((state:RootState)=>state.assignees);
    const [text,setText] = useState<string>("");

    function formatDate(e:DateValue) {
        if(!e) return
        const year = e?.getFullYear();
        const month = e?.getMonth()!+1 < 10 ? "0"+(e?.getMonth()+1) : e?.getMonth()+1;
        const date = e?.getDate()! < 10 ? "0"+e?.getDate() : e?.getDate()
        return `${year}-${month}-${date}`
    }
  return (
      <div className={styles.FilterSearchContainer}>
          <div className={styles.left}>
              <DateInput
                  size={"xs"}
                  label={"Start date"}
                  clearable
                  onChange={(e)=>{
                      const date = formatDate(e);
                      date ? searchParams.set("startDate",date) : searchParams.delete("startDate")
                      setSearchParams(searchParams)
                  }}
                  valueFormat={"YYYY-MM-DD"}
                  placeholder={"YYYY-MM-DD"}
              />
              <DateInput
                  size={"xs"}
                  label={"End date"}
                  clearable
                  valueFormat={"YYYY-MM-DD"}
                  placeholder={"YYYY-MM-DD"}
                  onChange={(e)=>{
                      const date = formatDate(e);
                      date ? searchParams.set("endDate",date) : searchParams.delete("endDate")
                      setSearchParams(searchParams)
                  }}
              />
              <Select
                  data={assigneeData}
                  label={"Assignee"}
                  onChange={(e)=>{
                      e ? searchParams.set("assignee",e) : searchParams.delete("assignee")
                      setSearchParams(searchParams)
                  }}
                  clearable
                  size={"xs"}
                  placeholder={"select assignee"}
              ></Select>
              <Select
                  label={"Priority"}
                  data={Object.values(TaskPriority)}
                  size={"xs"}
                  onChange={(e)=>{
                      e ? searchParams.set("priority",e) : searchParams.delete("priority")
                      setSearchParams(searchParams)
                  }}
                  clearable
                  placeholder={"select priority"}
              ></Select>
          </div>
          <TextInput
              label={"search"}
              size={"xs"}
              placeholder={"search by task name"}
              value = {text}
              onChange = {(e)=>{
                  const q = e.target.value;
                  q ? searchParams.set("q",q) : searchParams.delete("q")
                  setSearchParams(searchParams)
                  setText(q)
              }}
          />
      </div>
  )
}

export default FilterSearchContainer;
