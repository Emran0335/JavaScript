//break is used to interrupt a loop

for (let i = 0; i <= 3; i++) {
    if (i == 3) {
        break;
    }
    console.log(i);
}

// The above code stops if 3 is found in the iteration process


// continue
//We use the keyword continue to skip a certain iterations

for (let i = 0; i <= 5; i++) {
    if (i == 3) {
        continue
    }
    console.log(i);
}
