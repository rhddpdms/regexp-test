// const str='hello world' 은 줄바꿈 처리해줄 수 없어서
// 백틱기호를 사용한다.
const str=`
010-1234-5678
thesecon@gmail.com
The quick brown fox jumps over the lazy dog
abbcccdddd
https//localhost.1234
http//www.naver.com
`

// const regxep= /fox/gi
// console.log(regexp.test(str))
// console.log(str.replace(regexp, 'AAA'))
// fox가 AAA로 변경되어 반환된다.


/* const regexp= /the/gi
 console.log(str.match(regexp)) */
//위에 내용 축약하기
 console.log(str.match(/the/gi))

//마침표를 검색할 때 앞에 백슬래쉬를 넣는다.
 console.log(str.match(/\./gi))


 //.이 명령이 아닌 문자로 해석될 수 있게 벡슬래쉬\를 붙여줌
 console.log(str.match(/\./gi))

// 한줄의 끝부분이 d자로 끝나는 문자 
  console.log(
    srt.match(/d$/g)
  ) //abbcccdddd가 아니라 null이 출력된다. 왜냐하면 문자열이 기분으로 백틱의바로 뒤와 앞이 기준이 된다.

//각각의 줄바꿈 되는 부분이 시작부분과 끝부분이 되도록 플래그m 을 넣어준다
  console.log(
    srt.match(/d$/gm) //abbcccdddd
  )

  // 임의의 문자 .
  consol.log(
    str.match(/q...k/g)
  ) //quick 

  // or
  consol.log(
    str.match(/fox|dog/)
  ) // 둘다 있을 경우 둘중 먼저 찾아지는 것을 반환한다.

  // ab? b가 있을수도 있고 없을 수도 있음. 즉 둘다 반환
  consol.log(
    str.match(/https?/g)
  ) //["https", "http"]


  //d가 2번 반복됨
  console.log(
    str.match(/d{2}/) //dd
  )

    //d가 2번 반복됨
    console.log(
      str.match(/d{2}/g) //dd, dd
    )

  //d가 2번 이상 반복됨
  console.log(
    str.match(/d{2,}/) //dddd
  )

  // \b 경계 활용하기
  //경계에서 시작해서 f라는 단어로 시작하고 64개의 문자가 한개 이상오고 경계에서 끝나는것
  //즉 f로 시작하는 단어들
  console.log(
    str.match(/\bf\w{1,}\b/g)
  )


 
  const str=
  010-1234-5678
  thesecon@gmail.com
  The quick brown fox jumps over the lazy dog
  abbcccdddd


//앞쪽패턴 일치
console.log(
  str.match(/.{1,}(?=@)/g)
) //thesecon

//뒤쪽일치
console.log(
  str.match(/(?<=@).{1,}/g)
) //gmail.com