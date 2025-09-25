package com.myapp.discussionboard.service;

import com.myapp.discussionboard.model.Discussion;
import com.myapp.discussionboard.model.Post;
import com.myapp.discussionboard.repository.DiscussionRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DiscussionService {
    private final DiscussionRepository repo = new DiscussionRepository();

    public List<Discussion> getAllDiscussions() {
        return repo.findAll();
    }

    public Discussion addDiscussion(String title, String createdBy) {
        return repo.save(new Discussion(title, createdBy));
    }

    public void deleteDiscussion(String id) {
        repo.delete(id);
    }

    public Discussion addPost(String discussionId, String text, String author) {
        Discussion d = repo.findById(discussionId).orElseThrow();
        d.addPost(new Post(text, author));
        return d;
    }

    public void deletePost(String discussionId, String postId) {
        Discussion d = repo.findById(discussionId).orElseThrow();
        d.getPosts().removeIf(p -> p.get_id().equals(postId));
    }

    public Discussion vote(String discussionId, String username, String type) {
        Discussion d = repo.findById(discussionId).orElseThrow();

        d.getLikes().remove(username);
        d.getDislikes().remove(username);

        if ("like".equals(type)) {
            d.getLikes().add(username);
        } else if ("dislike".equals(type)) {
            d.getDislikes().add(username);
        }
        return d;
    }
}
