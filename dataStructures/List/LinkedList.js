export class ListNode {
    constructor(item) {
        this.item = item;
        this.next = null;
    }
}
export default class LinkedList {
    constructor() {
        this.header = new ListNode();
        this.size = 0;
    }
    makeEmpty() { }
    isEmpty() {
        return this.header.next === null;
    }
    isLast() { }
    find(item) { }
    delete(item) { }
    findPrevious() { }
    insert(item, index) {
        if (index < 1 || index > this.size + 1) return false;
        let prev = this.header;
        for (let i = 1; i < index; i++)  prev = prev.next;
        const temp = prev.next;
        prev.next = new ListNode(item);
        prev.next.next = temp;
        this.size++;
        return true;
    }
    deleteList() { }
    header() { }
    first() { }
    advance() { }
    retrieve() { }
    get(index) {
        if (index < 1 || index > this.size) return -1;
        let node = this.header;
        for (let i = 1; i <= index; i++) node = node.next;
        return node.item;
    }
    getHeader() {
        return this.header.next;
    }
    getSize() {
        return this.size;
    }
}
