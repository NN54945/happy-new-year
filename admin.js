// admin.js

// Admin Panel Management Logic

class AdminPanel {
    constructor() {
        this.users = [];
        this.posts = [];
    }

    addUser(user) {
        this.users.push(user);
        console.log(`User ${user} added.`);
    }

    removeUser(user) {
        this.users = this.users.filter(u => u !== user);
        console.log(`User ${user} removed.`);
    }

    addPost(post) {
        this.posts.push(post);
        console.log(`Post added: ${post}`);
    }

    removePost(post) {
        this.posts = this.posts.filter(p => p !== post);
        console.log(`Post removed: ${post}`);
    }
}