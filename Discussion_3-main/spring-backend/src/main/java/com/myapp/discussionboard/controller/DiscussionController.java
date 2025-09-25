package com.myapp.discussionboard.controller;

import com.myapp.discussionboard.model.Discussion;
import com.myapp.discussionboard.service.DiscussionService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/discussions")
@CrossOrigin(origins = "http://localhost:3000") // allow frontend
public class DiscussionController {
    private final DiscussionService service;

    public DiscussionController(DiscussionService service) {
        this.service = service;
    }

    @GetMapping
    public List<Discussion> getDiscussions() {
        return service.getAllDiscussions();
    }

    @PostMapping
    public Discussion createDiscussion(@RequestBody Map<String, String> body) {
        return service.addDiscussion(body.get("title"), body.get("createdBy"));
    }

    @DeleteMapping("/{id}")
    public void deleteDiscussion(@PathVariable String id) {
        service.deleteDiscussion(id);
    }

    @PostMapping("/{id}/posts")
    public Discussion addPost(@PathVariable String id, @RequestBody Map<String, String> body) {
        return service.addPost(id, body.get("text"), body.get("author"));
    }

    @DeleteMapping("/{id}/posts/{postId}")
    public void deletePost(@PathVariable String id, @PathVariable String postId) {
        service.deletePost(id, postId);
    }

    @PostMapping("/{id}/vote")
    public Discussion vote(@PathVariable String id, @RequestBody Map<String, String> body) {
        return service.vote(id, body.get("username"), body.get("type"));
    }
}
