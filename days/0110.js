export default function class_0110() {
    awaitFunction();
    promiseFunction();
}

async function awaitFunction() {
    try {
        const result = await fetch("/users/post", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: "good" }),
        });
        console.log(`1번째 await ${result}`);
        if (!result.ok) throw new Error("에러");
        console.log(`2번째 await ${result}`);
    } catch (error) {
        console.log(error.message);
    }
}

function promiseFunction() {
    const promise = fetch("/users/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: "good" }),
    });
    promise
        .then((result) => {
            console.log(`1번째 then ${result}`);
            if (!result.ok) throw new Error("에러");
            return result;
        })
        .then((result) => console.log(`2번째 then ${result}`))
        .catch((error) => console.log(error.message));
}
