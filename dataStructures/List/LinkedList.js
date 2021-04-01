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
    isEmpty() {
        return this.header.next === null;
    }
    isLast() { }
    find(item) {

    }
    delete(item) {
        let prev = this.header;
        let current = prev.next;
        while (current) {
            if (current.item === item) {
                prev.next = current.next;
                return true;
            }
            prev = current;
            current = current.next;
        }
        return false;
    }
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
