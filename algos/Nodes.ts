class NodeA<T> {
    public value: T;
    public next: NodeA<T> | null = null;
    constructor(public data: T) {
        this.value = data;
    }
}
var n1 = new NodeA<number>(3);
var n2 = new NodeA<number>(2);
var n3 = new NodeA<number>(1);

n1.next = n2;
n2.next = n3;
n3.next = null;

//(1) -> (2) -> (3)

//head will not be null or undefined

function getMax(head: any): number {

    let maxValue = Number.MIN_VALUE;

    while (head !== null) {
        if (maxValue < head.value) {
            maxValue = head.value;
        }
        head = head.next;
    }
    return maxValue;
}

function getMin(head: any): number {

    let maxValue = Number.MAX_VALUE;

    while (head !== null) {
        if (maxValue > head.value) {
            maxValue = head.value;
        }
        head = head.next;
    }
    return maxValue;
}

console.log(getMax(n1));
console.log(getMin(n1));