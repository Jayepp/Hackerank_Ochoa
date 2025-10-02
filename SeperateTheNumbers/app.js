function separateNumbers(s) {
    for (let length = 1; length <= Math.floor(s.length / 2); length++) {
        let first = BigInt(s.substring(0, length));
        let num = first;
        let built = "";

        while (built.length < s.length) {
            built += num.toString();
            num++;
        }

        if (built === s) {
            console.log("YES " + first);
            return;
        }
    }
    console.log("NO");
}
