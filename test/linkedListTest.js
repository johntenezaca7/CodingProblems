const assert = require('chai').assert;
const expect = require('chai').expect;

var LinkedList = require('../problems/data-struc/linkedList').LinkedList;
var Node = require('../problems/data-struc/linkedList').Node;

let testList = new LinkedList();

describe('LinkedList', () => {
    it('Should Have a Head and a tail both set to null', () => {
        const testHead = testList.head;
        const testTail = testList.tail;
        expect(!!testHead && !!testTail).to.be.false;
    });

    it('Head and tail should be the same node if head and tail are both empty', () => {
        testList.addToTail(5);
        const testHead = testList.head;
        const testTail = testList.tail;
        expect(testHead).to.equal(testTail)
    });

    it('Heads value be the same heads next value', () => {
        testList.addToTail(5);
        testList.addToTail(8);
        testList.addToTail(3);
 
        const testHeadNext = testList.head.value;
        const testTail = testList.head.next.value;

        expect(testHeadNext).to.equal(testTail)
    });

    it('It should be able to return true for is node is on the list', () => {
        testList.addToTail(5);
        testList.addToTail(8);
        testList.addToTail(3);
        testList.addToTail(1);
        testList.addToTail(2);
        testList.addToTail(4);

        expect(testList.contains(1)).to.be.true;
    });
    it('It should be able to remove head from list', () => {
        testList.addToTail(5);
        testList.addToTail(8);
        testList.addToTail(3);
        testList.addToTail(1);

        const oldHead = testList.removeHead();
        const newHead= testList.head.value;
 
        expect(newHead).to.equal(8);

    })
})



