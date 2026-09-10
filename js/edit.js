export function editData(datas,index,name,data) //修改
{
    datas[index].name = name;
    datas[index].data = data;

    localStorage.setItem("datas", JSON.stringify(datas));
}