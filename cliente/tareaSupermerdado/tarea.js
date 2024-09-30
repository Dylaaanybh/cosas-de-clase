function queueTime(customers, n) {
    let queues = new Array(n).fill(0);
    customers.forEach(customer => {
        let idx = queues.indexOf(Math.min(...queues));
        queues[idx] += customer;
    });
    return Math.max(...queues);
}

console.log(queueTime([5,3,4],1));
console.log(queueTime([10,2,2,2],2));
console.log(queueTime([2,3,10],2));
console.log(queueTime([5,2,3,6,7,1,4,9,2,6,4],3));