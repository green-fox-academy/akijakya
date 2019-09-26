// BlogPost
// Create a BlogPost class that has
    // an authorName
    // a title
    // a text
    // a publicationDate
// Create a few blog post objects:
    // "Lorem Ipsum" titled by John Doe posted at "2000.05.04."
        // Lorem ipsum dolor sit amet.
    // "Wait but why" titled by Tim Urban posted at "2010.10.10."
        // A popular long-form, stick-figure-illustrated blog about almost everything.
    // "One Engineer Is Trying to Get IBM to Reckon With Trump" titled by William Turton at "2017.03.28."
        // Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.

export class BlogPost {
    private _authorName:string;
    private _title:string;
    private _text:string;
    private _publicationDate:string;

    constructor(authorName:string, title:string, text:string, publicationDate:string) {
        this._authorName = authorName;
        this._title = title;
        this._text = text;
        this._publicationDate = publicationDate;
    }

    public printBlogpost ():void {
        console.log('"' + this._title + '" titled by ' + this._authorName + ' posted at "' + this._publicationDate + '"\n\t' + this._text);
    }
}

/*
// creating the blogposts
let blogPost1 = new BlogPost ('John Doe', 'Lorem Ipsum', 'Lorem ipsum dolor sit amet.', '2000.05.04.');
let blogText2:string = 'A popular long-form, stick-figure-illustrated blog about almost everything.';
let blogPost2 = new BlogPost ('Tim Urban', 'Wait but why', blogText2, '2010.10.10.');
let blogText3:string = 'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.';
let blogPost3 = new BlogPost ('William Turton', 'One Engineer Is Trying to Get IBM to Reckon With Trump', blogText3, '2017.03.28.')

// calling the printBlogpost method of the BlogPost Class
blogPost1.printBlogpost();
blogPost2.printBlogpost();
blogPost3.printBlogpost();
*/