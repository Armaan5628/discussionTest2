package com.myapp.discussionboard.model;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

public class Discussion {
    private String _id;
    private String title;
    private String createdBy;
    private List<Post> posts;
    private List<String> likes;
    private List<String> dislikes;

    public Discussion(String title, String createdBy) {
        this._id = UUID.randomUUID().toString();
        this.title = title;
        this.createdBy = createdBy;
        this.posts = new ArrayList<>();
        this.likes = new ArrayList<>();
        this.dislikes = new ArrayList<>();
    }

    public String get_id() { return _id; }
    public String getTitle() { return title; }
    public String getCreatedBy() { return createdBy; }
    public List<Post> getPosts() { return posts; }
    public List<String> getLikes() { return likes; }
    public List<String> getDislikes() { return dislikes; }

    public void addPost(Post post) {
        this.posts.add(post);
    }
}
