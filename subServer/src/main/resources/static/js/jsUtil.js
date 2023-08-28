/**
 * Element를 찾기위한 함수
 * @param target - id,class(.) , name
 * @return - element
 */
function Find(target){
    return document.querySelector(target);
}


/**
 * Elements를 찾기위한 함수 (1개 이상)
 * @param targets - class(.) , name
 * @return - elements
 */
function FindAll(targets){
    return document.querySelectorAll(targets);
}


/**
 * List 형식의 값을 Logging 하기 위한 함수
 * @param targets - List
 */
function LogList(targets){
    targets.forEach(function(target) {
        console.log(target.value);
    });
}


/**
 * Map 형식의 값을 Logging 하기 위한 함수
 * @param targets - map 형식의 객체
 */
function LogMap(targets){
    for (const key in targets) {
        if (targets.hasOwnProperty(key)) {
            console.log(`${key} : ${targets[key]}`);
        }
    }
}


/**
 * FormData 형식의 값을 Logging 하기 위한 함수
 * @param {FormData} formData - FormData 형식
 */
function LogFormData(formData){
    for (let pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
    }
}


/**
 * Param 타입의 매개변수를 보내는 API 호출함수 (await 필수)
 * @param {string} url - Controller의 주소
 * @param {string} method - GET , POST 방식설정
 * @param {map , FormData} param - 객체형태 {} or FormData 형식
 * @controller - @RequestParam형태(생략가능) 받을수있다.
 * @return - post형식일시 message , get형식일시 json , 실패시 false
 *
 * @Example - const param = {}; const formData() = FormData(Find('#form'));
 */
function APIParam(url, method, param) {
    const params = new URLSearchParams(param);
    url = url + '?' + params.toString();

    return fetch(url, {
        method: method,
    })
        .then(response => {
            console.log(response);
            if (!response.ok) {
                return false
            }

            if(method === 'post' || method === 'POST' || method ==='Post'){
                return response.text();
            }

            return response.json();
        })
        .catch(error => {
            console.error('Error:', error);
            return false;
        });
}


/**
 * formData 타입의 매개변수(파일포함)을 보내는 API 호출함수 (await 필수)
 * @param url - Controller의 주소
 * @param method - GET , POST 방식설정
 * @param formData - FormData 형식
 * @return {boolean} - 실패시 false
 * @controller - requestParam 형태로 받을수 있다(파일이 복수일경우
 * @파일이 복수일 경우 -  @RequestParam("files") MultipartFile[] files로 받을수있으며 file의 name을 동일하게 해준다.
 */
function APIFormData(url , method , formData) {
    return fetch(url, {
        method: method,
        body: formData
    })
        .then(response => {
            if (!response.ok) {
                return false;
            }
                return true;
        })
        .catch(error => {
            console.error('Error:', error);
            return false;
        });
}


/**
 * 자바 Page 리턴 값들을 이용해 Pagination을 계산해주는 함수
 * @param response - Pageble에서 return되는 값들
*/
function Paging(response, pageno) {
    const totalPages = response.totalPages;
    const firstNum = Math.floor((pageno - 1) / 5) * 5 + 1;
    const lastNum = firstNum + 4 >= totalPages ? totalPages : firstNum + 4;
    const prev = firstNum - 1 == 0 ? 1 : firstNum - 1;
    const next = lastNum >= totalPages ? totalPages : lastNum + 1;
    const firstPage = 1;
    const lastPage = totalPages;
    return {pageno, totalPages, firstNum, lastNum, prev, next, firstPage, lastPage};
}


/**
 * 날짜 상세정보 및 포맷을 해주는 함수 (dayjs 라이브러리)
 * @param date - YYYY-MM-DD 형식의 String
 * @return
 *  - 값이 없으면 오늘 날짜 정보  값이 있으면 해당 날짜 정보
 *  - bfFormat(포맷팅 되기전의 날짜 데이터)
 *  - afFormat(YYYY-MM-DD)
 *  - year , month , day (년월일)
 *
 *  @example - const {bfFormat , afFormat , year , month , day } = getDate('2023-08-10')
 */
function getDate(date){
    const bfFormat = dayjs(date);
    const afFormat = bfFormat.format('YYYY-MM-DD');
    const year = bfFormat.year();
    const month = bfFormat.month() + 1;
    const day = bfFormat.date();
    return {bfFormat, afFormat, year, month, day};
}