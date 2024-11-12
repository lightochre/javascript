//16 프로퍼티 어트리뷰트
//16.2 프로퍼티 어트리뷰트와 프로퍼티 디스크립터 객체
//자바스크립트 엔진은 프로퍼티를 생성할때 프로퍼티 상태를 나타내는 프로퍼티 어트리뷰트를 기본값으로 자동 정의한다.
//object.getPropertyDescriptor 메서드를 사용해 간적접으로 확인 가능
//기본프로퍼티 값, 값의 갱신 여부, 열거 가능 여부를 나타냄

//예제
const person = {
    name : 'Lee'
};

//프로퍼티 동적생성
person.age = 20;

//프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체를 반환한다.
console.log(Object.getOwnPropertyDescriptor(person, 'name'));
console.log(Object.getOwnPropertyDescriptors(person));

//16.3 데이터 프로퍼티와 접근자 프로퍼티
//데이터 프로퍼티 -> 키와 값으로 구분된 일반적인 프로퍼티
//접근자 프로퍼티 -> 자체적으로 값을 갖지않고 데이터 프로퍼티의 값을 읽거나 저장할때 호출되는 접근자 함수로 구성된 프로퍼티

//16.3.1 데이터 프로퍼티
//키와 값으로 구분된 일반적인 프로퍼티

//16.3.2 접근자 프로퍼티
//자체적으로 값을 갖지않고 다른 데이터 프로퍼티의 값을 읽거나 저장할때 사용하는 접근자 함수로 구성된 프로퍼티

//예제
const person1 = {
    // 데이터 프로퍼티
    firstName : 'Ungmo',
    lastName : 'Lee',

    //fullName은 접근자 함수로 구성된 접근자 프로퍼티다.
    //getter 함수
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    //setter 함수
    set fullName(name) {
        //
        [this.firstName, this.lastName] = name.split(' ');
    }
};

console.log(person1.firstName + ' ' + person1.lastName);

person1.fullName = `Heegun Lee`;
console.log(person1);

console.log(person1.fullName);

