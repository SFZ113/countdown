<template>
  <h1>重要日期倒计时</h1>

  <div class="addcard">

    <h2>添加重要日期</h2>
    <div class="inputdata">
      <input type="text" id="nameinput" v-model="name" maxlength="15" placeholder="请输入重要日期名称" >
      <input type="date" id="dateinput"v-model="date" placeholder="请输入重要日期" >
      <button @click="submitDate">提交</button>
    </div>

    <div id="error">
      {{error}}
    </div>

    <br>
    <hr>
  </div>

  <div class="showcard">

  <h2>我的重要日期</h2>

    <div id="list">
    <p v-if="dates.length === 0">暂无重要日期</p>

    <div class="mycard" v-for="(item,index) in dates" :key="index" >
      <h2><u style="color: #485b13;">{{item.name}}</u></h2>
      <p>日期：{{item.date}}</p>
      <p>倒计时：{{showData(item.date)}}</p>

      <div class="buttons">
        <button @click="startEdit(index)">修改</button>
        <button @click="removeDate(index)">删除</button>
      </div>
    </div>
  </div>

    <br>
    <br>
    <hr>

  </div>


</template>

<script setup>
  import{ref} from 'vue';

  let name = ref("");
  let date = ref("");
  let error = ref("");
  let dates = ref(
    JSON.parse(localStorage.getItem("dates")) || []
);
  let Index = ref(-1);

  function submitDate()
  {
    console.log("名称：",name.value);
    console.log("日期：",date.value);

    if(name.value.length>10)
    {
      error.value = "名称不得超过10个字符";
      return;
    }
    error.value = "";

    if(name.value==="" || date.value==="")
    {
      error.value = "请输入完整信息!";
      return;
    }
    error.value = "";

    if(Index.value === -1)
    {
      dates.value.push({
      name:name.value,
      date:date.value
      })

      localStorage.setItem(
        "dates",
        JSON.stringify(dates.value)
      );
    }

    else
    {
      dates.value[Index.value].name = name.value;
      dates.value[Index.value].date = date.value;


      localStorage.setItem(
        "dates",
        JSON.stringify(dates.value)
    );


      Index.value = -1;
      alert("修改成功！");
    }
    name.value = "";
    date.value = "";
  }

function getDates(date)
{
  let today = new Date();
  let tar = new Date(date);

  today.setHours(0,0,0,0);
  tar.setHours(0,0,0,0);

  let diff = tar - today;
  return Math.ceil(diff/(1000*60*60*24));
}

function showData(date)
{
  let days = getDates(date);

  if(days>0)
  {
    return "还有"+days+"天";
  }
  else if(days==0)
  {
    return "今天";
  }
  else
  {
    return "已经过去" + Math.abs(days) + "天";
  }
}

function startEdit(index)
{
  name.value = dates.value[index].name;
  date.value = dates.value[index].date;

  Index.value = index;

}

function removeDate(index)
{
  if(confirm("确定要删除这条日期吗？"))
  {
    dates.value.splice(index,1);

    Index.value=-1;

    name.value = "";
    date.value = "";

    localStorage.setItem(
        "dates",
        JSON.stringify(dates.value)
    );

    alert("删除成功");
  }

  
}
</script>

