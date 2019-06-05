export default function TodoListController($scope) {
  var todoList = this;
    todoList.data={"selected":"select"};
    todoList.data2={"selected":"select"};
    todoList.data.op = [
      {name:"main1",value:true},
      {name:"main2",value:true},
      {name:"main3",value:true},
      {name:"main4",value:true},
      {name:"main5",value:true},
      {name:"main6",value:true},
      {name:"main7",value:true},
      {name:"main8",value:true},
      {name:"main9",value:true}
    ];
    todoList.datasel1 = [];
    todoList.datasel2 = [];
    todoList.data2.op = [
      {name:"sub1",value:false},
      {name:"sub2",value:false},
      {name:"sub3",value:false},
      {name:"sub4",value:false},
      {name:"sub5",value:false},
      {name:"sub6",value:false},
      {name:"sub7",value:false},
      {name:"sub8",value:false},
      {name:"sub9",value:false}
    ];
    todoList.tog=true;
    todoList.change =function(data){
      data.selected = data.op.filter(d=>{
        return d.value == true;
      }).map(d=>{
        return d.name;
      });
      if(data.selected.length > 2)
      {
        data.selected = "select";
      }else{
        data.selected = data.selected.join(",");
      }      
    }
    todoList.togbtn = function(){
      todoList.tog =!todoList.tog;
    }
  }