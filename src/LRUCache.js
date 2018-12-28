/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {

    this.capacity = capacity;
    this.head = this.tail = null;
    this.size = 0;
};

let Node = function (key, value) {
    this.key = key;
    this.value = value;
    this.pre = this.next = null;
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    let cur = this.head;
    while(cur){
        if(cur.key === key){
            if(!cur.pre) return cur.value;
            else cur.pre.next = cur.next;
            if(cur.next) cur.next.pre = cur.pre;
            cur.pre = null;
            cur.next = this.head;
            this.head.pre = cur;
            this.head = cur;
            return cur.value;
        }
        cur = cur.next;
    }
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    let node = new Node(key, value);
    if(!this.head) {
        this.head = node;
        this.size++;
        return;
    }
    if(this.capacity === 1){
        this.head = node;
        return;
    }

    let cur = this.head;
    while(cur){
        if(cur.key === key){
            if(cur.pre) cur.pre.next = cur.next;
            else this.head = cur.next;
            if(cur.next) cur.next.pre = cur.pre;
            cur.pre = null;
            cur.next = null;
            this.size--;
            break;
        }
        cur = cur.next;
    }
    if(this.size >= this.capacity && this.capacity > 1){
        cur = this.head;
        while(cur.next){
            cur = cur.next;
        }
        if(cur.pre) cur.pre.next = null;
        cur.pre = null;
        this.size--;
    }

    let tmp = this.head;
    this.head = node;
    node.next = tmp;
    if(tmp) tmp.pre = node;
    this.size++;

};

let cache = new LRUCache(10);

let s = [[10,13],[3,17],[6,11],[10,5],[9,10],[13],[2,19],[2],[3],[5,25],[8],[9,22],[5,5],[1,30],[11],[9,12],[7],[5],[8],[9],[4,30],[9,3],[9],[10],[10],[6,14],[3,1],[3],[10,11],[8],[2,14],[1],[5],[4],[11,4],[12,24],[5,18],[13],[7,23],[8],[12],[3,27],[2,12],[5],[2,9],[13,4],[8,18],[1,7],[6],[9,29],[8,21],[5],[6,30],[1,12],[10],[4,15],[7,22],[11,26],[8,17],[9,29],[5],[3,4],[11,30],[12],[4,29],[3],[9],[6],[3,4],[1],[10],[3,29],[10,28],[1,20],[11,13],[3],[3,12],[3,8],[10,9],[3,26],[8],[7],[5],[13,17],[2,27],[11,15],[12],[9,19],[2,15],[3,16],[1],[12,17],[9,1],[6,19],[4],[5],[5],[8,1],[11,7],[5,2],[9,28],[1],[2,2],[7,4],[4,22],[7,24],[9,26],[13,28],[11,26]]
// s = [[2,1],[2,2],[2],[1,1],[4,1],[2]];
for(let i = 0; i < s.length; i++){
    if(s[i].length > 1){
        cache.put(s[i][0],s[i][1]);
    }else{
        console.log(cache.get(s[i][0]));
    }
}


// console.log(cache);

// let cache = new LRUCache(2);
// console.log(cache.get(2));
// cache.put(2, 6);
// console.log(cache.get(1));
// cache.put(1, 5);
// cache.put(1, 2);
// console.log(cache.get(1));
// console.log(cache.get(2));

// let cache = new LRUCache(3);
// cache.put(1, 1);
// cache.put(2, 2);
// cache.put(3, 3);
// cache.put(4, 4);
// console.log(cache.get(4));
// console.log(cache.get(3));
// console.log(cache.get(2));
// console.log(cache.get(1));
// cache.put(5, 5);
// console.log(cache.get(1));
// console.log(cache.get(2));
// console.log(cache.get(3));
// console.log(cache.get(4));
// console.log(cache.get(5));