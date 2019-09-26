// Reuse your BlogPost class
// Create a Blog class which can
    // store a list of BlogPosts
    // add BlogPosts to the list
    // delete(int) one item at given index
    // update(int, BlogPost) one item at the given index and update it with another BlogPost

import { BlogPost } from "../day-3/02-blogpost"

class Blog {
    _blogPosts: BlogPost[];

    constructor () {
        this._blogPosts = [];
    }

    add (blogPost: BlogPost): void {
        this._blogPosts.push(blogPost);
    }

    delete (index:number) {
        this._blogPosts.splice(index, 1);
    }

    update (index:number, blogPost:BlogPost) {
        this._blogPosts.splice(index, 1, blogPost);
    }
}

let blog = new Blog();
// creating the blogposts
let blogPost1 = new BlogPost ('John Doe', 'Lorem Ipsum', 'Lorem ipsum dolor sit amet.', '2000.05.04.');
let blogText2:string = 'A popular long-form, stick-figure-illustrated blog about almost everything.';
let blogPost2 = new BlogPost ('Tim Urban', 'Wait but why', blogText2, '2010.10.10.');
let blogText3:string = 'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.';
let blogPost3 = new BlogPost ('William Turton', 'One Engineer Is Trying to Get IBM to Reckon With Trump', blogText3, '2017.03.28.')

blog.add(blogPost1);
blog.add(blogPost2);

console.log(blog._blogPosts);
console.log('---------------------------------------\n');

blog.update(0, blogPost3);
console.log(blog._blogPosts);
console.log('---------------------------------------\n');

blog.delete(1);
console.log(blog._blogPosts);