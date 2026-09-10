import {getData} from "./get.js";


export function showData(datas,list) //显示倒计时
{
    list.innerHTML = "";
    if(datas.length === 0)
    {
        list.innerHTML = "<p>暂无数据</p>";
        return;
    }
    
    for (let i = 0; i < datas.length; i++)
    {
        let days = getData(datas[i].data);
        let text = "";
        if (days > 0) 
        {
            text = "还有" + days + "天";
        }
        else if(days === 0)
        {
            text = "就是今天";
        }
        else
        {
            text = "已经过去" + Math.abs(days) + "天";
        }

        let div = document.createElement("div");
        div.className = "mycard";
        div.innerHTML = 
        ` 
        <h3><u style="color: #485b13;">${datas[i].name}</u></h3>
        <p>日期：${datas[i].data}</p>
        <p>倒计时：${text}</p> 
        <button onclick="startEdit(${i})">修改</button> 
        <button onclick="removeDate(${i})">删除</button> 
        <br>
        `; 

        list.appendChild(div);
    }
}