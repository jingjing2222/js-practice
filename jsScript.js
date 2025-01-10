import class_1229 from "./days/1229.js";
import { class_0102 } from "./days/0102.js";
import class_0110 from "./days/0110.js";

document.addEventListener("keydown", (e) => {
    if (!(e.code === "Enter" && e.isComposing === false)) return;
    jsScript();
});

function jsScript() {
    // class_0102();
    class_0110();
}
