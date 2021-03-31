import assert from 'assert';
import LinkedList, { ListNode } from '../List/LinkedList';
describe('LinkNode', function () {
    it('test LinkNode item', function () {
        var link = new ListNode(123);
        assert.equal(link.item, 123);
    });
});
describe('LinkedList', function () {
    it('test LinkedList isEmpty', function () {
        var linkedList = new LinkedList();
        assert.equal(linkedList.isEmpty(), true);
    });
    it('test LinkedList insert', function () {
        var linkedList = new LinkedList();
        linkedList.insert(1, 1);
        assert.equal(linkedList.isEmpty(), false);
        linkedList.insert(2, 2);
        linkedList.insert(3, 3);
        assert.equal(linkedList.get(1), 1);
        assert.equal(linkedList.get(2), 2);
        assert.equal(linkedList.get(3), 3);
        linkedList.insert(10, 1);
        assert.equal(linkedList.insert(0, 0), false);
        assert.equal(linkedList.insert(1, 6), false);
        assert.equal(linkedList.get(1), 10);
        assert.equal(linkedList.get(2), 1);
        assert.equal(linkedList.get(3), 2);
        assert.equal(linkedList.get(4), 3);
        assert.equal(linkedList.get(0), -1);
        assert.equal(linkedList.get(5), -1);
    });
})