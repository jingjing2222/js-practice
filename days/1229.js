function class_1229(){
    const users=[
        {name: 'HJ', age: 10, favor:'Game'},
        {name: 'CJ', age: 20, favor:'Kang'},
        {name: 'BJ', age: 30, favor:'Gang'},
        {name: 'DJ', age: 40, favor:'Gun'}
    ]

    const filtered=users.filter(({age})=>age>=30)
    console.log(filtered);

    const converted = users.map(({name, favor})=>({name, favor}))
    console.log(converted);

    const goods=[
        {quality:10, price:1000},
        {quality:4, price:3000},
        {quality:6, price:9000}
    ]

    const totalPrice=goods.reduce((previous,{quality, price})=>previous+(quality*price), 0)

    console.log(totalPrice);

      // biome-ignore lint/complexity/noForEach: <explanation>
    goods.map(({quality,price})=>{
        console.log(quality*price)
    })

    const life = {
        favorite_first: 'Game',
        favorite_second: 'Book',
        favorite_third: 'Cook',
        user: { name: 'Aaron', age: 10, favor: 'Game' },
        birthday() { this.user.age += 1 },
        introduce() { console.log(`제 이름은 ${this.user.name}이고, ${this.user.age}살입니다.`) },
    }

    for(const number of ['first','second','third']){
        // biome-ignore lint/style/useTemplate: <explanation>
        console.log(life['favorite_'+number]);
    }

    const ERROR={
        // biome-ignore lint/suspicious/noDuplicateObjectKeys: <explanation>
        unauthorized:{status: 401, message: '인증되지 않은 접근 발생 중', priority:1},
        not_found:{status: 404, message: '존재하지 않은 페이지에 접근 중 ', priority:2},
        server_error:{status: 500, message: '서버 내 알 수 없는 에러 발생', priority:0},
    }

    try {
        throw new Error('unhandled_error')
    } catch(e) {
        console.log(ERROR[e.message])
        const error = ERROR[e.message] ?? {message:'알수없음',status:'알수없음',priority:'알수없음'}
        console.log(`에러가 발생했습니다 : ${error?.message}`)
        console.log(`- 위 에러의 우선순위는 ${error?.priority}이며,`)
        console.log(`- HTTP Status는 ${error?.status}로 반환하였습니다.`)
    }
}

export default class_1229;