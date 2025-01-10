export function class_0102() {
    // assignment01();
    // assignment02();
    // assignment03();
    // assignment04();
    // assignment05();
    // assignment06();
    // assignment07();
    // assignment08();
    // assignment09_01();
    // assignment09_02();
    // assignment09_03();
    // assignment09_04();
    // assignment10();
    // assignment11();
    // assignment12_01();
    // assignment12_02();
    // assignment13();
    // assignment14();
    // assignment15();
    // assignment16();
    // assignment17();
    // assignment18();
    // assignment19_01();
    // assignment19_02();
    // assignment20();
    // assignment21();
    // assignment22();
    // assignment23();
    // assignment24();
    // assignment25();
    // assignment26();
    // assignment27();
    // assignment28();
    // assignment29();
    assignment30();
}

function assignment01() {
    //const는 재할당이 불가능하므로, 값의 변경이 불가하다.
    const number = 1;
    console.log(number);

    //object의 값 변경, 불변성을 만족하지 않는다
    const object = {
        name: "Aaron",
        age: 10,
    };

    object.name = "Baron";

    console.log(object);

    function deepCopy(object) {
        return JSON.parse(JSON.stringify(object));
    }

    //object에 대한 깊은 복사,
    const copied_o = deepCopy(object);

    copied_o.age = 0;

    console.log(object);
    console.log(copied_o);

    //배열에 값 추가, push, pop이용
    const array = [1, 2, 3];
    array.push(4);
    console.log(array);

    //
    const copied_a = array.slice();
    copied_a.push(5);
    console.log(`${array} ${copied_a}`);
}

function assignment02() {
    function addComment(message) {}

    exchangeWon();

    function exchangeWon(won) {
        const exchangeDollarRatio = 1480;
        return won / 1480;
    }

    function printFirstAndLastDayOfMonth(month) {
        const days = {
            firstDay,
            lastDay,
        };
        //logic 생략

        return days;
    }
}

function assignment03() {
    const object = {
        name: "HJ",
        age: 27,
        others: {
            height: 1,
            weight: 10,
        },
        friends: ["1", "2"],
    };
    for (const objects in object) {
        console.log(typeof object[objects]);
    }
}

function assignment04() {
    function validate() {
        const input = document.getElementById("input");
        let value = typeof input.value === "number" ? input.value : null;
        console.log(value);
        input.value = value;
    }
}

function assignment05() {
    // const generate = (user) => `안녕하세요 저는 ${user.name}입니다.`;
    const generate = function (user) {
        return `안녕하세요 저는 ${user.name}입니다.`;
    };

    const user1 = { name: "HJ", age: 10 };
    const generated = generate(user1);
    console.log(generated);

    // const filter = (object) => object.age > 19 && object.specialty === "backend";

    const filter = function (object) {
        return object.age > 19 && object.specialty === "backend";
    };

    const users = [
        { name: "Aaron", age: 10, specialty: "frontend" },
        { name: "Baron", age: 20, specialty: "backend" },
        { name: "Caron", age: 30, specialty: "engineer" },
    ];
    const filtered = [];
    for (let i = 0; i < users.length; i++) {
        if (filter(users[i])) {
            filtered.push(users[i]);
        }
    }
    console.log(filtered);

    const convert = function (object) {
        return {
            name: object.name,
        };
    };

    const user = { name: "Aaron", age: 10 };
    const converted = convert(user);
    console.log(converted);
}

function assignment06() {
    function convert(user) {
        const converted_user = {};
        for (const object in user) {
            if (user[object] == undefined) continue;
            converted_user[object] = user[object];
        }
        return converted_user;
    }
    const result = {
        success: false,
        body: [
            {
                name: "Aaron",
                age: 10,
                address: null,
            },
            {
                name: "Baron",
                age: 20,
                address: {
                    location: "Earth",
                },
            },
            {
                name: "Caron",
                age: 30,
                address: null,
                job: "Developer",
            },
        ],
    };
    const converted_users = [];
    for (let i = 0; i < result.body.length; i++) {
        const converted_user = convert(result.body[i]);
        converted_users.push(converted_user);
    }
    console.log(converted_users);
}

function assignment07() {
    function convert(user) {
        const converted_user = {};
        for (const object in user) {
            if (!!!user[object]) continue;
            converted_user[object] = user[object];
        }
        return converted_user;
    }
    const result = {
        success: false,
        body: [
            {
                name: "Aaron",
                age: 10,
                address: null,
            },
            {
                name: "Baron",
                age: 20,
                address: {
                    location: "Earth",
                },
            },
            {
                name: "Caron",
                age: 30,
                address: null,
                job: "Developer",
            },
        ],
    };
    const converted_users = [];
    for (let i = 0; i < result.body.length; i++) {
        const converted_user = convert(result.body[i]);
        converted_users.push(converted_user);
    }
    console.log(converted_users);
}

