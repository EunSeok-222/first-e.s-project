import React,{useState} from 'react';
function NameForm(props) {
    const [value, setValue] = useState("")
    const [valueta, setValueta] = useState("")
    const [valueFruit, setValueFruit] = useState("grape")
    const [haveBreakfast, sethaveBreakfast] = useState(true)

    function handleChange(e){//이벤트핸들러
        setValue(e.target.value)
        console.log(e.target.value)
    }
    function handleChangeta(e){//이벤트핸들러
        setValueta(e.target.value)
        console.log(e.target.value)
    }
    function handleSubmit(e){//이벤트핸들러
        alert('입력한 이름은'+value)
        e.preventDefault(); //기본동작 취소
    }
    function handleChangeFruit(e){//이벤트핸들러
        setValueFruit(e.target.value)
        console.log(e.target.value)
    }
    return (
        <form onSubmit={handleSubmit}> 
            <label>
                이름:
                <input value={value} onChange={handleChange}></input>
            </label>
            <label>
                내용:
                <textarea value={valueta} onChange={handleChangeta}></textarea>
            </label>
            <label><br></br>
                과일을 선택하세요 :
                <select value={valueFruit} onChange={handleChangeFruit}>
                <option value="apple">사과</option>
                <option value="banana">바나나</option>
                <option value="grape">포도</option>              
                <option value="watermelon">수박</option>              
                </select>
            </label>
            <label><br></br>
            아침식사 여부 :
              <input type="checkbox"
              checked={haveBreakfast}
              onChange={(event) => {
                sethaveBreakfast(event.target.checked)
              }}></input>
            </label>
            <br></br>
            <button type='submit'>제출</button>
        </form>
    );
}
export default NameForm;