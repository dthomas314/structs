class MinHeap {
    constructor() {
        this.heap = [null];
    }


    getMin() {
        return this.heap[1];
    }

    
    print() {
        console.log(this.heap);
    }

    insert(newValue) {
        this.heap.push(newValue);

        if(this.heap.length > 1) {
            let current = this.heap.length - 1;            

            while(current > 1) {
                let parent = Math.floor(current/2);
                if (this.heap[parent] > this.heap[current]) {
                    [this.heap[parent], this.heap[current]] = [this.heap[current], this.heap[parent]];
                    current = parent;
                }
                else
                    current = 1;
            }
        }
    }

    remove() {
        if(this.heap.length == 1) {
            return null;
        } else {
            let top = this.getMin();

            if(this.heap.length == 2)
                this.heap.pop();
            else
                this.heap[1] = this.heap.pop();

            if(this.heap.length > 1) {
                let current = 1;
                let left = current * 2;
                let right = left + 1;
    
                while(this.heap[left] && (this.heap[current] > this.heap[left] || this.heap[current] > this.heap[right])) {
                    if(this.heap[right] === undefined || this.heap[left] < this.heap[right]) {
                        [this.heap[current], this.heap[left]] = [this.heap[left], this.heap[current]];
                        current = left;
                    } else {
                        [this.heap[current], this.heap[right]] = [this.heap[right], this.heap[current]];
                        current = right;                    
                    }
    
                    left = current * 2;
                    right = left + 1;                
                }
            }

            return top;
        }
    }
}

module.exports = MinHeap;