function assignment08() {
    function convert(user) {
        const converted_user = {
            name: undefined,
            age: undefined,
            address: { location: undefined },
            job: undefined,
        };

        for (const property in converted_user) {
            const propertyToKorean = {
                name: "이름",
                age: "나이",
                address: "지역",
                job: "직업",
            };
            if (property === "address") {
                converted_user[property]["location"] =
                    false || user[property]
                        ? user[property]
                        : `${propertyToKorean[property]} 없음`;
            } else {
                converted_user[property] =
                    false || user[property]
                        ? user[property]
                        : `${propertyToKorean[property]} 없음`;
            }
        }
        return converted_user;
    }

    const result = {
        success: false,
        body: [
            {
                name: "Aaron",
                age: 10,
                address: null,
            },
            {
                name: "Baron",
                age: 20,
                address: {
                    location: "Earth",
                },
            },
            {
                name: "Caron",
                age: 30,
                address: null,
                job: "Developer",
            },
        ],
    };
    const converted_users = [];
    for (let i = 0; i < result.body.length; i++) {
        const converted_user = convert(result.body[i]);
        converted_users.push(converted_user);
    }
    console.log(converted_users);
}

function assignment09_01() {
    const filter = (object) => {
        return object.age > 19 && object.specialty === "backend";
    };
    const users = [
        { name: "Aaron", age: 10, specialty: "frontend" },
        { name: "Baron", age: 20, specialty: "backend" },
        { name: "Caron", age: 30, specialty: "engineer" },
    ];
    const filtered = [];
    let i = 0;
    while (i < users.length) {
        if (filter(users[i])) {
            filtered.push(users[i]);
        }
        i++;
    }
    console.log(filtered);
}

function assignment09_02() {
    const filter = (object) => {
        return object.age > 19 && object.specialty === "backend";
    };
    const users = [
        { name: "Aaron", age: 10, specialty: "frontend" },
        { name: "Baron", age: 20, specialty: "backend" },
        { name: "Caron", age: 30, specialty: "engineer" },
    ];
    const filtered = [];
    for (const user of users) {
        if (filter(user)) {
            filtered.push(user);
        }
    }
    console.log(filtered);
}

function assignment09_03() {
    function convert(user) {
        const converted_user = {};
        for (const object in user) {
            if (user[object] == undefined) continue;
            converted_user[object] = user[object];
        }
        return converted_user;
    }
    const result = {
        success: false,
        body: [
            {
                name: "Aaron",
                age: 10,
                address: null,
            },
            {
                name: "Baron",
                age: 20,
                address: {
                    location: "Earth",
                },
            },
            {
                name: "Caron",
                age: 30,
                address: null,
                job: "Developer",
            },
        ],
    };
    const converted_users = [];
    let i = 0;
    while (i < result.body.length) {
        const converted_user = convert(result.body[i]);
        converted_users.push(converted_user);
        i++;
    }
    console.log(converted_users);
}

function assignment09_04() {
    function convert(user) {
        const converted_user = {};
        for (const object in user) {
            if (user[object] == undefined) continue;
            converted_user[object] = user[object];
        }
        return converted_user;
    }
    const result = {
        success: false,
        body: [
            {
                name: "Aaron",
                age: 10,
                address: null,
            },
            {
                name: "Baron",
                age: 20,
                address: {
                    location: "Earth",
                },
            },
            {
                name: "Caron",
                age: 30,
                address: null,
                job: "Developer",
            },
        ],
    };
    const converted_users = [];
    let i = 0;
    for (const resultSeperated of result.body) {
        const converted_user = convert(resultSeperated);
        converted_users.push(converted_user);
    }
    console.log(converted_users);
}

function assignment10() {
    const users = [
        { name: "Aaron", age: 10, specialty: "frontend" },
        { name: "Baron", age: 20, specialty: "backend" },
        { name: "Caron", age: 30, specialty: "engineer" },
    ];
    let usersToString = "[\n";
    for (const user of users) {
        usersToString += "{";
        for (const property in user) {
            usersToString += `${property}: ${user[property]}, `;
        }
        usersToString += "}";
        usersToString += "\n";
    }
    usersToString += "]";
    console.log(usersToString);
}

function assignment11() {
    var object = {
        name: "Aaron",
        age: 10,
        address: {
            location: "Earth",
        },
        cars: ["Ford", "Porche"],
    };

    function copy_object(object) {
        const copied = JSON.parse(JSON.stringify(object));
        return copied;
    }

    var copied = copy_object(object);

    copied.name = "Baron";
    copied.address.location = "Moon";
    copied.cars.push("Aston Martin");
    object === copied;
    console.log(object);
    console.log(copied);
}

