export class ListNode {
    constructor(item) {
        this.item = item;
        this.next = null;
    }
}
export default class LinkedList {
    constructor() {
        this.header = new ListNode();
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
        if (index < 1) return false;
        let prev = this.header;
        for (let i = 1; prev && i < index; i++) {
            prev = prev.next;
        }
        if (!prev) return false;
        const temp = prev.next;
        prev.next = new ListNode(item);
        prev.next.next = temp;
        return true;
    }
    deleteList() { }
    header() { }
    first() { }
    advance() { }
    retrieve() { }
    get(index) {
        if (index < 1) return -1;
        let node = this.header, i = 0;
        while (node) {
            if (i == index) return node.item;
            node = node.next;
            i++;
        }
        return -1;
    }
}
