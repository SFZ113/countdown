export function getData(data) //计算时间
{
    let today = new Date();
    let tar = new Date(data);

    today.setHours(0,0,0,0);
    tar.setHours(0,0,0,0);
    let diff = tar - today;

    return Math.ceil(diff/(1000*60*60*24));
}