function assignment12_01() {
    const todo_list = [
        "[공부] 2025-01-20 : React Hook 종류에 대해 공부히기",
        "[약속] 2025-02-08 : Backend 개발자 친구와 강남역에서 만나기",
        "[정기] 2025-03-21 : 분기별 목표 정리 및 3개원간 평균 가계부 작성",
        "[운동] 2025-04-01 : 수영 등록하고, 바로 첫 수업 듣기",
        "[공부] 2025-05-08 : Next.js Tutorial 하면서 개인 문서 정리하기",
        "[독서] 2025-06-17 : 레이 달리오의 Principle 원칙 책 10% 읽기",
    ];

    for (const [index, eaches] of todo_list.entries()) {
        const each = eaches.split(" ");
        const printString = `${index}: TODO 타입은 ${each[0].slice(
            each[0].indexOf("[") + 1,
            each[0].indexOf("]")
        )}, 날짜는 ${each[1]}`;
        console.log(printString);
    }
}

function assignment12_02() {
    const carts = [
        {
            quantity: 2,
            product: {
                category: "Graphic Card",
                name: "GeForce RTX 4090",
            },
        },
        {
            quantity: 1,
            product: {
                category: "Shoes",
                name: "Nike Air Max 97 Triple White",
            },
        },
        {
            quantity: 3,
            product: {
                category: "Notebook",
                name: "MacBook Air 15 M3, 16GB",
            },
        },
    ];

    const products = [];

    for (const cart of carts) {
        const productsString = `${cart.product.name} ${cart.quantity}개`;
        products.push(productsString);
    }
    console.log(products.join(", "));
}

function assignment12_03() {
    // <select name="category" onchange="selected(this.value)">
    //   <option value="computer">부품</option>
    //   <option value="cloth">옷</option>
    //   <option value="shoes">신발</option>
    // </select>
    // <script>
    //   const products = {
    //     'COMPUTER': [
    //       { name: 'GeForce RTX 4090' },
    //       { name: 'AMD 9600X' },
    //       { name: 'Intel i7-14700K' },
    //     ],
    //     'CLOTH': [
    //       { name: 'Alpha Industries MA-1' },
    //       { name: 'Acne Studios Shearling Jacket' },
    //     ],
    //     'SHOES': [
    //       { name: 'Nike Air Max 97 Triple White' },
    //       { name: 'Dr.Martens 1461 Leather Oxford' },
    //     ],
    //   }
    //   function selected(value) {
    //     const checkedValue=value.toUpperCase();
    //     const selected_products = products[checkedValue] || [] ;
    //     console.log(selected_products)
    //   }
}

function assignment13() {
    const detail_products = [
        {
            product_id: 1,
            name: "GeForce RTX 4090",
            category: {
                category_id: 23,
                name: "Graphic Card",
            },
            option: [
                {
                    option_id: 12,
                    name: "256GB",
                    additional_price: 0,
                },
                {
                    option_id: 13,
                    name: "512GB",
                    additional_price: 100000,
                },
            ],
            price: 400000,
        },
        {
            product_id: 2,
            name: "Nike Air Max 97",
            category: {
                category_id: 108,
                name: "Shoes",
            },
            option: [
                {
                    option_id: 201,
                    name: "Triple White",
                    additional_price: 20000,
                },
                {
                    option_id: 202,
                    name: "Triple Black",
                    additional_price: 40000,
                },
            ],
            price: 200000,
        },
        {
            product_id: 3,
            name: "MacBook Air 15 M3, 16GB",
            category: {
                category_id: 49,
                name: "Notebook",
            },
            option: [
                {
                    option_id: 495,
                    name: "16GB",
                    additional_price: 0,
                },
                {
                    option_id: 496,
                    name: "32GB",
                    additional_price: 320000,
                },
            ],
            price: 2200000,
        },
    ];

    const productInformation = [];
    detail_products.map((product) => {
        for (const options of product.option) {
            productInformation.push({
                product_id: product.product_id,
                name: product.name,
                category: product.category.name,
                option: {
                    name: options.name,
                    additional_price: options.additional_price,
                },
                price: product.price,
            });
        }
    });

    console.log(productInformation);
}

