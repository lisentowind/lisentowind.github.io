// 实现一个二叉树
export class Node {
    value: number
    left: Node | null
    right: Node | null
    constructor(value: number) {
        this.value = value
        this.left = null
        this.right = null
    }
}

export class BinaryTree {
    root: Node | null
    constructor() {
        this.root = null
    }
    insert(value: number) {
        const newNode = new Node(value)
        if (this.root === null) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }
    insertNode(node: Node, newNode: Node) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode
            } else {
                this.insertNode(node.left, newNode)
            }
        } else {
            if (node.right === null) {
                node.right = newNode
            } else {
                this.insertNode(node.right, newNode)
            }
        }
    }
    // 前序遍历
    preOrderTraverse() {
        this.preOrderTraverseNode(this.root)
    }
    preOrderTraverseNode(node: Node | null) {
        if (node !== null) {
            console.log(node.value)
            this.preOrderTraverseNode(node.left)
            this.preOrderTraverseNode(node.right)
        }
    }
    // 中序遍历
    inOrderTraverse() {
        this.inOrderTraverseNode(this.root)
    }
    inOrderTraverseNode(node: Node | null) {
        if (node !== null) {
            this.inOrderTraverseNode(node.left)
            console.log(node.value)
            this.inOrderTraverseNode(node.right)
        }
    }
    // 后序遍历
    postOrderTraverse() {
        this.postOrderTraverseNode(this.root)
    }
    postOrderTraverseNode(node: Node | null) {
        if (node !== null) {
            this.postOrderTraverseNode(node.left)
            this.postOrderTraverseNode(node.right)
            console.log(node.value)
        }
    }
    // 最小值
    min() {
        return this.minNode(this.root)
    }
    minNode(node: Node | null) {
        if (node) {
            while (node && node.left !== null) {
                node = node.left
            }
            return node.value
        }
        return null
    }
    // 最大值
    max() {
        return this.maxNode(this.root)
    }
    maxNode(node: Node | null) {
        if (node
        ) {
            while (node && node.right !== null) {
                node = node.right
            }
            return node.value
        }
        return null
    }
    // 搜索特定值
    search(value: number) {
        return this.searchNode(this.root, value)
    }
    searchNode(node: Node | null, value: number): boolean {
        if (node === null) {
            return false
        }
        if (value < node.value) {
            return this.searchNode(node.left, value)
        } else if (value > node.value) {
            return this.searchNode(node.right, value)
        } else {
            return true
        }
    }

    // 删除节点
    remove(value: number) {
        this.root = this.removeNode(this.root, value)
    }

    removeNode(node: Node | null, value: number) {
        if (node === null) {
            return null
        }
        if (value < node.value) {
            node.left = this.removeNode(node.left, value)
            return node
        } else if (value > node.value) {
            node.right = this.removeNode(node.right, value)
            return node
        } else {
            // 叶子节点
            if (node.left === null && node.right === null) {
                node = null
                return node
            }
            // 只有一个子节点
            if (node.left === null) {
                node = node.right
                return node
            } else if (node.right === null) {
                node = node.left
                return node
            }
            // 有两个子节点
            const aux = this.findMinNode(node.right)
            node.value = aux.value
            node.right = this.removeNode(node.right, aux.value)
            return node
        }
    }
    findMinNode(node: Node) {
        while (node && node.left !== null) {
            node = node.left
        }
        return node
    }
}