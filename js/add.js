export function addData(datas,name,data) //添加倒计时
{
    datas.push(
        {
            name:name,
            data:data
        }
    );

    localStorage.setItem("datas", JSON.stringify(datas));
}