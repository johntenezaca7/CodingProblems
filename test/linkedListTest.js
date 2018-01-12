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

    it('Heads next value be the same head value', () => {
        testList.addToTail(5);
        testList.addToTail(8);
        testList.addToTail(3);
 
        const testHeadNext = testList.head.value;
        const testTail = testList.head.next.value;

        expect(testHeadNext).to.equal(testTail)
    })
})