function assignment14() {
    const detail_products = [
        {
            product_id: 1,
            name: "GeForce RTX 4090",
            category: {
                category_id: 23,
                name: "Graphic Card",
            },
            option: [
                {
                    option_id: 12,
                    name: "256GB",
                    additional_price: 0,
                },
                {
                    option_id: 13,
                    name: "512GB",
                    additional_price: 100000,
                },
            ],
            price: 400000,
        },
        {
            product_id: 2,
            name: "Nike Air Max 97",
            category: {
                category_id: 108,
                name: "Shoes",
            },
            option: [
                {
                    option_id: 201,
                    name: "Triple White",
                    additional_price: 20000,
                },
                {
                    option_id: 202,
                    name: "Triple Black",
                    additional_price: 40000,
                },
            ],
            price: 200000,
        },
        {
            product_id: 3,
            name: "MacBook Air 15 M3, 16GB",
            category: {
                category_id: 49,
                name: "Notebook",
            },
            option: [
                {
                    option_id: 495,
                    name: "16GB",
                    additional_price: 0,
                },
                {
                    option_id: 496,
                    name: "32GB",
                    additional_price: 320000,
                },
            ],
            price: 2200000,
        },
    ];

    const productInformation = [];
    detail_products.map((product) => {
        for (const options of product.option) {
            productInformation.push({
                product_id: product.product_id,
                name: product.name,
                category: product.category.name,
                option: {
                    name: options.name,
                    additional_price: options.additional_price,
                },
                price: product.price,
            });
        }
    });

    productInformation.forEach((elements, idx) => {
        console.log(
            `상품 ${idx}: ${elements.name} | 대표옵션: ${elements.option.name} / ${elements.option.additional_price} | 가격: ${elements.price}`
        );
    });
}

function assignment15() {
    const budget = 23000;
    const favorites = ["chicken", "pizza"];
    const foods = [
        {
            category: "chicken",
            name: "Hosik",
            price: 20000,
        },
        {
            category: "chicken",
            name: "Kentucky",
            price: 16000,
        },
        {
            category: "chicken",
            name: "BHC",
            price: 26000,
        },
        {
            category: "pizza",
            name: "Mr.Pizza",
            price: 26000,
        },
        {
            category: "pizza",
            name: "Pizza Hut",
            price: 30000,
        },
        {
            category: "meat",
            name: "MyeongRyun Jinsa",
            price: 15000,
        },
        {
            category: "meat",
            name: "Daedo Sikdang",
            price: 55000,
        },
    ];
    const filterdFood = foods.filter((elements) => {
        return elements.price <= budget;
    });
    console.log(filterdFood.map((each) => each.name));
}

function assignment16() {
    const carts = [
        {
            quantity: 2,
            product: {
                category: "Graphic Card",
                name: "GeForce RTX 4090",
                price: 400000,
                soldout: true,
            },
        },
        {
            quantity: 1,
            product: {
                category: "Shoes",
                name: "Nike Air Max 97 Triple White",
                price: 200000,
                soldout: true,
            },
        },
        {
            quantity: 3,
            product: {
                category: "Notebook",
                name: "MacBook Air 15 M3, 16GB",
                price: 2200000,
                soldout: false,
            },
        },
        {
            quantity: 10,
            product: {
                category: "Food",
                name: "Cavendish & Harvey Sour Cherry",
                price: 5000,
                soldout: false,
            },
        },
    ];

    const sum = carts.reduce((acc, element) => {
        return !element.product.soldout
            ? acc + element.product.price * element.quantity
            : acc;
    }, 0);

    console.log(`결제할 총 금액은 다음과 같습니다 = ${sum}`);
}

function assignment17() {
    const students = [
        {
            student_id: 1,
            name: "A학생",
            assignments: [
                { repo: "a-student/type1", submit: true },
                { repo: "a-student/type2", submit: false },
                { repo: "a-student/type3", submit: true },
                { repo: "a-student/type4", submit: false },
                { repo: "a-student/type5", submit: false },
            ],
            attendance: [
                { date: "2025-02-11", absent: false },
                { date: "2025-02-12", absent: false },
                { date: "2025-02-13", absent: true },
                { date: "2025-02-14", absent: false },
                { date: "2025-02-15", absent: false },
            ],
        },
        {
            student_id: 2,
            name: "B학생",
            assignments: [
                { repo: "b-student/type1", submit: true },
                { repo: "b-student/type2", submit: false },
                { repo: "b-student/type3", submit: false },
                { repo: "b-student/type4", submit: false },
                { repo: "b-student/type5", submit: false },
            ],
            attendance: [
                { date: "2025-02-11", absent: false },
                { date: "2025-02-12", absent: false },
                { date: "2025-02-13", absent: false },
                { date: "2025-02-14", absent: false },
                { date: "2025-02-15", absent: false },
            ],
        },
        {
            student_id: 3,
            name: "C학생",
            assignments: [
                { repo: "c-student/type1", submit: true },
                { repo: "c-student/type2", submit: true },
                { repo: "c-student/type3", submit: true },
                { repo: "c-student/type4", submit: true },
                { repo: "c-student/type5", submit: false },
            ],
            attendance: [
                { date: "2025-02-11", absent: false },
                { date: "2025-02-12", absent: false },
                { date: "2025-02-13", absent: true },
                { date: "2025-02-14", absent: false },
                { date: "2025-02-15", absent: true },
            ],
        },
        {
            student_id: 4,
            name: "D학생",
            assignments: [
                { repo: "d-student/type1", submit: true },
                { repo: "d-student/type2", submit: true },
                { repo: "d-student/type3", submit: true },
                { repo: "d-student/type4", submit: true },
                { repo: "d-student/type5", submit: true },
            ],
            attendance: [
                { date: "2025-02-11", absent: false },
                { date: "2025-02-12", absent: false },
                { date: "2025-02-13", absent: false },
                { date: "2025-02-14", absent: false },
                { date: "2025-02-15", absent: false },
            ],
        },
        {
            student_id: 5,
            name: "E학생",
            assignments: [
                { repo: "e-student/type1", submit: false },
                { repo: "e-student/type2", submit: false },
                { repo: "e-student/type3", submit: false },
                { repo: "e-student/type4", submit: false },
                { repo: "e-student/type5", submit: false },
            ],
            attendance: [
                { date: "2025-02-11", absent: true },
                { date: "2025-02-12", absent: true },
                { date: "2025-02-13", absent: true },
                { date: "2025-02-14", absent: true },
                { date: "2025-02-15", absent: true },
            ],
        },
        {
            student_id: 6,
            name: "F학생",
            assignments: [
                { repo: "f-student/type1", submit: true },
                { repo: "f-student/type2", submit: true },
                { repo: "f-student/type3", submit: true },
                { repo: "f-student/type4", submit: true },
                { repo: "f-student/type5", submit: true },
            ],
            attendance: [
                { date: "2025-02-11", absent: true },
                { date: "2025-02-12", absent: true },
                { date: "2025-02-13", absent: false },
                { date: "2025-02-14", absent: false },
                { date: "2025-02-15", absent: false },
            ],
        },
    ];

    const successStudent = [];

    students.forEach((student) => {
        const result = student.assignments.some((elements) => {
            return elements.submit === true;
        });
        if (result) successStudent.push(student.name);
    });
    console.log(successStudent.join(", "));
}

