import {getData} from "./get.js";


export function showData(datas,list)
{
    list.innerHTML = "";
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
        div.innerHTML = 
        ` 
        <h3>${datas[i].name}</h3>
        <p>日期：${datas[i].date}</p>
        <p>倒计时：${text}</p> 
        <button onclick="startEdit(${i})">修改</button> 
        <button onclick="removeDate(${i})">删除</button> 
        <hr>
        `; 

        list.appendChild(div);
    }
}