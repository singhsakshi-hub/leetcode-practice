function romanToInt(s) {

    const romanMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }
    let total = 0;

    for (i = 0; i < s.length; i++) {
        let current = romanMap[s[i]];
        let next = romanMap[s[i + 1]];

        if (next > current) {
            total = total + (next - current);
            i++
        } else {
            total = total + current
        }
    }
    return total;
};

