
class Node {

	constructor(val) {
		this.data = val;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor() {
        this.size = 0
        this.head = new Node(null)
        this.tail = new Node(null)
        this.head.next = this.tail
        this.tail.prev = this.head
	}

	isEmpty() {
		if (this.head.next == this.tail) return true;
		return false;
	}
    getSize(){
        return this.size;
    }

	addItem(val) {
		
		let newNode = new Node(val);

		if (this.head.next == this.tail) {
            this.head.next = newNode
            newNode.prev = this.head
            this.tail.prev = newNode
            newNode.next = this.tail
		}

		else {
            let temp = this.tail.prev
            temp.next = newNode
            newNode.prev = temp
            newNode.next = this.tail
            this.tail.prev = newNode
		}
        this.size++
	}

    removeItem(node){
        let temp = node.next
        node.prev.next = temp 
        temp.prev = node.prev
        node.data = null//??
        node.next = null
        node.prev = null
    }

	display() {

		if (!this.isEmpty()) {

			let curr = this.head.next;
			while (curr !== this.tail) {

				console.log(curr.data);

				curr = curr.next;
			}
		}
	}
}

// const dll = new DoublyLinkedList();

// dll.addItem(25);
// dll.addItem(27);
// dll.addItem(17);
// dll.addItem(29);

// temp = dll.head.next
// dll.removeItem(temp)

module.exports = {DoublyLinkedList, Node}
// dll.display();