function assignment18() {
    const students = [
        {
            student_id: 1,
            name: "A학생",
            assignments: [
                { repo: "a-student/type1", submit: true },
                { repo: "a-student/type2", submit: false },
                { repo: "a-student/type3", submit: true },
                { repo: "a-student/type4", submit: false },
                { repo: "a-student/type5", submit: false },
            ],
            attendance: [
                { date: "2025-02-11", absent: false },
                { date: "2025-02-12", absent: false },
                { date: "2025-02-13", absent: true },
                { date: "2025-02-14", absent: false },
                { date: "2025-02-15", absent: false },
            ],
        },
        {
            student_id: 2,
            name: "B학생",
            assignments: [
                { repo: "b-student/type1", submit: true },
                { repo: "b-student/type2", submit: false },
                { repo: "b-student/type3", submit: false },
                { repo: "b-student/type4", submit: false },
                { repo: "b-student/type5", submit: false },
            ],
            attendance: [
                { date: "2025-02-11", absent: false },
                { date: "2025-02-12", absent: false },
                { date: "2025-02-13", absent: false },
                { date: "2025-02-14", absent: false },
                { date: "2025-02-15", absent: false },
            ],
        },
        {
            student_id: 3,
            name: "C학생",
            assignments: [
                { repo: "c-student/type1", submit: true },
                { repo: "c-student/type2", submit: true },
                { repo: "c-student/type3", submit: true },
                { repo: "c-student/type4", submit: true },
                { repo: "c-student/type5", submit: false },
            ],
            attendance: [
                { date: "2025-02-11", absent: false },
                { date: "2025-02-12", absent: false },
                { date: "2025-02-13", absent: true },
                { date: "2025-02-14", absent: false },
                { date: "2025-02-15", absent: true },
            ],
        },
        {
            student_id: 4,
            name: "D학생",
            assignments: [
                { repo: "d-student/type1", submit: true },
                { repo: "d-student/type2", submit: true },
                { repo: "d-student/type3", submit: true },
                { repo: "d-student/type4", submit: true },
                { repo: "d-student/type5", submit: true },
            ],
            attendance: [
                { date: "2025-02-11", absent: false },
                { date: "2025-02-12", absent: false },
                { date: "2025-02-13", absent: false },
                { date: "2025-02-14", absent: false },
                { date: "2025-02-15", absent: false },
            ],
        },
        {
            student_id: 5,
            name: "E학생",
            assignments: [
                { repo: "e-student/type1", submit: false },
                { repo: "e-student/type2", submit: false },
                { repo: "e-student/type3", submit: false },
                { repo: "e-student/type4", submit: false },
                { repo: "e-student/type5", submit: false },
            ],
            attendance: [
                { date: "2025-02-11", absent: true },
                { date: "2025-02-12", absent: true },
                { date: "2025-02-13", absent: true },
                { date: "2025-02-14", absent: true },
                { date: "2025-02-15", absent: true },
            ],
        },
        {
            student_id: 6,
            name: "F학생",
            assignments: [
                { repo: "f-student/type1", submit: true },
                { repo: "f-student/type2", submit: true },
                { repo: "f-student/type3", submit: true },
                { repo: "f-student/type4", submit: true },
                { repo: "f-student/type5", submit: true },
            ],
            attendance: [
                { date: "2025-02-11", absent: true },
                { date: "2025-02-12", absent: true },
                { date: "2025-02-13", absent: false },
                { date: "2025-02-14", absent: false },
                { date: "2025-02-15", absent: false },
            ],
        },
    ];

    const successStudent = [];

    students.forEach((student) => {
        const result = student.attendance.every((elements) => {
            return elements.absent === false;
        });
        if (result) successStudent.push(student.name);
    });
    console.log(successStudent.join(", "));
}

