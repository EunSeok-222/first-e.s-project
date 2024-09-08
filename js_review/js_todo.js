let todo_arr = [];//todo배열 /함수 밖에 선언 전역변수

  // 페이지 시작시 할일목록 복원
  function load_todo_list(){
    let td_json = localStorage.getItem("todo_json")
    if( td_json ){
      // json 문자열을 js객체로 변환
      todo_arr = JSON.parse(td_json)
      update_todo_list()
    }
  }
  load_todo_list()

  //폼에 전송 이벤트 처리 
  let todo_form = document.querySelector('#todo_form')
  todo_form.onsubmit = function(){
    //alert('전송') //중간 확인용
    
    //입력한 값을 todo객체로 만들어 todo배열에 저장
    let td_date = document.querySelector("#todo_date").value
    let td_time = todo_form.todo_time.value
    let td_title = todo_form.todo_title.value
    let td_content = todo_form.todo_content.value
    // alert(td_date+","+td_time+","+td_title+","+td_content) //중간 확인용

    let td_obj = {
      td_no : new Date().getTime(), //지금시간을 밀리초로한다 시간당 1000씩 바뀌어 중복이 없음
      td_date: td_date,
      td_time: td_time,
      td_title: td_title,
      td_content: td_content,
      td_done: false // 할일종료 여부
    }

    todo_arr.push(td_obj) // 입력값을 객체로 함들어 배열에 저장 
    // localStorage에 저장. 껐다 켜도  복원
    let td_json = JSON.stringify(todo_arr) //배열을 문자열로 변환
    localStorage.setItem("todo_json",td_json)

    // alert("할일갯수: "+todo_arr.length)
    todo_form.reset() //초기화
    
    // 할일목록에 출력
    update_todo_list()

    return false;//기본동작 취소/이거 안하면 입력값 사라짐
  }
  function update_todo_list(){
    let todo_tbody = document.querySelector("#todo_tbody")
    let s = ""
    for( let td of todo_arr){
      s += "<tr>"
      s += "<td>"+td.td_date+"</td>"
      s += "<td>"+td.td_time+"</td>"
      s += "<td><a href='#' onclick='show_todo("+td.td_no+")'>"+td.td_title+"</a></td>"
      s += "<td>"
      s += "<input type = 'checkbox'>완료"
      s += "<button>삭제</button>"
      s += "</td>"
      s += "</tr>"


    }
    todo_tbody.innerHTML = s;
  }
  // no에 해당하는 할일 찾아서 보여주기
  function show_todo(no){
    for(let td of todo_arr){
      if(td.td_no == no ){
        display_todo(td)
        break //검색 중단
      }
    }
  }
  // 보여줄 할일을 받아서 품에 출력함
  function display_todo(todo_obj){
        todo_form.todo_date.value = todo_obj.td_date;
        todo_form.todo_time.value = todo_obj.td_time;
        todo_form.todo_title.value = todo_obj.td_title;
        todo_form.todo_content.value = todo_obj.td_content;
    }