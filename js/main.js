import {addData} from "./add.js";
import {deleteData} from "./delete.js";
import {editData} from "./edit.js";
import {showData} from "./show.js";

let nameinput = document.getElementById("nameinput");
let datainput = document.getElementById("datainput");
let list = document.getElementById("list");
let error = document.getElementById("error");
let submit = document.getElementById("submit");

let datas = [];
let Index = -1;

function submitData()
{
    let name = nameinput.value.trim();
    let data = datainput.value;

    if(name === "" || data === "")
    {
        error.textContent = "请输入完整的日期信息";
        return;
    }
    error.textContent = "";

    if(Index === -1)
    {
        addData(datas,name,data);
    }
    else
    {
        editData(datas,Index,name,data);
        Index = -1;
        submit.textContent = "提交";
    }

    nameinput.value = "";
    datainput.value = "";
    showData(datas,list);
}

function startEdit(index)
{
    datainput.value = datas[index].data;
    nameinput.value = datas[index].name;
    Index = index;
    submit.textContent = "修改";
}

function removeDate(index)
{
    deleteData(datas,index);
    showData(datas,list);
}

window.removeDate = removeDate;
window.startEdit = startEdit;

submit.addEventListener("click",submitData);

showData(datas,list);