function assignment19_01() {
    const jobs = {
        DEVELOPER: {
            name: "개발자",
            salary: 250,
        },
        PRODUCT_OWNER: {
            name: "기획자",
            salary: 200,
        },
        PRODUCT_MANAGER: {
            name: "관리자",
            salary: 300,
        },
        DESIGNER: {
            name: "디자이너",
            salary: 180,
        },
    };

    const user = {
        name: "Aaron",
        age: 10,
        job: "Developer",
        address: {
            location: "Earth",
        },
    };

    function toString({ name, age, job, address: { location } }) {
        const jobKorean = jobs[job.toUpperCase()].name;
        return `해당 유저의 이름은 ${name}이고, 나이는 ${age}살이며, 직업은 ${jobKorean}입니다.`;
    }

    console.log(toString(user));
}

function assignment19_02() {
    const jobs = {
        DEVELOPER: {
            name: "개발자",
            salary: 250,
        },
        PRODUCT_OWNER: {
            name: "기획자",
            salary: 200,
        },
        PRODUCT_MANAGER: {
            name: "관리자",
            salary: 300,
        },
        DESIGNER: {
            name: "디자이너",
            salary: 180,
        },
    };

    const users = [
        {
            name: "Aaron",
            age: 10,
            job: "Developer",
            address: {
                location: "Earth",
            },
        },
        {
            name: "Baron",
            age: 20,
            job: "Product Owner",
        },
        {
            name: "Caron",
            age: 30,
            job: null,
            address: {
                location: "Moon",
            },
        },
    ];

    const locations = {
        EARTH: {
            name: "지구",
            resource: "동식물",
        },
        MOON: {
            name: "달나라",
            resource: "철광석",
        },
        MARS: {
            name: "화성",
            resource: "적색토",
        },
    };

    function toString({ name, age, job, address: { location } = {} } = {}) {
        const userName = name ?? "이름 없음";
        const userAge = age ?? "알 수 없음";

        const jobKey = job ? job.toUpperCase() : null;
        const jobKorean = jobKey && jobs[jobKey] ? jobs[jobKey].name : "무직";

        const locationKey = location ? location.toUpperCase() : null;
        const locationKorean =
            locationKey && locations[locationKey]
                ? locations[locationKey].name
                : "어딘가";

        return `해당 유저의 이름은 ${userName}이고, 나이는 ${userAge}살이며, 직업은 ${jobKorean}이며, 지역은 ${locationKorean}입니다.`;
    }

    const Lines = users.map((user) => {
        return toString(user);
    });

    for (const Line of Lines) console.log(Line);
}

function assignment20() {
    function exchange_rate(type) {
        switch (type) {
            case "USD":
                return 1500; // = 1달러
            case "JPY":
                return 10; // = 1엔
            case "THB":
                return 40; // = 1바트
        }
    }
    function currency_exchanger(initial_value, type) {
        let money = initial_value;
        const rate = exchange_rate(type);

        function setMoney(newMoney) {
            money = newMoney;
        }

        function getMoney() {
            return money * rate;
        }

        return [setMoney, getMoney];
    }

    const [setUSD, getUSDtoKRW] = currency_exchanger(1000, "USD");
    console.log(getUSDtoKRW());
    setUSD(1230);
    console.log(getUSDtoKRW());

    const [setJPY, getJPYtoKRW] = currency_exchanger(1000, "JPY");
    const [setTHB, getTHBtoKRW] = currency_exchanger(1000, "THB");
    console.log(getJPYtoKRW());
    console.log(getTHBtoKRW());
}

