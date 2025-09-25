package com.myapp.discussionboard.model;

import java.util.UUID;

public class Post {
    private String _id;
    private String text;
    private String author;

    public Post(String text, String author) {
        this._id = UUID.randomUUID().toString();
        this.text = text;
        this.author = author;
    }

    public String get_id() { return _id; }
    public String getText() { return text; }
    public String getAuthor() { return author; }
}
