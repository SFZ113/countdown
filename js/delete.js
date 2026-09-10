export function deleteData(datas,index) //删除
{
    datas.splice(index,1);

    localStorage.setItem("datas", JSON.stringify(datas));
}