function assignment21() {
    const detail_products = [
        {
            product_id: 1,
            name: "GeForce RTX 4090",
            category: {
                category_id: 23,
                name: "Graphic Card",
            },
            option: [
                {
                    option_id: 12,
                    name: "256GB",
                    additional_price: 0,
                },
                {
                    option_id: 13,
                    name: "512GB",
                    additional_price: 100000,
                },
            ],
            price: 400000,
        },
        {
            product_id: 2,
            name: "Nike Air Max 97",
            category: {
                category_id: 108,
                name: "Shoes",
            },
            option: [
                {
                    option_id: 201,
                    name: "Triple White",
                    additional_price: 20000,
                },
                {
                    option_id: 202,
                    name: "Triple Black",
                    additional_price: 40000,
                },
            ],
            price: 200000,
        },
        {
            product_id: 3,
            name: "MacBook Air 15 M3, 16GB",
            category: {
                category_id: 49,
                name: "Notebook",
            },
            option: [
                {
                    option_id: 495,
                    name: "16GB",
                    additional_price: 0,
                },
                {
                    option_id: 496,
                    name: "32GB",
                    additional_price: 320000,
                },
            ],
            price: 2200000,
        },
    ];

    const productInformation = detail_products.flatMap(
        ({ product_id, name, category, option, price }) =>
            option.map(({ name, additional_price }) => ({
                product_id,
                name,
                category: category.id,
                option: { name: option.name, additional_price },
                price,
            }))
    );

    console.log(productInformation);
}

function assignment22() {
    const result = {
        success: false,
        body: [
            {
                name: "Aaron",
                age: 10,
                address: null,
            },
            {
                name: "Baron",
                age: 20,
                address: {
                    location: "Earth",
                },
            },
            {
                name: "Caron",
                age: 30,
                address: null,
                job: "Developer",
            },
        ],
    };
    const converted_users = result.body.map(({ name, age, address, job }) => {
        const user = { name, age };
        if (address) user.address = { location: address.location };
        if (job) user.job = job;
        return user;
    });

    console.log(converted_users);
}

function assignment23() {
    const user = {
        id: 1,
        name: "Aaron",
        age: 10,
        address: "Earth",
        job: "Developer",
        specialty: "Backend",
    };
    function handleChange(user, property, value) {
        const newUser = { ...user, property: value };
        return newUser;
    }

    const updated1 = handleChange(user, "job", "Designer");

    console.log(updated1);

    const products = [
        {
            category: "Graphic Card",
            name: "GeForce RTX 4090",
            price: 400000,
        },
        {
            category: "Shoes",
            name: "Nike Air Max 97 Triple White",
            price: 200000,
        },
    ];

    const product_to_add_1 = {
        category: "Notebook",
        name: "MacBook Air 15 M3, 16GB",
        price: 2200000,
    };

    const product_to_add_2 = {
        category: "Food",
        name: "Cavendish & Harvey Sour Cherry",
        price: 5000,
    };

    function add(list, element_to_add) {
        const newProduct = [...list, { ...element_to_add }];
        return newProduct;
    }

    const updated2 = add(products, product_to_add_1);
    const updated3 = add(updated2, product_to_add_2);

    console.log(updated2);
    console.log(updated3);
}

function assignment24() {
    const type = {
        frontend: {
            option: "FRONTEND_DEVELOPER",
            name: "프론트엔드 개발자",
        },
        backend: {
            option: "BACKEND_DEVELOPER",
            name: "백엔드 개발자",
        },
        manager: {
            option: "PRODUCT_MANAGER",
            name: "프로덕트 매니저",
        },
        owner: {
            option: "PRODUCT_OWNER",
            name: "기획자",
        },
        designer: {
            option: "DESIGNER",
            name: "디자이너",
        },
    };

    class Company {
        constructor(name, hired) {
            this.name = name;
            this.hired = hired;
        }
        checkHiredEmployee(type) {
            const isHired = this.hired.some(
                (person) =>
                    person.toUpperCase().trim() ===
                    type.option.toUpperCase().replace("_", " ").trim()
            );
            return console.log(
                isHired
                    ? `${this.name}내에 ${type.name}가 있습니다`
                    : `${this.name}내에 ${type.name}가 없습니다`
            );
        }
    }

    const company_a = new Company("A Company", [
        "Frontend Developer",
        "Backend Developer",
        "Product Manager",
        "Product Owner",
        "Designer",
    ]);
    company_a.checkHiredEmployee(type.frontend);
    const company_b = new Company("B Company", [
        "Backend Developer",
        "Product Owner",
        "Designer",
    ]);
    company_b.checkHiredEmployee(type.frontend);
    const company_c = new Company("C Company", [
        "Frontend Developer",
        "Product Manager",
        "Designer",
    ]);
    company_c.checkHiredEmployee(type.frontend);
    const company_d = new Company("D Company", [
        "Backend Developer",
        "Product Owner",
    ]);
    company_d.checkHiredEmployee(type.frontend);
}

function assignment25() {
    class User {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.favorites = [];
        }

        addFavorites(...rest) {
            this.favorites.push(...rest);
        }
    }
    const user = new User("Aaron", 10);
    user.addFavorites("Book");
    user.addFavorites("Cook", "Sports");
    user.addFavorites("Drive", "Study", "Hiking");
    console.log(user.favorites.join(","));
}

