const str = `
 010-1234-5678
 theasdhgba@gmail.com.
 https://www.omdbapi.com/?apikey:frozon
 abbcccdddd
 The quick brown fox jumps over the lazy dog.
 http://localhost:1234
 동해물과_백두산이 마르고 닳도록
`

// const regexp = new RegExp('the','gi')
// const regexp = /fox/gi
// console.log(str.match(regexp))
// console.log(regexp.test(str))
    //str 안에 fox있는지 확인

// console.log(str.replace(regexp,'AAA'))
// console.log(str)
    //replace 해서 반환 원본훼손X

// console.log(str.match(/\.$/gim))
//m 각 줄바꿈마다 시작점과 마침점을 부여하여 검색하겠다라는 의미이다.

// console.log(
//     str.match(/h..p/gim) // h 임의 임의 p 
// )
// console.log(
//     str.match(/fox|dog/gim) //fox와 dog 찾기
// )
// console.log(
//     str.match(/https?/g) //s가 없는 http의 모든 내용 탐색
// )
// console.log(
//     str.match(/d{2,3}/g) // d가 2이상 3이하로 반복되는것 탐색
// )
// console.log(
//     str.match(/[가-힣]{1,}/g) // 한글 1개이상 반복되는거 탐색
// )

// const h = ` ther hello world !

// `
// console.log(
//     h.replace(/\s/g,'') // 공백이나 줄바꿈 모두 검색해서 빈문자열로 대체
// )
console.log(
    str.match(/.{1,}(?=@)/g) // @앞쪽 일치
)
console.log(
    str.match(/(?=@).{1,}/g) // @앞쪽 일치
)