function assignment26() {
    class Database {
        constructor() {
            this.data = [];
        }

        save({
            name = "empty",
            email = "empty",
            age = "empty",
            job = "No Job",
            specialty = "Not Determined",
        }) {
            this.data.push({ name, email, age, job, specialty });
        }
    }
    const users = new Database();
    const json = [
        {
            name: "Aaron",
            email: "aaron@gmail.com",
            age: 10,
            job: "Developer",
            specialty: "Backend",
        },
        {
            name: "Baron",
            email: "baron@gmail.com",
            age: 20,
            job: "Designer",
        },
        {
            name: "Caron",
            email: "caron@gmail.com",
            age: 30,
        },
        {
            name: "Daron",
            age: 40,
        },
    ];
    json.map((each) => users.save(each));
    console.log(users.data);
}

function assignment27() {
    function printValue({
        name,
        korean = undefined,
        mathematics = undefined,
        english = undefined,
        science = undefined,
    }) {
        console.log(`> ${name}`);
        console.log(`- 국어 : ${korean ?? "응시하지 않음"}`);
        console.log(`- 수학 : ${mathematics ?? "응시하지 않음"}`);
        console.log(`- 영어 : ${english ?? "응시하지 않음"}`);
        console.log(`- 과학 : ${science ?? "응시하지 않음"}`);
    }
    const students = [
        {
            name: "Aaron",
            korean: 84,
            mathematics: 81,
            english: 50,
            science: 42,
        },
        {
            name: "Baron",
            korean: 0,
            mathematics: 100,
            science: 68,
        },
        {
            name: "Caron",
            korean: 0,
            mathematics: 25,
            english: 0,
            science: 100,
        },
        {
            name: "Daron",
            korean: 79,
            english: 24,
            science: null,
        },
    ];

    students.map((stu, idx) => {
        printValue(stu);
    });
}

function assignment28() {
    const result = [
        {
            post_id: 1,
            title: "자바스크립트 문법을 잘 사용하는 방법",
            desc: "닥치고 많이 만들고 작성하세요",
            writer: {
                user_id: 10,
                username: "Aaron",
                address: {
                    city: "Mapo",
                    postcode: "04212",
                },
            },
            replies: [
                {
                    desc: "너무 유익한 글이네요!",
                    writer: {
                        user_id: 20,
                        username: "Baron",
                        ip: "10.0.0.1",
                        statistics: {
                            level: "Silver",
                            replies: 32,
                            posts: 10,
                        },
                    },
                },
                {
                    desc: "장난하냐? 이딴게 글이라고",
                    writer: {
                        user_id: 30,
                        username: "Caron",
                        ip: "10.0.0.2",
                        statistics: {
                            level: "Iron",
                            replies: 3,
                            posts: 0,
                        },
                    },
                },
                {
                    desc: "윗댓분 너무 인성파탄나셨네요",
                    writer: {
                        user_id: 40,
                        username: "Daron",
                        ip: "10.0.0.3",
                        statistics: {
                            level: "Gold",
                            replies: 67,
                            posts: 12,
                        },
                    },
                },
            ],
        },
        {
            post_id: 2,
            title: "자바 스프링 개발을 쉽게하는 방법",
            desc: "닥치고 많이 만들고 작성하세요",
            writer: {
                user_id: 20,
                username: "Baron",
            },
            replies: [],
        },
        {
            post_id: 3,
            title: "AWS 설계 및 인프라 설정 쉽게하는 방법",
            desc: "닥치고 많이 만드세요",
            writer: {
                user_id: 30,
                username: "Caron",
                address: {
                    city: "Seoul",
                    postcode: "03171",
                },
            },
            replies: [
                {
                    desc: "맞아요 AWS 는 확실히 많이 만들어봐야하는듯",
                    writer: {
                        user_id: 50,
                        username: "Earon",
                        ip: "10.0.0.4",
                    },
                },
            ],
        },
    ];

    result.map(({ post_id, title, desc, writer, replies = undefined }) => {
        console.log("----------");
        console.log(`> 글 제목 : ${title}`);
        console.log(`> 글 내용 : ${desc}`);
        console.log(
            `> 글 쓴이 : ${writer.username} | 사는곳 ${writer.address}`
        );
        const reply = replies && replies[0];
        if (reply) {
            console.log(reply?.desc && `  - 최근 댓글 : ${reply?.desc}`);
            console.log(
                reply?.writer?.username &&
                    `  - 최근 댓글 작성자 : ${reply?.writer?.username}`
            );
        }
    });

    // const un = undefined;
    // const secondUn = un?.desc;
    // console.log(secondUn);
}

function assignment29() {
    const promise = new Promise((resolve, reject) => {
        resolve("good");
        // reject("no");
    });
    console.log(promise);
}

function assignment30() {
    const promise = new Promise((resolve, reject) => {
        resolve({ success: true });
    });

    console.log(promise);
}
